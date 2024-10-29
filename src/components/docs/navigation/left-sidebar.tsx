import { Link } from "react-router-dom"

interface DocsSidebarItem {
  title: string
  href: string
}

const mainNavItems: DocsSidebarItem[] = [
  {
    title: "Introduction",
    href: "/docs",
  },
  {
    title: "Getting Started",
    href: "/docs/getting-started",
  },
  {
    title: "Features",
    href: "/docs/features",
  },
]

export function LeftSidebar() {
  return (
    <div className="w-64 flex-shrink-0 hidden md:block">
      <nav className="sticky top-16 pt-16">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
