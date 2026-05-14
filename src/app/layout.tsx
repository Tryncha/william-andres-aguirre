import type { Metadata } from 'next';
import { inter } from '../lib/fonts';
import Aside from '@/src/components/aside';
import Footer from '@/src/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'William Andres Aguirre'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
