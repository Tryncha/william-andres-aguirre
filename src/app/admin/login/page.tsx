'use client';

import { signIn } from 'next-auth/react';
import { SubmitEvent, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false
    });

    if (result?.error) {
      setError('Usuario o contraseña incorrectos');
      setLoading(false);
      setTimeout(() => setError(''), 5000);
    } else {
      redirect('/admin');
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <section className="flex w-sm flex-col gap-2">
        <Link
          href="/"
          className="px-2 text-xs hover:cursor-pointer hover:underline"
        >
          ← Volver a la galería
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:cursor-pointer hover:bg-gray-700 disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          {error && <p className="text-center text-sm text-red-600">{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
