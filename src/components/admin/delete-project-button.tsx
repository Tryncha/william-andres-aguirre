'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteProject } from '@/lib/actions';

const DeleteProjectButton = ({ projectId, projectName }: { projectId: string; projectName: string }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm(`¿Eliminar el proyecto "${projectName}" y TODAS sus imágenes?\nEsta acción no se puede deshacer.`)) {
      setIsDeleting(true);

      try {
        await deleteProject(projectId);
        router.refresh();
      } catch {
        alert('No se pudo eliminar el proyecto. Intenta de nuevo.');
        setIsDeleting(false);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="transition-color text-sm text-red-500 hover:cursor-pointer hover:text-red-600 hover:underline disabled:opacity-40"
    >
      {isDeleting ? 'Eliminando...' : 'Eliminar'}
    </button>
  );
};

export default DeleteProjectButton;
