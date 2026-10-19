import Masonry from '@/components/masonry';
import { getImagesFrom } from '@/lib/cloudinary';
import { getProjectData } from '@/lib/utils';
import { ProjectData } from '@/types';

// Revalidate every hour — avoids hitting Cloudinary API on every request
// export const revalidate = 3600;

const ProjectInfo = ({ project }: { project?: ProjectData }) => {
  if (!project) return;

  return (
    <section className="mt-4 mb-12 flex flex-col text-center">
      <h2 className="text-2xl font-bold tracking-wide uppercase">{project.title}</h2>
      <span className="text-sm">{project.location}</span>
      <hr className="mx-auto my-4 w-1/4 border-gray-500" />
      <p className="my-4 w-full max-w-4xl text-justify font-medium whitespace-pre-line">{project.text.content}</p>
      <div className="flex justify-end gap-2">
        <span className="font-bold">{project.text.author}</span>
        <span className="border-l border-gray-500 px-2 text-gray-500">{project.date}</span>
      </div>
    </section>
  );
};

const ProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = await params;

  const projectData = getProjectData(project);
  const images = await getImagesFrom(project);

  return (
    <main className="flex min-h-dvh flex-1 flex-col items-center justify-center bg-gray-50 p-5 sm:p-8 lg:ml-80 lg:p-12">
      {images.length === 0 ? (
        <section className="flex items-center justify-center text-sm text-gray-500">Álbum en desarrollo</section>
      ) : (
        <>
          <ProjectInfo project={projectData} />
          <Masonry images={images} />
        </>
      )}
    </main>
  );
};

export default ProjectPage;
