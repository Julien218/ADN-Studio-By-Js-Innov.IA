/**
 * Default design-generation API route used by the generator page.
 *
 * This fallback keeps the generation flow working out of the box by
 * returning a deterministic placeholder image. Replace this handler
 * with a real AI integration when a backend service is available.
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt = '' } = req.body ?? {};
  const encodedPrompt = encodeURIComponent(prompt || 'Design ADN Studio');
  const image = `https://placehold.co/1024x1024/111827/F9FAFB/png?text=${encodedPrompt}`;

  return res.status(200).json({ image });
}
