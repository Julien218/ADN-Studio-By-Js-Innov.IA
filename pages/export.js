import { useRouter } from 'next/router';
import ExportPanel from '../components/ExportPanel';
import PreviewCanvas from '../components/PreviewCanvas';

/**
 * The Export page wraps the ExportPanel and shows the final design preview.
 * It expects an `image` query parameter to be provided via the router.
 */
export default function ExportPage() {
  const router = useRouter();
  const { image } = router.query;
  const handleDownloadPdf = () => {
    // TODO: Add PDF export logic here
    alert('Export PDF non implémenté.');
  };
  const handleDownloadPng = () => {
    if (!image) {
      alert('Aucune image à exporter.');
      return;
    }
    const link = document.createElement('a');
    link.href = image;
    link.download = 'design.png';
    link.click();
  };
  return (
    <div className="min-h-screen bg-[#0B0F2A] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Exporter le design</h1>
      <div className="max-w-3xl mx-auto">
        <PreviewCanvas image={image || null} />
        <ExportPanel onDownloadPdf={handleDownloadPdf} onDownloadPng={handleDownloadPng} />
      </div>
    </div>
  );
}