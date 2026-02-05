"use client"

import { Text } from "@/components/ui/text"

const usageExample = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

<SidebarProvider defaultOpen>
  <div className="flex h-72">
    <Sidebar>
      <SidebarHeader>
        <div className="text-sm font-semibold">Workspace</div>
        <p className="text-xs text-muted-foreground">Project navigation</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Primary</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>Overview</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Reports</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset className="flex-1 bg-background p-6">
      <p className="text-sm text-muted-foreground">
        Fill this slot with the primary content canvas for the currently
        selected view.
      </p>
    </SidebarInset>
  </div>
</SidebarProvider>`

export default function SidebarPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Text variant="h1">Sidebar</Text>
        <Text variant="body" className="text-muted-foreground">
          The <code className="font-mono">Sidebar</code> manages complex
          navigation, keeps its state across the workspace, and adapts to
          desktop, inset, and mobile surfaces without additional layout
          plumbing.
        </Text>
      </div>

      <section className="space-y-6">
        <Text variant="h2">Live Example</Text>
        <div className="rounded-2xl border border-border bg-blue-50 p-6 space-y-3">
          <Text variant="h3" className="text-blue-900">👈 You&apos;re viewing it now</Text>
          <Text variant="body" className="text-blue-800">
            The navigation sidebar on the left side of this page is a live implementation 
            of the Sidebar component. It demonstrates the component&apos;s structure, styling, 
            and interactive states in a real-world context.
          </Text>
        </div>

        <Text variant="h2" className="mt-8">Basic Usage</Text>
        <Text variant="body" className="text-muted-foreground">
          Wrap your primary layout with <code className="font-mono">SidebarProvider</code>
          to control whether the panel is expanded, collapsed, or follows a
          floating/inset presentation. Pairs the navigation column with
          <code className="font-mono">SidebarInset</code> to surface the main
          canvas.
        </Text>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
            <pre className="whitespace-pre-wrap">{usageExample}</pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Text variant="h2">Examples & Variations</Text>

        <article className="rounded-2xl border border-border p-6 space-y-3">
          <Text variant="h3">Variants</Text>
          <Text variant="body" className="text-muted-foreground">
            Switch <code className="font-mono">variant</code> between{" "}
            <code className="font-mono">sidebar</code>,{" "}
            <code className="font-mono">floating</code>, and{" "}
            <code className="font-mono">inset</code> to match the Figma canvas.
            Floating adds elevation + rounded corners, inset borrows spacing
            from the layout grid, and the plain sidebar keeps a border flush
            with the viewport edge.
          </Text>
          <div className="rounded-xl bg-muted p-4 text-xs font-mono text-muted-foreground">
            <code>
              &lt;Sidebar variant=&quot;floating&quot; collapsible=&quot;icon&quot;&gt;…&lt;/Sidebar&gt;
            </code>
          </div>
        </article>

        <article className="rounded-2xl border border-border p-6 space-y-3">
          <Text variant="h3">Collapsible behavior</Text>
          <Text variant="body" className="text-muted-foreground">
            The <code className="font-mono">collapsible</code> prop toggles
            between <code className="font-mono">offcanvas</code>,{" "}
            <code className="font-mono">icon</code>, or{" "}
            <code className="font-mono">none</code>. Offcanvas completely hides
            the panel and is ideal for very narrow layouts; icon leaves only the
            rail visible while still supporting tooltips and badges.
          </Text>
          <div className="rounded-xl bg-muted p-4 text-xs font-mono text-muted-foreground">
            <code>
              &lt;Sidebar collapsible=&quot;icon&quot; variant=&quot;sidebar&quot;&gt;…&lt;/Sidebar&gt;
            </code>
          </div>
        </article>

        <article className="rounded-2xl border border-border p-6 space-y-3">
          <Text variant="h3">States</Text>
          <Text variant="body" className="text-muted-foreground">
            Keyboard shortcuts keep the sidebar stateful. Desktop users can
            toggle between expanded and collapsed, mobile slides in via{" "}
            <code className="font-mono">Sheet</code>, and the context persists
            thanks to <code className="font-mono">SidebarProvider</code>.
          </Text>
          <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
            <li>Expanded shows labels, tooltips, and secondary actions.</li>
            <li>
              Collapsed hides text and relies on tooltips set via{" "}
              <code className="font-mono">SidebarMenuButton</code>.
            </li>
            <li>
              Offcanvas lunches the panel entirely; mobile uses{" "}
              <code className="font-mono">openMobile</code>.
            </li>
          </ul>
        </article>
      </section>

      <section className="space-y-4">
        <Text variant="h2">API Reference</Text>

        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted border-b">
              <tr>
                <th className="px-4 py-3 font-medium">Prop</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Default</th>
                <th className="px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-mono">variant</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;sidebar&quot; | &quot;floating&quot; | &quot;inset&quot;
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;sidebar&quot;
                </td>
                <td className="px-4 py-3">
                  Controls shape, elevation, and whether the panel sits against
                  the viewport edge.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">collapsible</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;offcanvas&quot; | &quot;icon&quot; | &quot;none&quot;
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;offcanvas&quot;
                </td>
                <td className="px-4 py-3">
                  Determines how the sidebar hides when toggled—totally hidden,
                  thumb rail only, or always visible.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">side</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;left&quot; | &quot;right&quot;
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;left&quot;
                </td>
                <td className="px-4 py-3">
                  Mirrors the sidebar (floating/inset) on either edge of the
                  viewport.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">open</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  boolean
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  true
                </td>
                <td className="px-4 py-3">
                  Controlled state for the desktop sidebar—fallbacks to{" "}
                  <code className="font-mono">defaultOpen</code>.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onOpenChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  {"(open: boolean) => void"}
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">-</td>
                <td className="px-4 py-3">
                  Fires when the desktop collapse state toggles so you can
                  synchronize other layout bits (toolbar, canvas, etc.).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="h2">Events / Callbacks</Text>
        <div className="rounded-2xl border border-border space-y-4 p-4">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted border-b">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Parameters</th>
                <th className="px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-mono">onOpenChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  open: boolean
                </td>
                <td className="px-4 py-3">
                  Hook into the expanded/collapsed state the moment the user
                  clicks the rail or uses the <code className="font-mono">⌘+B</code>{" "}
                  shortcut.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onClick</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  MouseEvent
                </td>
                <td className="px-4 py-3">
                  Passed through to navigation buttons like{" "}
                  <code className="font-mono">SidebarMenuButton</code> for custom
                  tracking or analytics.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="h2">Slots / Children</Text>
        <div className="rounded-2xl border border-border px-6 py-4 space-y-3">
          <Text variant="body" className="text-muted-foreground">
            The sidebar is an opinionated layout system. Use these primitives
            inside the container:
          </Text>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <code className="font-mono">SidebarHeader</code> – houses the
              product or project title plus descriptive text.
            </li>
            <li>
              <code className="font-mono">SidebarGroup</code> &amp;{" "}
              <code className="font-mono">SidebarGroupLabel</code> for breaking
              navigation into logical sections.
            </li>
            <li>
              <code className="font-mono">SidebarMenu</code> with{" "}
              <code className="font-mono">SidebarMenuButton</code> /
              <code className="font-mono">SidebarMenuItem</code> for individual
              targets, optionally adding badges or states for emphasis.
            </li>
            <li>
              <code className="font-mono">SidebarFooter</code> – reserve for
              keyboard shortcut cues, secondary controls, or legal copy.
            </li>
            <li>
              <code className="font-mono">SidebarInset</code> renders the
              canvas associated with the selected navigation item.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
