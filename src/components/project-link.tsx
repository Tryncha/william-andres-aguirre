'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const ProjectLink = ({ id, name }: { id: string; name: string }) => {
  const { project } = useParams();

  return (
    <Link
      href={`/gallery/${id}`}
      className={`${project === id ? 'font-bold' : 'font-medium'} text-sm tracking-wide uppercase transition-all hover:cursor-pointer hover:font-bold`}
    >
      {name}
    </Link>
  );
};

export default ProjectLink;
