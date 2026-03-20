import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Ocean Global Ventures",
  description: "Strategic retail partner for premium brands",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        {children}

      </body>
    </html>
  )
}