import { EMAILS } from '@/data/social';

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center gap-2 bg-gray-50 p-5 sm:p-8 lg:ml-80 lg:p-12">
      <section className="flex max-w-full flex-col items-center text-center">
        <h2 className="mb-4 text-lg font-bold sm:text-xl">Contactar por correo electrónico</h2>
        {EMAILS.map((email) => (
          <a
            key={email}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline transition-colors hover:text-blue-600"
          >
            {email}
          </a>
        ))}
      </section>
    </main>
  );
};

export default ContactPage;
