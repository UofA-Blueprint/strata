export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="space-y-8 p-10">{children}</div>;
}
