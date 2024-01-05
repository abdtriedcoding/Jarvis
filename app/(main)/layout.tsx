import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-full">
        <aside className="w-64 p-4 hidden md:block bg-slate-50">
          <Sidebar />
        </aside>
        <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
          <Navbar />
          <main className="max-w-3xl mx-auto p-4">{children}</main>
        </main>
      </body>
    </html>
  );
}
