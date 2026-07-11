import About from '../components/sections/About'
import Leadership from '../components/sections/Leadership'
import MissionVision from '../components/sections/MissionVision'
import SectionHeader from '../components/ui/SectionHeader'
import { companyInfo } from '../data/companyInfo'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaCheckCircle } from 'react-icons/fa'
import SEO from '../components/ui/SEO'


const values = [
  'Integrity in every project',
  'Quality without compromise',
  'Innovation in engineering',
  'Customer satisfaction first',
  'Safety as top priority',
  'Continuous improvement',
]

const AboutPage = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div>
      <SEO
        title="About Us | A & Z Engineering – Since 1999"
        description="Learn about A & Z Engineering's 25+ years of experience in mechanical, electrical, and textile machinery engineering in Lahore, Pakistan."
        path="/about"
      />
      {/* Page Banner */}
      <section
        className="relative h-[420px] md:h-[480px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about.avif')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28">
          <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-3 border border-green/40 rounded-full px-4 py-1">
            WHO WE ARE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Engineering Contrivers
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            At Engineering Contrivers, we are a multidisciplinary team of
            engineers and scientists delivering high-quality, reliable, and
            constructible geotechnical, environmental, and structural
            solutions across Australia.
          </p>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Leadership Section */}
      <Leadership />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green mb-4">
              Our Core Values
            </h2>
            <p className="text-navy-lighter text-base md:text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every
              project we deliver.
            </p>
          </div>

          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-navy-light rounded-xl p-6 border border-white/5 flex items-center gap-4 hover:border-green/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-green/20 flex items-center justify-center text-green text-xl flex-shrink-0">
                  <FaCheckCircle />
                </div>
                <span className="text-white font-medium text-sm md:text-base">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage