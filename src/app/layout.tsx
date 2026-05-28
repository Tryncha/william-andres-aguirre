import type { Metadata } from 'next';
import { inter } from '../lib/fonts';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Andrés Aguirre C.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <Analytics />
      <SpeedInsights />
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>{children}</body>
    </html>
  );
};

export default RootLayout;
