import type { Metadata } from 'next';
import { inter } from '../lib/fonts';
import Aside from '@/src/components/aside';
import '../globals.css';

export const metadata: Metadata = {
  title: 'William Andres Aguirre'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white`}>
        <Aside />
        {children}
        <footer className="ml-80 flex flex-col border-t border-gray-300 px-8 py-4 shadow-sm">
          <span className="font-medium text-gray-600">&copy; William Andrés Aguirre Cortés · 2026</span>
          <span className="text-xs text-gray-600 italic transition-all hover:font-medium">
            &quot;Hacer de la fotografía y del análisis de la imagen una herramienta para entender, explicar y proponer
            cambios políticos, sociales y humanos.&quot;
          </span>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
