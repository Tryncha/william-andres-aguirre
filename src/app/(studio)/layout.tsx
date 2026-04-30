import '../globals.css';

const StudioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};

export default StudioLayout;
