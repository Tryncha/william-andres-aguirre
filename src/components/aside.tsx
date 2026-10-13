import Link from 'next/link';
import { getProjects } from '../lib/cloudinary';
import SocialNetworks from './social-networks';

const Aside = async () => {
  const projects = await getProjects();

  return (
    <aside className="flex w-full flex-col gap-5 border-b border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:fixed lg:inset-y-0 lg:left-0 lg:h-screen lg:w-xs lg:justify-between lg:border-r lg:border-b-0">
      <div className="flex flex-col items-center lg:items-start">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-black uppercase transition-all hover:cursor-pointer hover:font-extrabold"
        >
          Andrés Aguirre C.
        </Link>
        <span className="text-sm font-medium tracking-widest uppercase">Realismo Social</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-wrap items-center gap-x-4 gap-y-2 border-y border-gray-200 py-4 lg:items-start lg:gap-2 lg:border-0">
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
