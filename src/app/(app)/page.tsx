import CloudImage from '@/src/components/cloud-image';
import { CloudinaryResponse } from '@/src/types';

const HomePage = async () => {
  const request = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    }
  );

  const results = (await request.json()) as CloudinaryResponse;
  const { resources } = results;

  const images = resources.map((rsc) => ({
    id: rsc.asset_id,
    publicId: rsc.public_id,
    imgSrc: rsc.secure_url,
    width: rsc.width,
    height: rsc.height
  }));

  return (
    <main className="ml-80 flex flex-1 flex-wrap items-center gap-2 bg-gray-50 p-16">
      {images.map((img) => (
        <div
          key={img.id}
          className="h-72.5 w-120 overflow-hidden"
        >
          <CloudImage
            src={img.publicId}
            width={img.width}
            height={img.height}
            alt={img.publicId}
          />
        </div>
      ))}
    </main>
  );
};

export default HomePage;
