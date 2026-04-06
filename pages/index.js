import { useState } from 'react';
import Link from 'next/link';
import AIInput from '../components/AIInput';
import TemplateSelector from '../components/TemplateSelector';

/**
 * Home page for ADN Studio.  Users can enter a free‑form prompt and
 * choose from a list of quick templates.  Pressing the generate button
 * redirects to the generator page where the AI will create the design.
 */
export default function Home() {
  const [prompt, setPrompt] = useState('');
  return (
    <div className="min-h-screen bg-[#0B0F2A] text-white p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400">ADN Studio</h1>
      <p className="text-center mt-2 opacity-80">Crée tes designs print avec l’IA</p>
      <div className="max-w-xl mx-auto mt-8">
        <AIInput
          value={prompt}
          onChange={setPrompt}
          placeholder="Ex : Carte de visite luxe garage noir et or"
        />
        {/*
          In a full implementation you would call your API here.  For the
          prototype we simply link to the generator page.  The generator page
          could read the prompt from query parameters or global state.
        */}
        <Link
          href={{ pathname: '/generator', query: { prompt } }}
          className="block mt-4 text-center bg-yellow-400 text-black py-3 rounded-xl font-semibold"
        >
          Générer avec IA
        </Link>
      </div>
      <h2 className="mt-12 text-xl font-semibold">Templates rapides</h2>
      <TemplateSelector />
    </div>
  );
}