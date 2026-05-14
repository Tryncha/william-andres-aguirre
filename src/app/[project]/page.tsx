import { getImagesFrom } from '../../lib/cloudinary';
import Masonry from '@/src/components/masonry';

const ProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = await params;
  const images = await getImagesFrom({ project });

  return (
    <main className="ml-80 flex flex-1 items-center justify-center gap-2 bg-gray-50 p-12">
      <Masonry images={images} />
    </main>
  );
};

export default ProjectPage;
