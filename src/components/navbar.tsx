import Image from 'next/image';
import Link from 'next/link';
import Logo from './icons/logo.png';

export default function Navbar() {
  return (
    <header className="z-30 mb-20 border-b border-zinc-800 px-6 py-6 md:mb-28 md:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            width={25}
            height={25}
            alt="logo"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="duration-300 hover:text-purple-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="duration-300 hover:text-purple-400"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
