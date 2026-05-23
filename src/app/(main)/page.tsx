import { HOME_TEXT } from '@/data/texts';

const HomePage = () => {
  return (
    <main className="ml-80 flex min-h-screen flex-1 flex-col items-center gap-12 bg-gray-50 p-24">
      <p className="w-5xl text-justify font-medium whitespace-pre-line">{HOME_TEXT}</p>
      <hr className="w-full border-gray-300" />
    </main>
  );
};

export default HomePage;
