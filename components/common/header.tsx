import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black/30 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-light tracking-wide font-inter">
            PREX
          </a>
          <span className="text-sm bg-white/10 px-2 py-1 rounded-md">∞.1</span>
          <span className="text-sm">
            <Link href="https://docs.prex0.com">Doc</Link>
          </span>
        </div>
        <a
          href="https://dashboard.prex0.com"
          className="bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-gray-700 font-satoshi px-4 py-2 h-10 rounded-md text-base flex items-center justify-center"
        >
          Dashboard
        </a>
      </div>
    </header>
  );
}
