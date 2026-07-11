import { useState, useEffect, useRef } from 'react'
import * as FaIcons from 'react-icons/fa'
import { services } from '../data/services'
import SectionHeader from '../components/ui/SectionHeader'
import { FaArrowRight } from 'react-icons/fa'

const processSteps = [
  {
    icon: 'FaSearch',
    title: 'Consultation',
    description: 'We discuss your needs, inspect the site, and understand your project requirements in detail.',
  },
  {
    icon: 'FaDraftingCompass',
    title: 'Design & Planning',
    description: 'Our engineers create detailed designs, schematics, and project timelines for your approval.',
  },
  {
    icon: 'FaCogs',
    title: 'Implementation',
    description: 'We fabricate, install, and execute the project with precision using our professional equipment.',
  },
  {
    icon: 'FaClipboardCheck',
    title: 'Testing & Handover',
    description: 'Rigorous quality testing, final inspection, and a smooth handover with full documentation.',
  },
]

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(true) // ✅ Start as true (already in view)
  const processRef = useRef(null)
  const [processVisible, setProcessVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* Page Banner with Background Image */}
      <section
        className="relative h-[420px] md:h-[480px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/services.avif)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy/85"></div>

        {/* Content */}
        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Pill Badge */}
          <div className="inline-block border-2 border-green rounded-full px-6 py-2 mb-6">
            <span className="text-green font-bold text-sm uppercase tracking-widest">
              What We Do
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Our Expertise
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A & Z Engineering delivers integrated engineering solutions across four core
            disciplines. We combine specialist technical capability with practical
            experience to reduce risk, optimise cost, and accelerate delivery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Expertise"
            title="Engineering Solutions We Offer"
            subtitle="From mechanical fabrication to electrical systems and industrial automation — we cover it all."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = FaIcons[service.icon] || FaIcons.FaCogs

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 transition-all duration-700 hover:shadow-xl hover:border-green/30 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center text-green text-2xl mb-6">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-4">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green mt-1.5 text-xs">●</span>
                        <span className="text-navy-lighter text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-green font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Get a Quote <FaArrowRight />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Project Process"
            subtitle="A structured, transparent approach to ensure quality results every time."
          />

          <div
            ref={processRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {processSteps.map((step, index) => {
              const Icon = FaIcons[step.icon] || FaIcons.FaCogs

              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 pt-10 h-full">
                    <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center text-green text-2xl mb-6">
                      <Icon />
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-3">
                      {step.title}
                    </h3>

                    <p className="text-navy-lighter text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage