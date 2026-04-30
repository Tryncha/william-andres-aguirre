import { BiLogoInstagramAlt } from 'react-icons/bi';
import { RiTwitterXLine } from 'react-icons/ri';
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Aside = () => {
  return (
    <aside className="fixed inset-y-0 left-0 flex h-screen w-xs flex-col justify-between border-r border-gray-200 p-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold tracking-wider uppercase">William A. Aguirre</h1>
        <span className="text-sm tracking-wider uppercase">Fotógrafo</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col">
        <span className="text-gray-800 transition-all hover:cursor-pointer hover:font-medium">Migrantes</span>
        <span className="text-gray-800 transition-all hover:cursor-pointer hover:font-medium">Calle de las guapas</span>
        <span className="text-gray-800 transition-all hover:cursor-pointer hover:font-medium">Plaza en pandemia</span>
        <span className="text-gray-800 transition-all hover:cursor-pointer hover:font-medium">
          Paisaje humano del café
        </span>
        <span className="text-gray-800 transition-all hover:cursor-pointer hover:font-medium">Vivienda digna</span>
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
