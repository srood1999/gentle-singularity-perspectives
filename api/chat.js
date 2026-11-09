// Cache discovered models across warm serverless invocations (refresh every 1 hour)
let cachedDynamicModels = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 60 * 60 * 1000;

async function getOrderedModelsToTry(apiKey) {
  const now = Date.now();
  if (cachedDynamicModels && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedDynamicModels;
  }

  const fallbackOrder = [
    'gemini-flash-latest',
    'gemini-3.7-flash',
    'gemini-2.5-flash',
    'gemini-2.0-flash'
  ];

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    if (res.ok) {
      const data = await res.json();
      const models = Array.isArray(data?.models) ? data.models : [];

      // Find all Gemini Flash models that support generateContent (excluding exp/vision-only/tts/audio-only)
      const flashCandidates = models
        .filter((m) => {
          const name = (m?.name || '').replace(/^models\//, '');
          const methods = m?.supportedGenerationMethods || [];
          return (
            methods.includes('generateContent') &&
            /^gemini-[0-9.]+-flash$/.test(name)
          );
        })
        .map((m) => m.name.replace(/^models\//, ''))
        .sort((a, b) => {
          const verA = parseFloat(a.replace('gemini-', '').replace('-flash', '')) || 0;
          const verB = parseFloat(b.replace('gemini-', '').replace('-flash', '')) || 0;
          return verB - verA; // Newest version first
        });

      const combined = Array.from(
        new Set([...flashCandidates, ...fallbackOrder])
      );
      cachedDynamicModels = combined;
      cacheTimestamp = now;
      return combined;
    }
  } catch {
    // Fall back to static + rolling alias list if model listing fails
  }

  return fallbackOrder;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not configured.' });
  }

  const { contents, systemInstruction, tools } = req.body || {};
  if (!contents) {
    return res.status(400).json({ error: 'Missing required "contents" payload.' });
  }

  const preferredEnvModel = process.env.GEMINI_MODEL || process.env.VITE_GEMINI_MODEL;
  const discoveredModels = await getOrderedModelsToTry(apiKey);
  const modelsToTry = preferredEnvModel
    ? Array.from(new Set([preferredEnvModel, ...discoveredModels]))
    : discoveredModels;

  let lastError = 'Upstream API call failed';

  for (const modelName of modelsToTry) {
    try {
      const payload = { contents };
      if (systemInstruction) {
        payload.systemInstruction = systemInstruction;
      }
      if (tools) {
        payload.tools = tools;
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );

      if (response.ok) {
        const data = await response.json();
        const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (replyText) {
          return res.status(200).json({ text: replyText, model: modelName });
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
