"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { componentDocs } from "@/lib/component-docs";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-[calc(100vh-49px)] bg-white">
        <Sidebar
          collapsible="none"
          variant="sidebar"
          className="w-[240px] border-r border-[#e5e5e5] bg-white"
        >
          <SidebarHeader className="px-3 py-1.5">
            <p className="px-3 py-1.5 text-xs font-semibold tracking-[0.18px] text-[#737373]">
              Components
            </p>
          </SidebarHeader>
          <SidebarContent className="px-4">
            <SidebarMenu className="space-y-0">
              {componentDocs.map((component) => (
                <SidebarMenuItem key={component.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === component.href}
                    className="h-8 rounded-md px-3 py-1 text-sm font-normal tracking-[0.07px] text-[#404040] hover:bg-transparent data-[active=true]:bg-[#f5f5f5]"
                  >
                    <Link href={component.href} className="flex w-full items-center gap-2">
                      {component.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1 bg-white px-8 py-10">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
