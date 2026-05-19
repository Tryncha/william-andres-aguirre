import { getImagesFrom } from '@/lib/cloudinary';
import ImageGrid from '@/components/admin/image-grid';
import UploadButton from '@/components/admin/upload-button';
import Link from 'next/link';

const AdminProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = await params;
  const images = await getImagesFrom(project);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Link
            href="/admin"
            className="text-xs hover:cursor-pointer hover:underline"
          >
            ← Volver
          </Link>
          <h2 className="text-2xl font-bold tracking-wide uppercase">{project.replaceAll('-', ' ')}</h2>
          <span className="text-sm text-gray-500">{images.length} imágenes</span>
        </div>
        <UploadButton projectId={project} />
      </div>

      <ImageGrid
        images={images}
        projectId={project}
      />
    </main>
  );
};

export default AdminProjectPage;
