'use client';

import { SubmitEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createProject } from '@/lib/actions';

const CreateProjectForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const rawName = nameInput.value.trim();

    if (!rawName) return;

    // Convert "Grafías del Rostro" to "grafias-del-rostro" (Cloudinary's folder format)
    const folderId = rawName
      .toLowerCase()
      // .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove accent marks "á"
      .replace(/\s+/g, '-');
    // .replace(/[^a-z0-9-]/g, '')

    if (!folderId) {
      setError('Nombre inválido.');
      return;
    }

    setLoading(true);

    try {
      await createProject(folderId);
      nameInput.value = '';
      router.refresh();
    } catch {
      setError('No se pudo crear el proyecto. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-xl flex-col gap-4 rounded border border-gray-200 bg-white px-6 py-4 shadow-sm"
    >
      <h3 className="text-sm font-bold tracking-wide uppercase">Crear nuevo proyecto</h3>
      <div className="flex gap-2">
        <input
          name="name"
          type="text"
          placeholder="Nombre del proyecto (ej: Grafías del Rostro)"
          required
          className="flex-1 rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:cursor-pointer hover:bg-gray-700 disabled:opacity-50"
        >
          {loading ? 'Creando...' : 'Crear'}
        </button>
      </div>
      <div className="text-xs text-gray-400">
        <p>El nombre se convertirá automáticamente a formato de URL.</p>
        <p>Por ejemplo, &quot;Grafías del Rostro&quot; → &quot;grafias-del-rostro&quot;</p>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
};

export default CreateProjectForm;
