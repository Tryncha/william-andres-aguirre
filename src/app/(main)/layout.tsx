import Aside from '@/components/aside';
import Footer from '@/components/footer';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Aside />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
