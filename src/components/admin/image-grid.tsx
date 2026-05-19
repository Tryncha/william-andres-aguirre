'use client';

import { CldImage } from 'next-cloudinary';
import { ProjectImage } from '@/types';
import { deleteImage } from '@/lib/actions';
import { useState } from 'react';

const ImageCard = ({ image, projectId }: { image: ProjectImage; projectId: string }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm('¿Eliminar esta imagen? Esta acción no se puede deshacer.');
    if (!confirmed) return;

    setDeleting(true);
    await deleteImage(image.publicId, projectId);
  };

  return (
    <div className={`relative border border-gray-200 shadow-sm transition-opacity ${deleting ? 'opacity-40' : ''}`}>
      <CldImage
        src={image.publicId}
        width={image.width}
        height={image.height}
        alt={image.publicId}
        className="block w-full"
      />
      <button
        onClick={handleDelete}
        disabled={deleting}
        title="Eliminar imagen"
        className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-md bg-red-600 text-xs font-bold text-white shadow transition-colors hover:cursor-pointer hover:bg-red-700 disabled:opacity-50"
      >
        ✕
      </button>
    </div>
  );
};

const ImageGrid = ({ images, projectId }: { images: ProjectImage[]; projectId: string }) => {
  if (images.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-gray-500">
        No hay imágenes en este proyecto. Usa el botón para subir fotos.
      </p>
    );
  }

  return (
    <section className="columns-3 gap-2">
      {images.map((img) => (
        <div
          key={img.id}
          className="mb-2"
        >
          <ImageCard
            image={img}
            projectId={projectId}
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
