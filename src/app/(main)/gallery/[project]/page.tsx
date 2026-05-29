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
      <span className="text-sm">{project.date}</span>
      <p className="mt-8 mb-4 w-4xl text-justify font-medium whitespace-pre-line">{project.text.content}</p>
      <span className="text-right font-bold">{project.text.author}</span>
    </section>
  );
};

const ProjectPage = async ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = await params;

  const projectData = getProjectData(project);
  const images = await getImagesFrom(project);

  return (
    <main className="ml-80 flex flex-1 flex-col items-center justify-center bg-gray-50 p-12">
      <ProjectInfo project={projectData} />
      <Masonry images={images} />
    </main>
  );
};

export default ProjectPage;
