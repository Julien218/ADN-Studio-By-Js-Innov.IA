import Link from 'next/link';

/**
 * TemplateSelector presents a grid of quick template options.  Each option
 * links to the project creation screen with a query parameter indicating
 * the selected template type.  Feel free to extend this list or adjust
 * the routing logic as your product evolves.
 */
const templates = [
  { name: 'Carte de visite', slug: 'carte' },
  { name: 'Affiche', slug: 'affiche' },
  { name: 'Flyer', slug: 'flyer' },
  { name: 'Magazine', slug: 'magazine' },
  { name: 'Personnalisé', slug: 'custom' }
];

export default function TemplateSelector() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {templates.map((t) => (
        <Link
          key={t.slug}
          href={`/create-project?type=${t.slug}`}
          className="bg-[#111] hover:bg-[#222] p-4 rounded-xl text-center text-white"
        >
          {t.name}
        </Link>
      ))}
    </div>
  );
}