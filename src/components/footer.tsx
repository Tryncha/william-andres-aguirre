import Link from 'next/link';
import { KeyRound } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="ml-80 flex items-center justify-between border-t border-gray-200 bg-white px-8 py-4 shadow-sm">
      <div className="flex flex-col">
        <span className="font-medium text-gray-600">&copy; William Andrés Aguirre Cortés · 2026</span>
        <span className="text-xs text-gray-600 italic transition-all hover:font-medium">
          &quot;Hacer de la fotografía y del análisis de la imagen una herramienta para entender, explicar y proponer
          cambios políticos, sociales y humanos.&quot;
        </span>
      </div>
      <Link
        href="/admin"
        className="transition-all hover:scale-105 hover:cursor-pointer"
      >
        <KeyRound />
      </Link>
    </footer>
  );
};

export default Footer;
