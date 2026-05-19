'use server';

import { revalidatePath } from 'next/cache';
import { cloudinary } from '@/config/cloudinary';

export async function deleteImage(publicId: string, projectId: string) {
  await cloudinary.uploader.destroy(publicId);

  revalidatePath(`/${projectId}`);
  revalidatePath(`/admin/${projectId}`);
}

export async function createProject(projectName: string) {
  await cloudinary.api.create_folder(projectName);

  revalidatePath('/');
  revalidatePath('/admin');
}

export async function deleteProject(projectName: string) {
  const resources = await cloudinary.api.resources_by_asset_folder(projectName, {
    max_results: 500
  });

  // 1. Delete resources
  if (resources.resources.length > 0) {
    const publicIds = resources.resources.map((r: { public_id: string }) => r.public_id);
    await cloudinary.api.delete_resources(publicIds);
  }

  // 2. Delete folder
  await cloudinary.api.delete_folder(projectName);

  revalidatePath('/');
  revalidatePath('/admin');
}
