import Link from 'next/link';
import { getProjectsMainInfo } from '../lib/cloudinary';
import EmailInfo from './email-info';
import { SOCIAL_NETWORKS } from '@/data/social';
import ProjectLink from './project-link';

const Aside = async () => {
  const projects = await getProjectsMainInfo();

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
      {/* <section className="flex flex-col gap-4"> */}
      <nav className="flex flex-col items-center gap-x-4 gap-y-2 border-y border-gray-200 py-4 lg:items-start lg:gap-2 lg:border-0">
        {projects.map((prj) => (
          <ProjectLink
            key={prj.id}
            id={prj.id}
            name={prj.name}
          />
        ))}
      </nav>
      {/* <Link
          href="/about"
          className="text-center text-sm tracking-wide uppercase transition-all hover:cursor-pointer hover:font-bold xl:text-left"
        >
          Sobre mí
        </Link> */}
      {/* </section> */}

      {/* Social */}
      <section className="flex items-center justify-between">
        <div className="flex gap-1">
          {SOCIAL_NETWORKS.map((net) => (
            <a
              key={net.id}
              href={net.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 transition-all hover:scale-105 hover:cursor-pointer"
            >
              <net.Icon size={28} />
            </a>
          ))}
        </div>
        <EmailInfo />
      </section>
    </aside>
  );
};

export default Aside;
