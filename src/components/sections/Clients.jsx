import { useRef } from 'react'
import { FaHandshake, FaStar } from 'react-icons/fa'
import clients from '../../data/clients'

const ClientLogo = ({ client }) => {
  return (
    <div className="relative group flex-shrink-0">
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg">
        {client.name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-navy rotate-45"></div>
      </div>

      {/* Logo Card */}
      <div className="w-40 h-28 md:w-52 md:h-32 bg-white rounded-2xl flex items-center justify-center px-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-green/30 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-16 md:max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = 'flex'
            }
          }}
        />
        <span className="hidden text-navy font-bold text-sm text-center">
 {client.name}
        </span>
      </div>
    </div>
  )
}

const Clients = () => {
  const containerRef = useRef(null)

  const duplicatedClients = [...clients, ...clients, ...clients, ...clients]

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaHandshake />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Our <span className="text-green">Clients</span>
          </h2>
          <p className="text-navy-lighter text-base md:text-lg max-w-2xl mx-auto mb-6">
            Proudly serving Pakistan's leading textile and manufacturing groups
            with precision engineering solutions since 1999.
          </p>

 {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg">
            <FaStar className="text-yellow-400" />
            <span>6+ Industry Leaders Across Pakistan</span>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full space-y-8">
        {/* Row 1: Scrolls Left */}
        <div className="relative group/row1">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <div className="flex items-center gap-8 md:gap-12 py-4 animate-marquee-left group-hover/row1:[animation-play-state:paused]">
              {duplicatedClients.map((client, idx) => (
                <ClientLogo key={`row1-${client.id}-${idx}`} client={client} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="relative group/row2">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <div className="flex items-center gap-8 md:gap-12 py-4 animate-marquee-right group-hover/row2:[animation-play-state:paused]">
              {[...duplicatedClients].reverse().map((client, idx) => (
                <ClientLogo key={`row2-${client.id}-${idx}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration Line */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent"></div>
      </div>
    </section>
  )
}

export default Clients