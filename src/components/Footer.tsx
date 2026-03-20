export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">
            Ocean Global Ventures
          </h3>

          <p className="text-sm leading-relaxed">
            Strategic retail partner helping premium brands grow and
            protect their presence across online marketplaces through
            MAP-compliant distribution and marketplace optimization.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Company
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Brand Partners</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Corporate Information
          </h4>

          <p className="text-sm">
            Ocean Global Ventures LLC
          </p>

          <p className="text-sm mt-2">
            procurement@oceanglobalventuresllc.com
          </p>

          <p className="text-sm mt-2">
            Strategic Marketplace Retail Partner
          </p>

        </div>

      </div>

      <div className="text-center text-xs text-gray-600 mt-12">
        © {new Date().getFullYear()} Ocean Global Ventures LLC. All rights reserved.
      </div>

    </footer>
  )
}