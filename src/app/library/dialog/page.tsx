"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";

const message =
  "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.";

const usageExample = `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Open dialog</Button>
  </DialogTrigger>
  <DialogContent className="w-[355px] rounded-[8px] bg-white p-0 shadow-2xl">
    <DialogHeader className="px-4 pt-4 text-left">
      <DialogTitle className="text-[16px] text-[#18181B]">
        This is deleting message
      </DialogTitle>
    </DialogHeader>
    <DialogDescription className="px-4 pb-4 text-sm text-[#18181B] leading-[1.4]">
      The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
    </DialogDescription>
    <DialogFooter className="flex-row items-center justify-end gap-2 px-4 pb-4 pt-0">
      <Button variant="secondary">Cancel</Button>
      <Button>Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export default function DialogPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Text variant="h1">Dialog</Text>
        <Text variant="body" className="text-muted-foreground">
          Dialogs interrupt the user with a focused surface, surface a clear
          hierarchy, and collect acknowledgment before the flow continues.
        </Text>
      </header>

      <section className="space-y-4">
        <Text variant="h2">Basic Usage</Text>
        <Text variant="body" className="text-muted-foreground">
          Pair <code className="font-mono">DialogTrigger</code>,{" "}
          <code className="font-mono">DialogContent</code>, and the
          header/footer primitives to build a reliable, centered overlay that
          matches the Blueprint token scale.
        </Text>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open dialog</Button>
              </DialogTrigger>
              <DialogContent className="w-[355px] rounded-[8px] bg-white p-0 shadow-2xl">
                <DialogHeader className="px-4 pt-4 text-left">
                  <DialogTitle className="text-[16px] text-[#18181B]">
                    This is deleting message
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="px-4 pb-4 text-sm text-[#18181B] leading-[1.4]">
                  {message}
                </DialogDescription>
                <DialogFooter className="flex-row items-center justify-end gap-2 px-4 pb-4 pt-0">
                  <Button variant="secondary">Cancel</Button>
                  <Button>Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
            <pre className="whitespace-pre-wrap">{usageExample}</pre>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Text variant="h2">Examples & Variations</Text>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border p-6 space-y-3">
            <Text variant="h3">Destructive confirmation</Text>
            <Text variant="body" className="text-muted-foreground">
              The example mirrors the Figma spec with 16px padding, 8px vertical
              gutters, and a centered body copy that matches the text on the
              design. Keep the message concise so the alert stays readable in a
              355px surface.
            </Text>
          </article>

          <article className="rounded-2xl border border-border p-6 space-y-3">
            <Text variant="h3">Action hierarchy</Text>
            <Text variant="body" className="text-muted-foreground">
              Group actions inside{" "}
              <code className="font-mono">DialogFooter</code> and align them to
              the right with a consistent 8px gap. Secondary buttons borrow the
              outline treatment while the primary fill signals the assumed
              action.
            </Text>
          </article>

          <article className="rounded-2xl border border-border p-6 space-y-3">
            <Text variant="h3">States & accessibility</Text>
            <Text variant="body" className="text-muted-foreground">
              Radix handles focus trapping, escape handling, and overlay
              contrasts out of the box. Respect those hooks when enabling mobile
              or keyboard use—don&apos;t remove the built-in close button unless
              you reintroduce the affordance elsewhere.
            </Text>
          </article>
        </div>
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
                <td className="px-4 py-3 font-mono">open</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  boolean
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  undefined
                </td>
                <td className="px-4 py-3">
                  Controls the visibility when you need a controlled dialog.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">defaultOpen</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  boolean
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  false
                </td>
                <td className="px-4 py-3">
                  Sets the initial open state for uncontrolled usage.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onOpenChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  (open: boolean) =&gt; void
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  undefined
                </td>
                <td className="px-4 py-3">
                  Fires whenever the overlay opens or closes so you can sync
                  parent state.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">className</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  string
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">-</td>
                <td className="px-4 py-3">
                  Adds padding, width, or radius overrides to{" "}
                  <code className="font-mono">DialogContent</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="h2">Events / Callbacks</Text>
        <div className="rounded-2xl border border-border p-4 space-y-4">
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
                  (open: boolean)
                </td>
                <td className="px-4 py-3">
                  Synchronizes parent state with the Radix dialog lifecycle.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">onEscapeKeyDown</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">
                  (event: KeyboardEvent)
                </td>
                <td className="px-4 py-3">
                  Use on <code className="font-mono">DialogContent</code> to
                  clean up before the overlay closes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="h2">Slots / Children</Text>
        <div className="rounded-2xl border border-border p-4 space-y-3">
          <p className="text-sm text-muted-foreground">
            Build a dialog with the provided primitives:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Wrap your opener in{" "}
              <code className="font-mono">DialogTrigger</code>
              <span> </span>with <code className="font-mono">asChild</code> so
              it inherits button spacing.
            </li>
            <li>
              Place the title and body inside{" "}
              <code className="font-mono">DialogHeader</code> /{" "}
              <code className="font-mono">DialogDescription</code> for the
              typographic rhythm.
            </li>
            <li>
              Keep actions inside{" "}
              <code className="font-mono">DialogFooter</code> and include{" "}
              <code className="font-mono">DialogClose</code> if you need an
              explicit affordance.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
