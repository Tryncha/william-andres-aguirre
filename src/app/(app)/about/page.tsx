import { getProfile } from '@/src/sanity/sanity.query';
import { ProfileType } from '@/src/types';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { BiEnvelope, BiFile } from 'react-icons/bi';

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
              <div className="order-2 lg:order-none">
                <h1 className="mb-8 basis-1/2 text-4xl font-bold lg:text-5xl lg:leading-tight">
                  I&apos;m {data.fullName}. I live in {data.location}, where I design the future.
                </h1>

                <div className="flex flex-col gap-y-3 leading-relaxed text-zinc-400">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="order-none mb-12 flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
                <div>
                  <Image
                    className="mb-4 max-h-96 min-h-96 rounded-2xl bg-[#1d1d20] bg-top object-cover"
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex cursor-cell items-center justify-center gap-x-2 rounded-md border border-transparent bg-[#1d1d20] py-2 text-center font-medium duration-200 hover:border-zinc-700"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>
                </div>

                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-x-2 duration-300 hover:text-purple-400"
                    >
                      <BiEnvelope className="text-lg" />
                      {data.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="mb-4 text-4xl font-semibold">Expertise</h2>
              <p className="max-w-lg text-zinc-400">
                I&apos;ve spent few years working on my skills. In no particular order, here are a few of them.
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-3">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="rounded-md border border-transparent bg-[#1d1d20] px-2 py-1 hover:border-zinc-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}
