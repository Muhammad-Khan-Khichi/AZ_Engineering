import { FaIndustry, FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import { companyInfo } from '../../data/companyInfo'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-green blur-3xl"></div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-green/20 text-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaIndustry /> {companyInfo.experience} of Excellence
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Engineering <span className="text-green">Excellence</span> Since {companyInfo.established}
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            A & Z Engineering delivers reliable mechanical, electrical, and
            textile machinery solutions — from design and fabrication to
            installation, maintenance, and automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-dark transition-all duration-300 shadow-lg"
            >
              Our Services <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300"
            >
              <FaPhoneAlt /> Get a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10">
            {companyInfo.stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl md:text-4xl font-bold text-green">
                  {stat.number}
                </h3>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero