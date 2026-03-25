export default function BrandKit() {
  return (

<main className="min-h-screen bg-black text-white py-24">

<div className="max-w-6xl mx-auto px-6">

<h1 className="text-4xl font-semibold mb-6">
Brand Partnership Program
</h1>

<p className="text-gray-300 max-w-2xl mb-16">
Ocean Global Ventures partners with premium brands seeking
responsible marketplace representation and long-term
distribution partnerships.
</p>


{/* MARKETPLACE EXPANSION */}

<section className="mb-20">

<h2 className="text-3xl font-semibold mb-8">
Marketplace Expansion Strategy
</h2>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
<h3 className="text-yellow-500 font-semibold mb-2">
Amazon Marketplace
</h3>
<p className="text-gray-300 text-sm">
Optimized listings and advertising strategies designed
to increase product visibility and sales performance.
</p>
</div>

<div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
<h3 className="text-yellow-500 font-semibold mb-2">
Walmart Marketplace
</h3>
<p className="text-gray-300 text-sm">
Strategic distribution and listing optimization for
expanding marketplace reach.
</p>
</div>

<div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
<h3 className="text-yellow-500 font-semibold mb-2">
TikTok Shop
</h3>
<p className="text-gray-300 text-sm">
Leveraging social commerce to increase product
discoverability and brand awareness.
</p>
</div>

</div>

</section>


{/* BRAND PROTECTION */}

<section className="mb-20">

<h2 className="text-3xl font-semibold mb-8">
Brand Protection & MAP Compliance
</h2>

<p className="text-gray-300 max-w-3xl">
Ocean Global Ventures prioritizes brand protection
through strict adherence to MAP policies, professional
product representation, and responsible inventory
distribution across online marketplaces.
</p>

</section>


{/* RETAIL SHOWCASE */}

<section className="mb-20">

<h2 className="text-3xl font-semibold mb-8">
Retail Storefront Example
</h2>

<p className="text-gray-300 mb-8">
The storefront below demonstrates how products are
presented within our retail environment.
</p>

<div className="border border-gray-800 rounded-lg overflow-hidden">

<iframe
src="https://modern-ecommerce-9ib6.vercel.app"
className="w-full"
style={{height:"700px"}}
/>

</div>

</section>


{/* CTA */}

<section className="text-center mt-24">

<h2 className="text-3xl font-semibold mb-6">
Request Full Partnership Kit
</h2>

<p className="text-gray-300 mb-8">
Brands interested in wholesale partnerships may request
the complete partnership kit including business
verification documents and onboarding materials.
</p>

<a
href="/contact"
className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold"
>
Request Partnership Kit
</a>

</section>

</div>

</main>

  )
}