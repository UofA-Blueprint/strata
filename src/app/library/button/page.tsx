import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const usageExample = `import { Button } from "@/components/ui/button"

<Button>Primary action</Button>
<Button variant="secondary">Secondary action</Button>
<Button variant="destructive">Destructive action</Button>`;

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Text variant="h1">Button</Text>
        <Text variant="body" className="text-muted-foreground">
          Buttons trigger user-initiated actions. The component is intentionally
          simple—it controls padding, radius, and colors so every action feels
          consistent across the blueprint ecosystem.
        </Text>
      </div>

      <section className="space-y-4">
        <Text variant="h2">Basic Usage</Text>
        <Text variant="body" className="text-muted-foreground">
          Render the <code className="font-mono">Button</code> component with
          the desired variant to keep spacing, states, and accessibility
          consistent.
        </Text>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>

          <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
            <pre className="whitespace-pre-wrap">{usageExample}</pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Text variant="h2">Examples & Variations</Text>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border p-6 space-y-4">
            <Text variant="h3">Primary (default)</Text>
            <div className="flex items-center gap-3">
              <Button>Button</Button>
              <Text variant="body" className="text-muted-foreground">
                Fill #18181B · Text #FFFFFF · Radius 6px · Padding 12px × 16px
              </Text>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              <li>Hover fill: #27272A; active fill: #3F3E46</li>
              <li>
                Disabled fill: #F4F4F5; disabled text: #A1A1AA; opacity: 60%
              </li>
              <li>
                Cursor becomes pointer in interactive states, none when
                disabled.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border p-6 space-y-4">
            <Text variant="h3">Secondary</Text>
            <div className="flex items-center gap-3">
              <Button variant="secondary">Button</Button>
              <Text variant="body" className="text-muted-foreground">
                Fill #FFFFFF · Text #18181B · Border #E2E2E2 · Radius 6px
              </Text>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              <li>Hover fill: #F4F4F5; active fill: #E5E5E5</li>
              <li>Same padding and radius as primary to maintain rhythm.</li>
              <li>
                Focus still shows the 2px #A1A1AA outline for accessibility.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border p-6 space-y-4">
            <Text variant="h3">States</Text>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Error</Button>
              <Button disabled>Disabled</Button>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              <li>
                The default primary button is always pointer-ready; focus adds a
                2px outline.
              </li>
              <li>
                Hover applies the darker fills shown above; active adds a
                compressed feel.
              </li>
              <li>
                Disabled buttons drop to 60% opacity and remove pointer events.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border p-6 space-y-4">
            <Text variant="h3">Error / Destructive</Text>
            <div className="flex items-center gap-3">
              <Button variant="destructive">Button</Button>
              <Text variant="body" className="text-muted-foreground">
                Fill: #EF4444 · Hover: #DC2626 · Text: #FFFFFF
              </Text>
            </div>
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              <li>
                Hover surfaces a deeper red (#DC2626) for visual feedback.
              </li>
              <li>Active state uses #B91C1C for the pressed effect.</li>
              <li>
                Disabled state keeps the same fill but drops opacity to 60%.
              </li>
            </ul>
          </article>
        </div>
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
                  &quot;primary&quot; | &quot;secondary&quot; |
                  &quot;destructive&quot;
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;primary&quot;
                </td>
                <td className="px-4 py-3">
                  Controls the fill, text, border, hover, active, and disabled
                  colors.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">size</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  &quot;default&quot;
                </td>
                <td className="px-4 py-3">
                  Adjust the padding + typography scale for compact or spacious
                  layouts.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">disabled</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  boolean
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  false
                </td>
                <td className="px-4 py-3">
                  Removes pointer events and applies the disabled color set.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">className</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  string
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">-</td>
                <td className="px-4 py-3">
                  Adds utility classes on top of the defaults.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onClick</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  MouseEvent
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">-</td>
                <td className="px-4 py-3">
                  Use to handle user interaction; respects disabled state.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-border p-4 space-y-2">
          <Text variant="h3">Events / Callbacks</Text>
          <p className="text-sm text-muted-foreground">
            Inherits all standard button callbacks from{" "}
            <code className="font-mono">button</code>, such as{" "}
            <code className="font-mono">onClick</code>,{" "}
            <code className="font-mono">onFocus</code>, and{" "}
            <code className="font-mono">onBlur</code>.
          </p>

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
                <td className="px-4 py-3 font-mono">onClick</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  event
                </td>
                <td className="px-4 py-3">
                  Fires when the user activates the button and the component is
                  not disabled.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onFocus</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  event
                </td>
                <td className="px-4 py-3">
                  Useful for keyboard-focused interactions (callout, tooltip).
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onBlur</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  event
                </td>
                <td className="px-4 py-3">
                  Tracks when focus leaves the button (e.g., to hide accessory
                  UI).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-border p-4">
          <Text variant="h3">Slots / Children</Text>
          <p className="text-sm text-muted-foreground">
            Render any valid React node as button content—icons, text, or both.
            The component simply wraps the provided children inside the button
            element.
          </p>
        </div>
      </section>
    </div>
  );
}
