export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 px-6">
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg mb-4">
            Ocean Global Ventures
          </h3>

          <p className="text-sm leading-relaxed">
            Structured retail partner helping premium brands expand and protect
            their presence across digital marketplaces through authorized
            wholesale distribution, strict MAP compliance, and long-term growth
            strategies.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-yellow-500 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="/partners" className="hover:text-yellow-500 transition">
                Brand Partners
              </a>
            </li>

            <li>
              <a href="/verification" className="hover:text-yellow-500 transition">
                Verification
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services" className="hover:text-yellow-500 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#process" className="hover:text-yellow-500 transition">
                Our Process
              </a>
            </li>

            <li>
              <a href="/compliance" className="hover:text-yellow-500 transition">
                Compliance & Documentation
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-yellow-500 transition">
                Wholesale Inquiry
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <p className="text-sm">Ocean Global Ventures LLC</p>

          <p className="text-sm mt-2">procurement@oceanglobalventuresllc.com</p>

          <p className="text-sm mt-2">sales@oceanglobalventuresllc.com</p>

          <p className="text-sm mt-2">wholesale@oceanglobalventuresllc.com</p>

          <p className="text-sm mt-4 text-gray-500">Strategic Marketplace Retail Partner</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-16 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Ocean Global Ventures LLC. All rights reserved.
      </div>
    </footer>
  )
}