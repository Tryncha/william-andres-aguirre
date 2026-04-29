import HeroSvg from '@/src/components/icons/hero';
import { getProfile } from '@/src/sanity/sanity.query';
import { ProfileType } from '@/src/types';

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="mx-auto max-w-7xl px-6 lg:px-16">
      <section className="mt-20 mb-16 flex flex-col items-start justify-between gap-x-12 lg:mt-32 xl:flex-row xl:items-center xl:justify-center">
        {profile &&
          profile.map((data) => (
            <div
              key={data._id}
              className="max-w-2xl lg:max-w-2xl"
            >
              <h1 className="mb-6 min-w-full text-3xl leading-tight font-bold tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
                {data.headline}
              </h1>
              <p className="text-base leading-relaxed text-zinc-400">{data.shortBio}</p>
              <ul className="my-10 flex items-center gap-x-6">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="mb-5 flex items-center gap-x-3 duration-300 hover:text-purple-400"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
    </main>
  );
}
