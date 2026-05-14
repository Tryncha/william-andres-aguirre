import { v2 as cloudinary } from 'cloudinary';
import { CldFoldersResponse } from '@/src/types';
import { formatProjectName } from './utils';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const MAX_RESULTS = 500;

export async function getImagesFrom({ project }: { project: string }) {
  const results = await cloudinary.api.resources_by_asset_folder(project, { max_results: MAX_RESULTS });
  const { resources } = results;

  return resources.map((rsc) => ({
    id: rsc.asset_id,
    publicId: rsc.public_id,
    url: rsc.secure_url,
    width: rsc.width,
    height: rsc.height
  }));
}

export async function getProjects() {
  const results: CldFoldersResponse = await cloudinary.api.root_folders();
  const { folders } = results;

  return folders.map((fld) => ({
    id: fld.path as string,
    name: formatProjectName(fld.name as string)
  }));
}
