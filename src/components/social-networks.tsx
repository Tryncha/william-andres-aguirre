import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import { MdEmail } from 'react-icons/md';
import { SOCIAL_NETWORKS } from '../data/social';

const SocialNetwork = ({ href, Icon }: { href: string; Icon: IconType }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        {SOCIAL_NETWORKS.map((net) => (
          <SocialNetwork
            key={net.id}
            href={net.url}
            Icon={net.Icon}
          />
        ))}
      </div>
      <Link
        href="contact"
        className="text-gray-800 transition-all hover:scale-105 hover:cursor-pointer"
      >
        <MdEmail size={28} />
      </Link>
    </section>
  );
};

export default SocialNetworks;
