export type ComponentDoc = {
  title: string;
  href: string;
  description: string;
};

export const componentDocs: ComponentDoc[] = [
  {
    title: "Button",
    href: "/library/button",
    description:
      "Intentional spacing, radius, and color tokens for primary, secondary, and destructive actions.",
  },
  {
    title: "Dialog",
    href: "/library/dialog",
    description:
      "Centered confirmations/alerts built atop Radix Dialog with a solid header/body/footer structure.",
  },
  {
    title: "Input Field",
    href: "/library/input-field",
    description:
      "Consistent text input states with focus rings, disabled styling, and error messaging baked in.",
  },
  {
    title: "Navigation Menu",
    href: "/library/navigation-menu",
    description:
      "An expandable navigation surface that groups links and descriptions inside a popover.",
  },
  {
    title: "Select",
    href: "/library/select",
    description:
      "Radix-powered dropdown with grouped options, labels, and checkmarks for the active value.",
  },
  {
    title: "Text",
    href: "/library/text",
    description:
      "Typography scale helpers for headings, body copy, and captions that cleanly map to Blueprint tokens.",
  },
  {
    title: "Sidebar",
    href: "/library/sidebar",
    description:
      "Workspace navigation with collapsed, floating, inset, and mobile-friendly layouts powered by the sidebar primitives.",
  },
];

