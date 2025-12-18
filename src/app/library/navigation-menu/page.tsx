import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Navigation Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A collection of links for navigating websites.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Usage</h2>
        <p>
          The Navigation Menu component provides a responsive navigation
          structure.
        </p>
        <div className="rounded-lg border p-8 flex justify-center bg-background">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          Link 1
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          Link 2
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="relative">
          <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
            <code>{`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
          </pre>
        </div>
      </section>

      <div className="my-8 h-px bg-border" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">NavigationMenu</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 font-semibold">Prop</th>
                  <th className="py-2 px-4 font-semibold">Type</th>
                  <th className="py-2 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">defaultValue</td>
                  <td className="py-2 px-4 font-mono">string</td>
                  <td className="py-2 px-4">
                    The value of the menu item that should be active when
                    initially rendered.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">value</td>
                  <td className="py-2 px-4 font-mono">string</td>
                  <td className="py-2 px-4">
                    The controlled value of the menu item to activate.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">onValueChange</td>
                  <td className="py-2 px-4 font-mono">function</td>
                  <td className="py-2 px-4">
                    Event handler called when the value changes.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">delayDuration</td>
                  <td className="py-2 px-4 font-mono">number</td>
                  <td className="py-2 px-4">
                    The duration from when the mouse enters a trigger until the
                    content opens. Default: 200
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">skipDelayDuration</td>
                  <td className="py-2 px-4 font-mono">number</td>
                  <td className="py-2 px-4">
                    How much time a user has to enter another trigger without
                    incurring a delay again. Default: 300
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">NavigationMenuTrigger</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 font-semibold">Prop</th>
                  <th className="py-2 px-4 font-semibold">Type</th>
                  <th className="py-2 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-mono">disabled</td>
                  <td className="py-2 px-4 font-mono">boolean</td>
                  <td className="py-2 px-4">
                    When true, prevents the user from interacting with the item.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
