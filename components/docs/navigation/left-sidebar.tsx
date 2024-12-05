import Link from "next/link";
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";

export function LeftSidebar() {
  return (
    <>
      <SidebarGroupLabel>
        <Link href="/docs">Introduction</Link>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu></SidebarMenu>
      </SidebarGroupContent>
      <Collapsible defaultOpen className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarGroupLabel>
            <Link href="/docs/start">Getting Started</Link>
          </SidebarGroupLabel>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SubMenuItem title="Next.js" to="/docs/start/nextjs" />
              <SubMenuItem
                title="Manual Installation"
                to="/docs/start/manual"
              />
              <SubMenuItem
                title="Use your token"
                to="/docs/start/use-your-token"
              />
              <SubMenuItem title="Localization" to="/docs/start/localization" />
              <SubMenuItem title="MetaMask" to="/docs/start/eip1193" />
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible defaultOpen className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SubMenuItem title="Wallet" to="/docs/components/wallet" />
              <SubMenuItem title="Identity" to="/docs/components/identity" />
              <SubMenuItem
                title="Token Balance"
                to="/docs/components/balance"
              />
              <SubMenuItem title="Pay" to="/docs/components/pay" />
              <SubMenuItem title="Transfer" to="/docs/components/transfer" />
              <SubMenuItem
                title="Link Transfer"
                to="/docs/components/link-transfer"
              />
              <SubMenuItem title="Swap" to="/docs/components/swap" />
              <SubMenuItem title="Drops" to="/docs/components/distribute" />
              <SubMenuItem title="History" to="/docs/components/history" />
              <SubMenuItem
                title="Shared Wallet"
                to="/docs/components/shared-wallet"
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible defaultOpen className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarGroupLabel>Cards</SidebarGroupLabel>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SubMenuItem title="Transfer" to="/docs/cards/transfer" />
              <SubMenuItem title="Rich Transfer" to="/docs/cards/rich" />
              <SubMenuItem title="Swap" to="/docs/cards/swap" />
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <ExternalLink title="Status" to={"https://status.prex0.com"} />
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
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

function ExternalLink({ title, to }: { title: string; to: string }) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 text-sm text-gray-500 hover:bg-gray-800 rounded-md"
        >
          {title}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
