import { Text } from "@/components/ui/text";

export default function TypographyPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Text variant="h1">Text</Text>
        <Text variant="body" className="text-muted-foreground">
          The core typography component for the design system.
        </Text>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <Text variant="h2">Basic Usage</Text>
          <Text variant="body">
            Use the <code className="bg-muted px-1 py-0.5 rounded">Text</code>{" "}
            component to render typography with consistent styles.
          </Text>
          <div className="border rounded-lg p-6 bg-card">
            <Text variant="h3">This is a heading</Text>
            <Text variant="body">This is a paragraph of text.</Text>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
              {`import { Text } from "@/components/ui/text"

<Text variant="h3">This is a heading</Text>
<Text variant="body">This is a paragraph of text.</Text>`}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <Text variant="h2">Scale</Text>
          <Text variant="body">
            The following variants are available in the typography system.
          </Text>

          <div className="border rounded-lg p-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H1 - Page Title
              </span>
              <Text variant="h1">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H2 - Section Heading
              </span>
              <Text variant="h2">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H3 - Subsection Heading
              </span>
              <Text variant="h3">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H4 - Minor Heading
              </span>
              <Text variant="h4">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H5 - Body Large
              </span>
              <Text variant="h5">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Body - Regular Text
              </span>
              <Text variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H6 - Small Text
              </span>
              <Text variant="h6">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H7 - XSmall Text
              </span>
              <Text variant="h7">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                H8 - Tiny Text
              </span>
              <Text variant="h8">
                The quick brown fox jumps over the lazy dog
              </Text>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <Text variant="h2">API Reference</Text>

          <div className="border rounded-lg overflow-hidden">
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
                    &quot;h1&quot; | &quot;h2&quot; | &quot;h3&quot; |
                    &quot;h4&quot; | &quot;h5&quot; | &quot;body&quot; |
                    &quot;h6&quot; | &quot;h7&quot; | &quot;h8&quot;
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    &quot;body&quot;
                  </td>
                  <td className="px-4 py-3">
                    The visual style variant to apply.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">as</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    React.ElementType
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    auto
                  </td>
                  <td className="px-4 py-3">
                    The HTML element to render (e.g., &quot;h1&quot;,
                    &quot;span&quot;, &quot;p&quot;). Defaults based on variant.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">className</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    string
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    -
                  </td>
                  <td className="px-4 py-3">Additional classes to merge.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
