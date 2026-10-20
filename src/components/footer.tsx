import Link from 'next/link';
import { KeyRound } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 border-t border-gray-200 bg-white px-4 py-2 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:ml-80">
      <div className="flex flex-col">
        <span className="font-medium text-gray-600">&copy; William Andrés Aguirre Cortés · 2026</span>
        {/* <span className="text-xs text-gray-600 italic transition-all hover:font-medium">
          &quot;Hacer de la fotografía y del análisis de la imagen una herramienta para entender, explicar y proponer
          cambios políticos, sociales y humanos.&quot;
        </span> */}
      </div>
      {/* <Link
        href="/admin"
        className="hidden transition-all hover:scale-105 hover:cursor-pointer lg:block"
      >
        <KeyRound />
      </Link> */}
    </footer>
  );
};

export default Footer;
