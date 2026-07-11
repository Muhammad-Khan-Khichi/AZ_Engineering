import * as FaIcons from 'react-icons/fa'
import { services } from '../../data/services'
import SectionHeader from '../ui/SectionHeader'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ServiceCard = ({ service, index }) => {
  const { ref, isVisible } = useScrollAnimation()
  const Icon = FaIcons[service.icon] || FaIcons.FaCogs

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-8 transition-all duration-700 hover:shadow-xl hover:border-green/30 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center text-green text-2xl mb-6">
        <Icon />
      </div>

      <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>

      <ul className="space-y-3">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green mt-1.5 text-xs">●</span>
            <span className="text-navy-lighter text-sm leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Engineering Services"
          subtitle="Comprehensive mechanical, electrical, and textile machinery solutions tailored to your industrial needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services