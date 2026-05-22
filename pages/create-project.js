import { useState } from 'react';
import { useRouter } from 'next/router';

/**
 * The CreateProject page lets users select the format, orientation and
 * style of their project before proceeding to the generator.  It uses
 * query parameters (e.g. ?type=carte) passed from TemplateSelector.
 */
export default function CreateProject() {
  const router = useRouter();
  const { type: initialType } = router.query;
  const [type, setType] = useState(initialType || 'carte');
  const [orientation, setOrientation] = useState('horizontal');
  const [style, setStyle] = useState('luxe');

  const handleContinue = () => {
    router.push({
      pathname: '/generator',
      query: { type, orientation, style }
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0F2A] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Créer un projet</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Type de support</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg"
          >
            <option value="carte">Carte de visite</option>
            <option value="affiche">Affiche</option>
            <option value="flyer">Flyer</option>
            <option value="magazine">Magazine</option>
            <option value="custom">Personnalisé</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Orientation</label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg"
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg"
          >
            <option value="luxe">Luxe</option>
            <option value="moderne">Moderne</option>
            <option value="minimal">Minimal</option>
            <option value="corporate">Corporate</option>
          </select>
        </div>
        <button
          onClick={handleContinue}
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}