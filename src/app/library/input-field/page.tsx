import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

const codeBlock = `import { Input } from "@/components/ui/input";

<Input placeholder="Text field" />
<Input disabled placeholder="Text field" />
<Input className="border-red-500 focus-visible:ring-red-500" aria-invalid placeholder="Text field" />
<Input defaultValue="Writing Text..." placeholder="Text field" />`;

export default function InputFieldPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Text variant="h1">Input Field (Testbed)</Text>
        <Text variant="body" className="text-muted-foreground">
          Live states: default, hover, focus, active, with text, disabled, and error.
          Hover/focus/active are visible when you interact with the fields.
        </Text>
      </header>

      <section className="space-y-6">
        <Text variant="h2">States</Text>
        <div className="grid gap-4 max-w-md">
          <div className="space-y-1">
            <Text variant="h6">Disabled</Text>
            <Input disabled placeholder="Text field" />
          </div>

          <div className="space-y-1">
            <Text variant="h6">Default (hover / focus / active by interaction)</Text>
            <Input placeholder="Text field" />
          </div>

          <div className="space-y-1">
            <Text variant="h6">Active with text</Text>
            <Input defaultValue="Writing Text..." placeholder="Text field" />
          </div>

          <div className="space-y-1">
            <Text variant="h6">Error</Text>
            <Input
              aria-invalid
              placeholder="Text field"
              className="border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500 active:border-red-600"
            />
            <p className="text-sm text-destructive">Field is required.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <Text variant="h2">Example Code</Text>
        <div className="rounded-2xl border border-border bg-muted p-4 text-sm text-muted-foreground">
          <pre className="whitespace-pre-wrap">{codeBlock}</pre>
        </div>
      </section>
    </div>
  );
}