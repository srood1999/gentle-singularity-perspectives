// Converts raw 24kHz 16-bit mono PCM bytes from Gemini TTS into a standard RIFF WAV buffer
function pcm16ToWavBuffer(pcmBuffer, sampleRate = 24000, numChannels = 1) {
  const byteRate = sampleRate * numChannels * 2;
  const blockAlign = numChannels * 2;
  const wavHeader = Buffer.alloc(44);

  wavHeader.write('RIFF', 0);
  wavHeader.writeUInt32LE(36 + pcmBuffer.length, 4);
  wavHeader.write('WAVE', 8);
  wavHeader.write('fmt ', 12);
  wavHeader.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  wavHeader.writeUInt16LE(1, 20);  // AudioFormat (1 = PCM)
  wavHeader.writeUInt16LE(numChannels, 22);
  wavHeader.writeUInt32LE(sampleRate, 24);
  wavHeader.writeUInt32LE(byteRate, 28);
  wavHeader.writeUInt16LE(blockAlign, 32);
  wavHeader.writeUInt16LE(16, 34); // BitsPerSample
  wavHeader.write('data', 36);
  wavHeader.writeUInt32LE(pcmBuffer.length, 40);

  return Buffer.concat([wavHeader, pcmBuffer]);
}

export const config = { maxDuration: 60 };

// Cache discovered TTS models across warm invocations (refresh hourly)
let cachedTtsModels = null;
let cachedAt = 0;
const FALLBACK_TTS_MODELS = ['gemini-2.5-flash-preview-tts', 'gemini-2.5-pro-preview-tts'];

async function getTtsModels(apiKey) {
  if (cachedTtsModels && Date.now() - cachedAt < 60 * 60 * 1000) return cachedTtsModels;
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}&pageSize=1000`);
    if (r.ok) {
      const data = await r.json();
      const names = (data.models || [])
        .map((m) => (m.name || '').replace(/^models\//, ''))
        .filter((n) => /tts/i.test(n));
      const versionOf = (n) => parseFloat((n.match(/gemini-(\d+(?:\.\d+)?)/) || [])[1] || '0');
      // Newest version first; prefer flash (fast) over pro within a version
      names.sort((a, b) => versionOf(b) - versionOf(a) || (/flash/.test(b) ? 1 : 0) - (/flash/.test(a) ? 1 : 0));
      if (names.length) {
        cachedTtsModels = Array.from(new Set([...names, ...FALLBACK_TTS_MODELS]));
        cachedAt = Date.now();
        return cachedTtsModels;
      }
    }
  } catch (_) {
    // fall through to static list
  }
  return FALLBACK_TTS_MODELS;
}

const ALLOWED_ORIGINS = [
  'https://srood1999.github.io',
  'https://gentle-singularity-perspectives.vercel.app'
];

export default async function handler(req, res) {
  // Allow the GitHub Pages copy of the app to use these natural Gemini voices too
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not configured.' });
  }

  const { text, voiceName = 'Charon' } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Missing required "text" payload.' });
  }

  const ttsModels = await getTtsModels(apiKey);

  let lastError = 'Gemini TTS request failed';

  for (const modelName of ttsModels.slice(0, 4)) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Read the following response naturally, warmly, and expressively in a lifelike conversational tone:\n\n${text}`
                  }
                ]
              }
            ],
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName
                  }
                }
              }
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const inlineData = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        if (inlineData?.data) {
          const mimeType = inlineData.mimeType || '';
          const rawBuffer = Buffer.from(inlineData.data, 'base64');

          // If Gemini returns raw L16 PCM, wrap it in a standard WAV header so all browsers play it natively
          if (mimeType.includes('L16') || mimeType.includes('pcm') || !mimeType.includes('wav')) {
            const rateMatch = mimeType.match(/rate=(\d+)/);
            const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
            const wavBuffer = pcm16ToWavBuffer(rawBuffer, sampleRate, 1);
            return res.status(200).json({
              audioDataUrl: `data:audio/wav;base64,${wavBuffer.toString('base64')}`,
              model: modelName,
              voiceName
            });
          }

          return res.status(200).json({
            audioDataUrl: `data:${mimeType};base64,${inlineData.data}`,
            model: modelName,
            voiceName
          });
        }
      } else {
        lastError = await response.text();
      }
    } catch (err) {
      lastError = err.message || String(err);
    }
  }

  return res.status(502).json({ error: lastError });
}
