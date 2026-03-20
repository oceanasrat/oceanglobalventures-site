export default function Retail() {
  return (

    <main className="min-h-screen bg-black text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Retail Marketplace Showcase
        </h1>

        <p className="text-gray-300 mb-12 max-w-2xl">
          Ocean Global Ventures maintains professional product
          representation across ecommerce platforms. The retail
          storefront below demonstrates how brand partners’
          products are presented within our online retail
          environment.
        </p>

        <div className="border border-gray-800 rounded-lg overflow-hidden">

          <iframe
            src="https://modern-ecommerce-9ib6.vercel.app"
            className="w-full"
            style={{height:"800px"}}
          />

        </div>

      </div>

    </main>

  )
}