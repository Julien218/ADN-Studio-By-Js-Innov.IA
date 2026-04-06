import { useRouter } from 'next/router';
import { useState } from 'react';
import PreviewCanvas from '../components/PreviewCanvas';
import ExportPanel from '../components/ExportPanel';

/**
 * The Editor page displays a simple interface for refining the generated
 * design.  It shows the current preview and offers a couple of buttons
 * to trigger exports.  In a full implementation you could add tools
 * for editing text, colours, images and layout.  This page is meant
 * as a placeholder to illustrate how such features could be integrated.
 */
export default function Editor() {
  const router = useRouter();
  const { image } = router.query;
  const [currentImage, setCurrentImage] = useState(image || null);

  const handleDownloadPdf = () => {
    // TODO: integrate jsPDF or call back end to produce a PDF
    alert('Export PDF non implémenté.');
  };
  const handleDownloadPng = () => {
    if (!currentImage) {
      alert('Aucune image à exporter.');
      return;
    }
    // Trigger download of the PNG image
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = 'design.png';
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#0B0F2A] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Éditeur</h1>
      <div className="max-w-3xl mx-auto">
          <PreviewCanvas image={currentImage} />
          <ExportPanel onDownloadPdf={handleDownloadPdf} onDownloadPng={handleDownloadPng} />
      </div>
    </div>
  );
}