import Link from 'next/link';
import { signOut } from '@/auth';

const AdminHeader = () => {
  return (
    <header className="absolute top-0 flex h-20 w-full justify-between border-b border-gray-200 bg-white px-8 py-4 shadow-sm">
      <div className="flex flex-col">
        <Link
          href="/"
          className="text-xs hover:cursor-pointer hover:underline"
        >
          ← Volver a la galería
        </Link>
        <h1 className="text-xl font-bold tracking-wider uppercase">Panel de administración</h1>
      </div>
      <button
        onClick={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
        className="text-sm font-medium text-gray-700 transition-all hover:cursor-pointer hover:text-black hover:underline"
      >
        Cerrar sesión
      </button>
    </header>
  );
};

export default AdminHeader;
