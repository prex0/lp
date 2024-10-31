import { Link } from "react-router-dom";

interface DocsSidebarItem {
  title: string;
  to?: string;
}

export function LeftSidebar() {
  return (
    <div className="w-64 flex-shrink-0 hidden md:block">
      <nav className="sticky top-16 pt-16">
        <div className="space-y-1">
          <MenuItem title="Introduction" to="/docs" />
          <MenuItem title="Getting Started" to="/docs/getting-started" />
          <SubMenuItem title="Next.js" to="/docs/getting-started/nextjs" />
          <SubMenuItem
            title="Manual Installation"
            to="/docs/getting-started/manual"
          />
        </div>
      </nav>
    </div>
  );
}

function MenuItem({ title, to }: DocsSidebarItem) {
  if (!to) {
    return (
      <div className="block px-3 py-2 text-sm text-gray-200 rounded-md">
        {title}
      </div>
    );
  }
  return (
    <Link
      key={to}
      to={to}
      className="block px-3 py-2 text-sm text-gray-200 hover:bg-gray-800 rounded-md"
    >
      {title}
    </Link>
  );
}

function SubMenuItem({ title, to }: { title: string; to: string }) {
  return (
    <Link
      key={to}
      to={to}
      className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-800 rounded-md"
    >
      {title}
    </Link>
  );
}
