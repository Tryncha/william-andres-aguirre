'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const UploadButton = ({ projectId }: { projectId: string }) => {
  const router = useRouter();

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{ folder: projectId }}
      onSuccess={() => router.refresh()}
    >
      {({ open }) => (
        <button
          onClick={() => open()}
          className="rounded bg-gray-800 px-5 py-2 text-sm font-semibold text-white transition-colors hover:cursor-pointer hover:bg-gray-700"
        >
          + Subir fotos
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadButton;
