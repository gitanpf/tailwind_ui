import "./globals.css";
import { Sidebar } from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <div className="lg:grid-cols-app min-h-screen lg:grid">
          <Sidebar />
          <main className="max-w-screen px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
