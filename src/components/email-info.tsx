'use client';

import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { EMAILS } from '@/data/social';

const EmailInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute right-0 bottom-full z-10 mb-2 w-max max-w-[calc(100vw-2rem)] rounded-xs border border-gray-300 bg-white px-4 py-2 shadow-sm">
          <span className="text-sm">Contáctame por correo electrónico</span>
          <ul>
            {EMAILS.map((e) => (
              <li key={e} className="break-all">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${e}&su=Consulta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-800 underline transition-colors hover:text-blue-600"
                >
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Cerrar opciones de correo' : 'Mostrar opciones de correo'}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center text-gray-800 transition-all hover:scale-105 hover:cursor-pointer"
      >
        <MdEmail size={28} />
      </button>
    </div>
  );
};

export default EmailInfo;
