/**
 * ExportPanel provides buttons for exporting the generated design in
 * various formats.  This component is intentionally simple; it
 * demonstrates how you might surface export options to your users.
 *
 * In a real implementation you would wire these buttons to
 * functions that generate a PDF or PNG, or call your back end to
 * perform the export.
 */
export default function ExportPanel({ onDownloadPdf, onDownloadPng }) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onDownloadPdf}
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
      >
        Télécharger PDF
      </button>
      <button
        onClick={onDownloadPng}
        className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg"
      >
        Télécharger PNG
      </button>
    </div>
  );
}