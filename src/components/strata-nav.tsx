"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/library" },
  { label: "About", href: "/about" },
];

export default function TopNav() {
  return (
    <header className="border-b border-[#e5e5e5] bg-white">
      <nav className="flex items-center justify-center gap-1 py-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-md px-3 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-[#f5f5f5]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
