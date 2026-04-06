import { useRouter } from 'next/router';
import { useState } from 'react';
import AIInput from '../components/AIInput';
import PreviewCanvas from '../components/PreviewCanvas';
import { generateDesign } from '../services/aiService';

/**
 * The Generator page collects the user's prompt and assets and sends
 * them to the AI back end via the `generateDesign` service function.
 * A preview of the generated design is displayed when the API call
 * returns successfully.
 */
export default function Generator() {
  const router = useRouter();
  const { prompt: initialPrompt = '' } = router.query;
  const [prompt, setPrompt] = useState(initialPrompt);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateDesign(prompt, {});
      // Expecting result to contain an image URL or base64 string
      setImage(result.image);
    } catch (err) {
      console.error(err);
      alert('Échec de la génération du design.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F2A] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Générateur de design</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <AIInput
          value={prompt}
          onChange={setPrompt}
          placeholder="Décrivez votre design..."
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold"
        >
          {loading ? 'Génération en cours...' : 'Générer'}
        </button>
        {image && (
          <>
            <h2 className="text-xl font-semibold mt-8">Aperçu</h2>
            <PreviewCanvas image={image} />
          </>
        )}
      </div>
    </div>
  );
}