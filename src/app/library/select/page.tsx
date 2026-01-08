"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";

const usageExample = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const [value, setValue] = React.useState("option-one")

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Pick an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectLabel>Option group</SelectLabel>
    <SelectItem value="option-one">Option one</SelectItem>
    <SelectItem value="option-two">Option two</SelectItem>
    <SelectItem value="option-three">Option three</SelectItem>
  </SelectContent>
</Select>`;

const options = [
  { value: "option-one", label: "Option one" },
  { value: "option-two", label: "Option two" },
  { value: "option-three", label: "Option three" },
];

export default function SelectPage() {
  const [value, setValue] = React.useState(options[0].value);

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Text variant="h1">Select</Text>
        <Text variant="body" className="text-muted-foreground">
          The Select component wraps Radix UI&apos;s primitives so that every
          dropdown feels anchored, readable, and consistent. The menu opens
          directly below the trigger, highlights the hovered row with a darker
          surface, and shows a check mark beside the active option.
        </Text>
      </div>

      <section className="space-y-4">
        <Text variant="h2">Basic Usage</Text>
        <Text variant="body" className="text-muted-foreground">
          Render the structured Select, trigger, and content primitives together
          to keep spacing, focus states, and alignment in sync with the
          Blueprint design guidelines.
        </Text>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Pick an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
            <pre className="whitespace-pre-wrap">{usageExample}</pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Text variant="h2">Examples & Variations</Text>

        <article className="rounded-2xl border border-border p-6 space-y-4">
          <Text variant="h3">Dropdown placement</Text>
          <Text variant="body" className="text-muted-foreground">
            The menu is configured to open beneath the trigger (side=bottom,
            align=start) so the dropdown remains visually connected to the
            control and never overlaps the inline label.
          </Text>
        </article>

        <article className="rounded-2xl border border-border p-6 space-y-4">
          <Text variant="h3">Selection feedback</Text>
          <Text variant="body" className="text-muted-foreground">
            Every option shows a check mark when selected, which keeps focus on
            the current choice while the label stays visible in the trigger.
          </Text>
        </article>

        <article className="rounded-2xl border border-border p-6 space-y-4">
          <Text variant="h3">Hover + focus states</Text>
          <Text variant="body" className="text-muted-foreground">
            Hovering or navigating with the keyboard slightly darkens the option
            surface, providing a subtle depth cue that matches the Figma
            specification while preserving accessibility.
          </Text>
        </article>
      </section>

      <section className="space-y-4">
        <Text variant="h2">API Reference</Text>

        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted border-b">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Default</th>
                <th className="px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-mono">value</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  string
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  undefined
                </td>
                <td className="px-4 py-3">
                  Controls the selected option. Combine with{" "}
                  <code className="font-mono">onValueChange</code> for a
                  controlled dropdown.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">defaultValue</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  string
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  undefined
                </td>
                <td className="px-4 py-3">
                  Initializes the selected value on first render without
                  control.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onValueChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  (value: string) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  undefined
                </td>
                <td className="px-4 py-3">
                  Fires when the user commits a new selection via click or
                  keyboard.
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
                  Adds disabled styling at the root and prevents interactions.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">className</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  string
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">-</td>
                <td className="px-4 py-3">
                  Applies utility classes to the trigger or content for layout.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-border p-4 space-y-2">
          <Text variant="h3">Events / Callbacks</Text>
          <p className="text-sm text-muted-foreground">
            The Select component proxies Radix{" "}
            <code className="font-mono">onValueChange</code> and exposes{" "}
            <code className="font-mono">onOpenChange</code> via the underlying
            primitives.
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
                <td className="px-4 py-3 font-mono">onValueChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  (value: string) =&gt; void
                </td>
                <td className="px-4 py-3">
                  Triggered whenever the user picks a different option.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onOpenChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  (open: boolean) =&gt; void
                </td>
                <td className="px-4 py-3">
                  Exposes the dropdown&apos;s open state for composable
                  overlays.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-border p-4 space-y-2">
          <Text variant="h3">Slots / Children</Text>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Build the Select with the provided primitives. At a minimum:</p>
            <ul className="list-disc pl-4 text-sm text-muted-foreground">
              <li>
                <code className="font-mono">SelectTrigger</code> renders the
                visible control.
              </li>
              <li>
                <code className="font-mono">SelectContent</code> positions the
                dropdown.
              </li>
              <li>
                <code className="font-mono">SelectItem</code> renders each
                option with the hover indicator.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
