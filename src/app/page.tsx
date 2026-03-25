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
        </div>

      </section>

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

          </div>

        </div>

      </section>

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

    </main>
  )
}