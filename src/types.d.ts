import { PortableTextBlock } from 'sanity';
import { CloudinaryResource } from '@cloudinary-util/types';

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export interface CloudinaryResponse {
  next_cursor: string;
  resources: CloudinaryResource[];
}
