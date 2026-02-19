import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-accent-navy py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2 text-white">
          <Image src="/neovexa_logo.svg" alt="Neovexa" width={150} height={30} />
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} NEOVEXA. All rights reserved.
        </div>
        {/* <div className="flex gap-6">
          <a className="text-gray-400 transition-colors hover:text-white" href="#">
            Privacy
          </a>
          <a className="text-gray-400 transition-colors hover:text-white" href="#">
            Terms
          </a>
          <a className="text-gray-400 transition-colors hover:text-white" href="#">
            LinkedIn
          </a>
        </div> */}
      </div>
    </footer>
  );
}
