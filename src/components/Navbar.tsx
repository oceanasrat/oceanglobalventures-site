import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <div className="font-bold text-lg text-yellow-500">
          Ocean Global Ventures
        </div>

        <div className="flex gap-6 text-sm">
          <Link href="/verification">Verification</Link>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/partners">Brand Partners</Link>
          <Link href="/contact">Contact</Link>

        </div>

      </div>
    </nav>
  )
}