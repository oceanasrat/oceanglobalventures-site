export default function Partners() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-semibold mb-8">
          Brand Partnership Program
        </h1>

        <p className="text-gray-300 mb-10 leading-relaxed">
          Ocean Global Ventures partners with premium brands seeking
          professional representation across major online marketplaces.
          Our focus is building long-term retail relationships that protect
          brand value while expanding marketplace reach.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-3">
              Authorized Retail Distribution
            </h3>

            <p className="text-gray-300 text-sm">
              We establish direct wholesale relationships with brands to
              ensure responsible product distribution across marketplaces.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-3">
              MAP Policy Compliance
            </h3>

            <p className="text-gray-300 text-sm">
              Our operations strictly follow brand MAP policies to protect
              pricing integrity and maintain marketplace stability.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-yellow-500 font-semibold mb-3">
              Marketplace Growth
            </h3>

            <p className="text-gray-300 text-sm">
              Through listing optimization and advertising strategy,
              we help brands expand their digital retail presence.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">

          <a
            href="/contact"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold"
          >
            Request Brand Partnership
          </a>

        </div>

      </div>

    </main>
  )
}