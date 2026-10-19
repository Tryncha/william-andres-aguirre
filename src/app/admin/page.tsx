import Link from 'next/link';
import { getProjectsMainInfo } from '@/lib/cloudinary';
import CreateProjectForm from '@/components/admin/create-project-form';
import DeleteProjectButton from '@/components/admin/delete-project-button';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import AdminHeader from '@/components/admin/header';

const ProjectInfo = ({ projectId, projectName }: { projectId: string; projectName: string }) => {
  return (
    <div className="flex items-center justify-between rounded border border-gray-200 bg-white px-6 py-4 shadow-sm">
      <Link
        href={`/admin/${projectId}`}
        className="font-bold tracking-wide uppercase hover:underline"
      >
        {projectName}
      </Link>
      <DeleteProjectButton
        projectId={projectId}
        projectName={projectName}
      />
    </div>
  );
};

const AdminPage = async () => {
  const projects = await getProjectsMainInfo();
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <>
      <AdminHeader />
      <main className="mt-20 flex h-screen flex-col items-center gap-4 bg-gray-50 p-8">
        <h2 className="text-2xl font-bold tracking-wide uppercase">Proyectos</h2>

        {/* Projects list */}
        {projects.length ? (
          <section className="mb-10 flex w-xl flex-col gap-3">
            {projects.map((prj) => (
              <ProjectInfo
                key={prj.id}
                projectId={prj.id}
                projectName={prj.name}
              />
            ))}
          </section>
        ) : (
          <p className="text-sm text-gray-500">No hay proyectos.</p>
        )}

        <CreateProjectForm />
      </main>
    </>
  );
};

export default AdminPage;
