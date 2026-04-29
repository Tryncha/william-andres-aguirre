export default function Footer() {
  return (
    <footer className="mt-44 border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-6 py-16 text-zinc-400 md:px-16 lg:flex-row lg:justify-between">
        <small className="font-mono duration-200">All rights reserved &copy; {new Date().getFullYear()}</small>

        <small className="duration-200 hover:text-white">
          <a
            href="https://github.com/Evavic44/sanity-nextjs-site"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prepared by <span className="text-green-400">Victor Eke</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
