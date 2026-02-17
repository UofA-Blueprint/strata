import StrataNav from "@/components/strata-nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-svh flex-col">
        <StrataNav />
        {children}
      </body>
    </html>
  );
}
