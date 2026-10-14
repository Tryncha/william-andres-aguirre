import { HOME_TEXT } from '@/data/texts';

const HomePage = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-gray-50 p-5 sm:gap-12 sm:p-8 lg:ml-80 lg:min-h-screen lg:p-24">
      <p className="w-full max-w-5xl text-justify font-medium whitespace-pre-line">{HOME_TEXT}</p>
    </main>
  );
};

export default HomePage;
