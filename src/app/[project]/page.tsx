import Link from 'next/link';
import CloudImage from '@/src/components/cloud-image';
import { getImagesFrom } from '../../lib/cloudinary';

const ProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = await params;
  const images = await getImagesFrom({ project });

  return (
    <main className="ml-80 flex flex-1 items-center justify-center gap-2 bg-gray-50 p-12">
      <section className="3xl:w-364 flex flex-wrap gap-2 2xl:w-242">
        {images.map((img) => (
          <Link
            key={img.id}
            href={img.url}
            target="_blank"
            className="flex h-70 w-120 items-center justify-center overflow-hidden transition-all hover:scale-101 hover:cursor-pointer"
          >
            <CloudImage
              src={img.publicId}
              width={img.width}
              height={img.height}
              alt={img.publicId}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default ProjectPage;
