'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { ProjectImage } from '../types';

const Masonry = ({ images }: { images: ProjectImage[] }) => {
  return (
    <section className="columns-3 gap-2">
      {images.map((img) => (
        <Link
          key={img.id}
          href={img.url}
          target="_blank"
          className="mb-2 block w-full border border-gray-200 shadow-sm transition-all hover:scale-101 hover:cursor-pointer"
        >
          <CldImage
            src={img.publicId}
            width={img.width}
            height={img.height}
            alt={img.publicId}
          />
        </Link>
      ))}
    </section>
  );
};

export default Masonry;
