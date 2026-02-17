"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentDocs } from "@/lib/component-docs";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function LibrarySidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none" className="w-64 border-r pr-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {componentDocs.map((doc) => (
                <SidebarMenuItem key={doc.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === doc.href}
                  >
                    <Link href={doc.href}>{doc.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
