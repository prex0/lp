import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";

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
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SubMenuItem title="Address" to="/docs/components/address" />
            <SubMenuItem title="Token Balance" to="/docs/components/balance" />
            <SubMenuItem title="Pay" to="/docs/components/pay" />
            <SubMenuItem title="Transfer" to="/docs/components/transfer" />
            <SubMenuItem
              title="Link Transfer"
              to="/docs/components/link-transfer"
            />
            <SubMenuItem title="Claim" to="/docs/components/claim" />
            <SubMenuItem title="Swap" to="/docs/components/swap" />
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
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
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
