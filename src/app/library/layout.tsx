import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { LibrarySidebar } from "@/components/library-sidebar";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="flex-1">
      <LibrarySidebar />
      <SidebarInset>
        <div className="space-y-8 p-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
