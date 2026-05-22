/**
 * PreviewCanvas displays a preview of the generated design.  It is a simple
 * container that either shows the provided image or a placeholder when
 * no image is available.  Use this component on the result and editor
 * pages to give users an idea of what their design looks like.
 */
export default function PreviewCanvas({ image }) {
  return (
    <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} className="max-h-full max-w-full" alt="Aperçu" />
      ) : (
        <p className="text-gray-400">Aucun aperçu</p>
      )}
    </div>
  );
}