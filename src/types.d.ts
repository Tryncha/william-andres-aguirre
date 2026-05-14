import { CloudinaryResource } from '@cloudinary-util/types';

export interface CldFoldersResponse {
  folders: CloudinaryResource[];
  is_shared: boolean;
  next_cursor: string | null;
  total_count: number;
}

export interface ProjectImage {
  id: string;
  publicId: string;
  url: string;
  width: number;
  height: number;
}
