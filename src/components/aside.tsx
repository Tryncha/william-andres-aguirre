import { BiLogoInstagramAlt } from 'react-icons/bi';
import { RiTwitterXLine } from 'react-icons/ri';
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { getProjects } from '../app/lib/cloudinary';

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
      <section className="flex justify-between">
        <div className="flex gap-1">
          <BiLogoInstagramAlt
            size={28}
            fill="#1e2939"
          />
          <RiTwitterXLine
            size={28}
            fill="#1e2939"
          />
          <IoLogoFacebook
            size={28}
            fill="#1e2939"
          />
          <IoLogoLinkedin
            size={28}
            fill="#1e2939"
          />
        </div>
        <MdEmail
          size={28}
          fill="#1e2939"
        />
      </section>
    </aside>
  );
};

export default Aside;
