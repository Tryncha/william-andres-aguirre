import Link from 'next/link';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { IoLogoLinkedin } from 'react-icons/io';
import { IconType } from 'react-icons/lib';
import { MdEmail } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';

const SocialNetwork = ({ href, Icon }: { href: string; Icon: IconType }) => {
  return (
    <a
      href={href}
      // target="_blank"
      // rel="noopener noreferrer"
      className="text-gray-800 transition-all hover:scale-105 hover:cursor-pointer"
    >
      <Icon size={28} />
    </a>
  );
};

const SocialNetworks = () => {
  return (
    <section className="flex justify-between">
      <div className="flex gap-1">
        <SocialNetwork
          href=""
          Icon={BiLogoInstagramAlt}
        />
        <SocialNetwork
          href=""
          Icon={RiTwitterXLine}
        />
        <SocialNetwork
          href=""
          Icon={IoLogoLinkedin}
        />
      </div>
      <Link href="">
        <MdEmail size={28} />
      </Link>
    </section>
  );
};

export default SocialNetworks;
