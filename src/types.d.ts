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

export interface ProjectText {
  author: string;
  content: string;
}

export interface ProjectData {
  id: string;
  title: string;
  date: string;
  location: Location;
  text: ProjectText;
}

export interface Location {
  name: string;
  link?: string;
}
