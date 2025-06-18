
import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Grievance Portal',
  description: 'A simple grievance submission portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-purple-50 min-h-screen">
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
