export default function Verification() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Business Verification
        </h1>

        <p className="text-gray-300 mb-12 leading-relaxed">
          Ocean Global Ventures operates as a registered U.S. business entity
          specializing in authorized retail partnerships and marketplace
          distribution. We work directly with brands and distributors to
          represent products responsibly across major online marketplaces.
        </p>

        {/* COMPANY INFO */}

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              Legal Business Name
            </h3>
            <p className="text-gray-300">
              Ocean Global Ventures LLC
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              Business Type
            </h3>
            <p className="text-gray-300">
              Registered Limited Liability Company (LLC)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              Business Contact
            </h3>
            <p className="text-gray-300">
              procurement@oceanglobalventuresllc.com
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              Business Website
            </h3>
            <p className="text-gray-300">
              oceanglobalventuresllc.com
            </p>
          </div>

        </div>

        {/* WHOLESALE STATEMENT */}

        <div className="mt-16 bg-gray-900 border border-gray-800 p-8 rounded-lg">

          <h2 className="text-2xl font-semibold mb-6">
            Wholesale Purchasing Commitment
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Ocean Global Ventures purchases products directly from brands and
            authorized distributors for resale through approved retail
            channels. Our operations prioritize responsible inventory
            management, marketplace compliance, and long-term brand
            partnerships.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We operate with strict adherence to Minimum Advertised Price (MAP)
            policies and respect all brand distribution guidelines.
          </p>

        </div>

        {/* MARKETPLACE COMPLIANCE */}

        <div className="mt-16 grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              MAP Compliance
            </h3>
            <p className="text-gray-300 text-sm">
              We respect brand MAP policies to maintain healthy marketplace
              pricing.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              Authorized Retail
            </h3>
            <p className="text-gray-300 text-sm">
              Products are sourced directly from brands and authorized
              distributors.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-2">
              Brand Protection
            </h3>
            <p className="text-gray-300 text-sm">
              We prioritize brand integrity, accurate listings, and responsible
              distribution.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}