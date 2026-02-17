export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-text-primary">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-[20px]">dataset</span>
          </div>
          <h2 className="text-lg font-black tracking-tight text-accent-navy">NEOVEXA</h2>
        </div>
        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          <a
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            href="#process"
          >
            Process
          </a>
          <a
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            href="#cases"
          >
            Case Studies
          </a>
          <a
            className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            href="#about"
          >
            About
          </a>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md">
            Book a Call
          </button>
        </div>
        <div className="flex md:hidden">
          <button className="text-text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

