import { useLocation } from "react-router-dom";

interface DocsSidebarItem {
  title: string;
  href: string;
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
];

const manualNavItems: DocsSidebarItem[] = [
  {
    title: "Installation",
    href: "#installation",
  },
  {
    title: "Set up shadcn",
    href: "#setup-shadcn",
  },
  {
    title: "Install Prex",
    href: "#prex-install",
  },
  {
    title: "Add Providers",
    href: "#add-providers",
  },
  {
    title: "Update layout",
    href: "#update-layout",
  },
];

export function RightSidebar() {
  const { pathname } = useLocation();

  const page = pathname.split("/").pop();

  console.log(page);

  const getNavItems = () => {
    switch (page) {
      case "introduction":
        return introductionNavItems;
      case "manual":
        return manualNavItems;
      default:
        return [];
    }
  };

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
  );
}
