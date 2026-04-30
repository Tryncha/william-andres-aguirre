'use client';

import { CldImage } from 'next-cloudinary';

const CloudImage = ({
  src,
  alt,
  width,
  height
}: {
  src: string;
  alt: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
}) => {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default CloudImage;
