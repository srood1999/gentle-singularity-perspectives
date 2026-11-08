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

  const modelsToTry = ['gemini-3.7-flash', 'gemini-2.5-flash', 'gemini-2.0-flash'];
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
