export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-accent-navy py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary">dataset</span>
          <span className="text-lg font-bold">NEOVEXA</span>
        </div>
        <div className="text-sm text-gray-400">
          © 2024 NEOVEXA. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a className="text-gray-400 transition-colors hover:text-white" href="#">
            Privacy
          </a>
          <a className="text-gray-400 transition-colors hover:text-white" href="#">
            Terms
          </a>
          <a className="text-gray-400 transition-colors hover:text-white" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

