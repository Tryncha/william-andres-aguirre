import type { Metadata } from 'next';
import { inter } from '../lib/fonts';
import Aside from '@/src/components/aside';
import Footer from '@/src/components/footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'William Andres Aguirre'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <Analytics />
      <SpeedInsights />
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
