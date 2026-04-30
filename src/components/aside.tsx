import Link from 'next/link';
import { getProjects } from '../lib/cloudinary';
import SocialNetworks from './social-networks';

const Aside = async () => {
  const projects = await getProjects();

  return (
    <aside className="fixed inset-y-0 left-0 flex h-screen w-xs flex-col justify-between border-r border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider uppercase hover:cursor-pointer"
        >
          William A. Aguirre
        </Link>
        <span className="text-sm tracking-widest text-gray-800 uppercase">Realismo Social</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col">
        {projects.map((prj) => (
          <Link
            key={prj.id}
            href={prj.id}
            className="text-gray-800 transition-all hover:cursor-pointer hover:font-medium"
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
