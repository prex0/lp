import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { usePathname } from "next/navigation";

export function LeftSidebar() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>
          <Link href="/docs">Introduction</Link>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu></SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>
          <Link href="/docs/start">Getting Started</Link>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SubMenuItem title="Next.js" to="/docs/start/nextjs" />
            <SubMenuItem title="Manual Installation" to="/docs/start/manual" />
            <SubMenuItem
              title="Use your token"
              to="/docs/start/use-your-token"
            />
            <SubMenuItem title="Localization" to="/docs/start/localization" />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SubMenuItem title="Wallet" to="/docs/components/wallet" />
            <SubMenuItem title="Identity" to="/docs/components/identity" />
            <SubMenuItem title="Token Balance" to="/docs/components/balance" />
            <SubMenuItem title="Pay" to="/docs/components/pay" />
            <SubMenuItem title="Transfer" to="/docs/components/transfer" />
            <SubMenuItem
              title="Link Transfer"
              to="/docs/components/link-transfer"
            />
            <SubMenuItem title="Swap" to="/docs/components/swap" />
            <SubMenuItem title="Distribute" to="/docs/components/distribute" />
            <SubMenuItem title="History" to="/docs/components/history" />
            <SubMenuItem
              title="Shared Wallet"
              to="/docs/components/shared-wallet"
            />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Cards</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SubMenuItem title="Transfer" to="/docs/cards/transfer" />
            <SubMenuItem title="Rich Transfer" to="/docs/cards/rich" />
            <SubMenuItem title="Swap" to="/docs/cards/swap" />
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}

function SubMenuItem({ title, to }: { title: string; to: string }) {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link
          key={to}
          href={to}
          className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-800 rounded-md"
        >
          {title}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
