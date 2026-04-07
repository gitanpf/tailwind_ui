import './globals.css'
import { Sidebar } from './components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <div className="grid grid-cols-app min-h-screen">
          <Sidebar />
          <main className="px-4 pb-12 pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}