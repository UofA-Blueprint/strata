import Link from "next/link";

import { componentDocs } from "@/lib/component-docs";
import { Text } from "@/components/ui/text";

export default function LibraryPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-3">
        <Text variant="h1">Component Library</Text>
        <Text variant="body" className="text-muted-foreground">
          Welcome to the Blueprint component library. Use the Library button in
          the header to return here at any time, then open the sidebar on the
          left to explore the primitives currently implemented in this project.
        </Text>
      </div>

      <section className="space-y-4 rounded-2xl border border-border bg-card p-6">
        <Text variant="h2">Browse components</Text>
        <Text variant="body" className="text-muted-foreground">
          Every entry below is mirrored in the sidebar. Pick one to open its
          documentation or continue bouncing between them through the sidebar
          without touching the header.
        </Text>
        <div className="grid gap-4 md:grid-cols-2">
          {componentDocs.map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className="rounded-2xl border border-border p-4 transition hover:border-sidebar-accent hover:bg-muted"
            >
              <div className="flex items-center justify-between">
                <Text variant="h3">{component.title}</Text>
                <span className="text-xs font-mono text-muted-foreground">open</span>
              </div>
              <Text variant="body" className="text-sm text-muted-foreground">
                {component.description}
              </Text>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
