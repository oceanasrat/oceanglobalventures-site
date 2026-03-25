<<<<<<< HEAD
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  const steps = [
    {
      title: "Onboarding",
      desc: "Compliance check, resale certificate exchange, and brand alignment"
    },
    {
      title: "Trial Phase",
      desc: "Initial purchase order to establish logistics and performance benchmarks"
    },
    {
      title: "Optimization",
      desc: "MAP compliance monitoring and listing performance optimization"
    },
    {
      title: "Scaling",
      desc: "Increased purchase volume and expansion into multi-channel distribution"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="text-center py-32 px-6 max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-500">
          The Structured Retail Partner for Sustainable Brand Growth
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          We bridge the gap between premium brands and the digital marketplace
          through authorized wholesale partnerships, strict MAP compliance,
          and data-driven inventory management.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          Operating exclusively through authorized wholesale accounts. No arbitrage. No gray market sourcing.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a href="/contact" className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold">
            Apply for Partnership
          </a>

          <a href="#process" className="border border-yellow-500 px-8 py-4 rounded-lg">
            View Our Process
          </a>
=======
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}

      <section className="text-center py-32 px-6 max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-yellow-500">
          Strategic Retail Partnership for Premium Brands
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Ocean Global Ventures partners with leading brands to expand and
          protect their presence across online marketplaces through
          MAP-compliant distribution, optimized listings, and
          data-driven advertising strategies.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <a
            href="/contact"
            className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition"
          >
            Become a Brand Partner
          </a>

          <a
            href="/services"
            className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Our Services
          </a>

>>>>>>> 4fc3eb55ac395e85ce6d8f7f61f08dc1b3e942a5
        </div>

      </section>

<<<<<<< HEAD
      {/* POSITIONING */}

      <section className="py-20 border-t border-gray-800 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6">Professionalism in Every Transaction</h2>

        <p className="text-gray-300 leading-relaxed">
          We are a U.S.-registered, tax-compliant retail firm dedicated to building
          long-term relationships with brand owners and authorized distributors.
          We integrate into your supply chain as a reliable, process-driven extension
          of your sales team.
        </p>
      </section>

      {/* PARTNERSHIP APPROACH */}

      <section className="py-20 border-t border-gray-800 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6">Beyond Transactional. Truly Partnership-Driven.</h2>

        <p className="text-gray-300 leading-relaxed">
          Our model is built on authorization and alignment. We operate exclusively
          through formal wholesale accounts, ensuring every unit sold is documented,
          authentic, and compliant with your brand’s vision.
        </p>
      </section>

      {/* WHY PARTNER */}

      <section className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {[
            "Strict MAP Policy Enforcement",
            "Authorized Wholesale Sourcing Only",
            "Inventory Stability & Supply Continuity",
            "Professional Marketplace Representation"
          ].map((item, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* SALES CHANNEL */}

      <section className="py-24 border-t border-gray-800 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6">Our Sales Channels & Growth Model</h2>

        <p className="text-gray-300 leading-relaxed">
          Our primary channel is Amazon FBA (Professional Seller Tier). We begin
          with a structured "Launch & Scale" model, then expand into multi-channel
          environments as performance data validates growth.
        </p>
      </section>

      {/* SCROLL WORKFLOW */}

      <section ref={ref} id="process" className="py-32 border-t border-gray-800">

        <h2 className="text-3xl text-center mb-24">
          The Success Workflow: How We Work
        </h2>

        <div className="relative max-w-5xl mx-auto">

          {/* LINE */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-1/2 top-0 w-[2px] h-full bg-yellow-500 origin-top"
          />

          {/* STEPS */}
          <div className="space-y-24">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >

                <div className="w-1/2 px-6">

                  <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl shadow-xl hover:border-yellow-500 transition">

                    <h3 className="text-yellow-500 font-semibold mb-2">
                      {i + 1}. {step.title}
                    </h3>

                    <p className="text-gray-300 text-sm">
                      {step.desc}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}
=======
      {/* TRUST SECTION */}

      <section className="py-20 border-t border-gray-800">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Trusted Marketplace Retail Partner
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-gray-300">

            <div>
              <h3 className="text-yellow-500 font-semibold mb-2">
                Registered U.S. Business
              </h3>
              <p>Ocean Global Ventures LLC</p>
            </div>

            <div>
              <h3 className="text-yellow-500 font-semibold mb-2">
                MAP Policy Compliant
              </h3>
              <p>Protecting brand pricing integrity</p>
            </div>

            <div>
              <h3 className="text-yellow-500 font-semibold mb-2">
                Marketplace Optimization
              </h3>
              <p>Professional product representation</p>
            </div>

            <div>
              <h3 className="text-yellow-500 font-semibold mb-2">
                Authorized Retail Partnerships
              </h3>
              <p>Long-term brand relationships</p>
            </div>
>>>>>>> 4fc3eb55ac395e85ce6d8f7f61f08dc1b3e942a5

          </div>

        </div>

      </section>

<<<<<<< HEAD
      {/* TRUST */}

      <section className="py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
            Verified U.S. Business (EIN available)
          </div>

          <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
            Valid Resale Certificates
          </div>

          <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
            Invoice & Chain of Custody Tracking
          </div>

          <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
            Zero Arbitrage Guarantee
          </div>

        </div>
      </section>

      {/* NO GO */}

      <section className="py-20 border-t border-gray-800 text-center">
        <h2 className="text-2xl mb-6">
          Controlled Distribution Policy
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Ocean Global Ventures does not operate on unauthorized marketplaces,
          discount platforms, liquidation channels, or peer-to-peer resale environments.
        </p>
      </section>

      {/* CTA */}

      <section className="py-32 text-center">

        <h2 className="text-3xl mb-6">
          Ready to Professionalize Your Digital Presence?
        </h2>

        <p className="text-gray-400 mb-10">
          Join a network of brands that value stability over shortcuts.
        </p>

        <a href="/contact" className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-semibold">
          Open Wholesale Account
        </a>

      </section>

=======
      {/* SERVICES PREVIEW */}

      <section className="py-24 border-t border-gray-800">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl text-center font-semibold mb-16">
            Our Value to Brand Partners
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-yellow-500 text-xl font-semibold mb-4">
                Marketplace Management
              </h3>
              <p className="text-gray-300">
                Professional representation of your products across major
                online marketplaces with consistent brand presentation.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-yellow-500 text-xl font-semibold mb-4">
                MAP Compliance
              </h3>
              <p className="text-gray-300">
                Strict adherence to Minimum Advertised Price policies to
                protect brand value and maintain marketplace stability.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-yellow-500 text-xl font-semibold mb-4">
                Advertising & Growth
              </h3>
              <p className="text-gray-300">
                Data-driven advertising strategies that increase visibility,
                improve conversion rates, and scale product sales.
              </p>
            </div>

          </div>

        </div>

      </section>
{/* PARTNERSHIP PROCESS */}

<section className="py-24 border-t border-gray-800">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl text-center font-semibold mb-16">
      Our Brand Partnership Process
    </h2>

    <div className="grid md:grid-cols-4 gap-10 text-center">

      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold text-lg mb-3">
          1. Brand Onboarding
        </h3>
        <p className="text-gray-300">
          We establish a wholesale partnership and align with your brand
          guidelines and distribution policies.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold text-lg mb-3">
          2. Listing Optimization
        </h3>
        <p className="text-gray-300">
          Product listings are optimized for visibility, accuracy, and
          consistent brand presentation.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold text-lg mb-3">
          3. MAP Protection
        </h3>
        <p className="text-gray-300">
          We operate with strict adherence to brand MAP policies to
          maintain pricing integrity across marketplaces.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold text-lg mb-3">
          4. Growth & Advertising
        </h3>
        <p className="text-gray-300">
          Strategic advertising and marketplace optimization help scale
          product visibility and sales performance.
        </p>
      </div>

    </div>

  </div>

 </section>
 {/* BRAND PROTECTION SECTION */}

<section className="py-24 border-t border-gray-800 bg-black">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

    <div>

      <h2 className="text-4xl font-semibold mb-6">
        Protecting Brand Integrity in Online Marketplaces
      </h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Ocean Global Ventures operates with a strict commitment to
        protecting the reputation and pricing integrity of our brand
        partners across online marketplaces.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Our operational approach prioritizes responsible distribution,
        adherence to MAP policies, and professional marketplace
        representation that aligns with each brand’s long-term retail
        strategy.
      </p>

      <div className="mt-8">

        <a
          href="/contact"
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Request Retail Partnership
        </a>

      </div>

    </div>

    <div className="grid gap-6">

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold mb-2">
          MAP Policy Compliance
        </h3>
        <p className="text-gray-300 text-sm">
          We strictly follow brand MAP policies to maintain stable
          marketplace pricing and protect brand equity.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold mb-2">
          Professional Listing Management
        </h3>
        <p className="text-gray-300 text-sm">
          Listings are optimized to ensure accurate product
          representation and consistent brand presentation.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-yellow-500 font-semibold mb-2">
          Responsible Distribution
        </h3>
        <p className="text-gray-300 text-sm">
          Our partnerships focus on long-term brand growth rather than
          short-term price competition.
        </p>
      </div>

    </div>

  </div>

 </section>
 {/* MARKETPLACE PLATFORMS */}

<section className="py-24 border-t border-gray-800 bg-black">

  <div className="max-w-6xl mx-auto text-center px-6">

    <h2 className="text-3xl font-semibold mb-6">
      Multi-Channel Marketplace Distribution
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
      Ocean Global Ventures helps brands expand across the world's largest
      online marketplaces while maintaining consistent pricing, brand
      integrity, and professional product representation.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-6 gap-6">

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
        Amazon
      </div>

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
        Walmart
      </div>

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
        eBay
      </div>

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
        Target
      </div>

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
        TikTok Shop
      </div>

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
        Shopify
      </div>

    </div>

  </div>

</section>
>>>>>>> 4fc3eb55ac395e85ce6d8f7f61f08dc1b3e942a5
    </main>
  )
}