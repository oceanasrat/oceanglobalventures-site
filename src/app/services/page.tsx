export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Our Services
        </h1>

        <p className="text-gray-300 mb-12 leading-relaxed">
          Ocean Global Ventures partners with brands to expand their
          presence across leading online marketplaces while protecting
          pricing integrity and brand reputation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-3">
              Marketplace Management
            </h3>

            <p className="text-gray-300 text-sm">
              Professional representation of your products across
              marketplaces including Amazon, Walmart, and TikTok Shop.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-3">
              MAP Compliance
            </h3>

            <p className="text-gray-300 text-sm">
              Strict adherence to Minimum Advertised Price policies
              to protect brand equity and marketplace stability.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-3">
              Advertising & Growth
            </h3>

            <p className="text-gray-300 text-sm">
              Data-driven advertising strategies that increase
              visibility and improve product sales performance.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}