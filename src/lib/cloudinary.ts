import { CldFoldersResponse, CldResourceResponse } from '@/src/types';
import { formatProjectName } from './utils';

const MAX_RESULTS = 20;

export async function getImagesFrom({ project }: { project: string }) {
  const cldResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/by_asset_folder?asset_folder=${project}&max_results=${MAX_RESULTS}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    }
  );

  const results: CldResourceResponse = await cldResponse.json();
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
  const cldResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    }
  );

  const results: CldFoldersResponse = await cldResponse.json();
  const { folders } = results;

  return folders.map((fld) => ({
    id: fld.path as string,
    name: formatProjectName(fld.name as string)
  }));
}
