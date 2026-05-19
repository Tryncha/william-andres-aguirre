import { CldFoldersResponse } from '@/types';
import { cloudinary } from '@/config/cloudinary';

const MAX_RESULTS = 500;

export async function getImagesFrom(projectId: string) {
  const results = await cloudinary.api.resources_by_asset_folder(projectId, { max_results: MAX_RESULTS });
  const { resources } = results;

  return resources.map((rsc) => ({
    id: rsc.asset_id as string,
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
    name: (fld.name as string).replaceAll('-', ' ')
  }));
}
