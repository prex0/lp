interface DocsSidebarItem {
  title: string
  href: string
}

const introductionNavItems: DocsSidebarItem[] = [
  {
    title: "Overview",
    href: "#overview",
  },
  {
    title: "Key Features",
    href: "#key-features",
  },
  {
    title: "Prerequisites",
    href: "#prerequisites",
  },
]

const gettingStartedNavItems: DocsSidebarItem[] = [
  {
    title: "Installation",
    href: "#installation",
  },
  {
    title: "Create project",
    href: "#create-project",
  },
  {
    title: "Add dependencies",
    href: "#add-dependencies",
  },
  {
    title: "Configure Tailwind CSS",
    href: "#configure-tailwind",
  },
  {
    title: "Update tailwind.config.js",
    href: "#update-tailwind-config",
  },
  {
    title: "Configure app styles",
    href: "#configure-styles",
  },
]

interface RightSidebarProps {
  page: 'introduction' | 'getting-started' | 'features'
}

export function RightSidebar({ page }: RightSidebarProps) {
  const getNavItems = () => {
    switch (page) {
      case 'introduction':
        return introductionNavItems
      case 'getting-started':
        return gettingStartedNavItems
      default:
        return []
    }
  }

  return (
    <div className="w-64 flex-shrink-0 hidden lg:block">
      <nav className="sticky top-16 pt-16">
        <div className="space-y-1">
          {getNavItems().map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
