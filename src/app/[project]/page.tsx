import Masonry from '@/src/components/masonry';
import { getImagesFrom } from '@/src/lib/cloudinary';
import { getProjectData } from '@/src/lib/utils';

// Revalidate every hour — avoids hitting Cloudinary API on every request
export const revalidate = 3600;

const ProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = await params;

  const projectData = getProjectData(project);
  const images = await getImagesFrom(project);

  return (
    <main className="ml-80 flex flex-1 flex-col items-center justify-center bg-gray-50 p-12">
      {projectData && (
        <section className="mt-4 mb-12 flex flex-col text-center">
          <h2 className="text-2xl font-bold tracking-wide">{projectData.title}</h2>
          <span className="text-sm">
            {projectData.location} · {projectData.city}
          </span>
          <span className="text-sm">{projectData.date}</span>
          <p className="mt-8 mb-4 w-4xl text-justify font-medium whitespace-pre-line">{projectData.text}</p>
          <span className="text-right font-bold">{projectData.author}</span>
        </section>
      )}
      <Masonry images={images} />
    </main>
  );
};

export default ProjectPage;
