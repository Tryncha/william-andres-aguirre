import Link from 'next/link';
import { getProjects } from '../lib/cloudinary';
import SocialNetworks from './social-networks';

const Aside = async () => {
  const projects = await getProjects();

  return (
    <aside className="fixed inset-y-0 left-0 flex h-screen w-xs flex-col justify-between border-r border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-black uppercase transition-all hover:cursor-pointer hover:font-extrabold"
        >
          Andrés Aguirre C.
        </Link>
        <span className="text-sm font-medium tracking-widest uppercase">Realismo Social</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {projects.map((prj) => (
          <Link
            key={prj.id}
            href={`/gallery/${prj.id}`}
            className="text-sm font-medium tracking-wide uppercase transition-all hover:cursor-pointer hover:font-bold"
          >
            {prj.name}
          </Link>
        ))}
      </nav>

      {/* Social */}
      <SocialNetworks />
    </aside>
  );
};

export default Aside;
