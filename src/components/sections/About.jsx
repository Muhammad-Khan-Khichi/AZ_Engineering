import { FaCheckCircle } from 'react-icons/fa'
import { companyInfo } from '../../data/companyInfo'
import SectionHeader from '../ui/SectionHeader'
import DotBackground from '../ui/DotBackground'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const highlights = [
  'ISO-standard quality practices',
  'Experienced and certified engineers',
  '24+ years of industrial expertise',
  'Custom engineering solutions',
  'Timely project delivery',
  'Comprehensive after-sales support',
]

const About = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* 🔵 Dotted Background - INSIDE the section */}
      <DotBackground
        color="#0B101B"
        dotSize={1.3}
        spacing={22}
        opacity={0.1}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <SectionHeader
              eyebrow="About Us"
              title="Trusted Engineering Partner Since 1999"
              subtitle="A & Z Engineering has been delivering quality mechanical and electrical engineering solutions for over two decades."
              center={false}
            />

            <div
              ref={ref}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-navy-lighter text-base md:text-lg leading-relaxed mb-6">
                Founded in {companyInfo.established}, A & Z Engineering started
                as a small local setup and has grown into a reputable
                engineering firm known for reliability, innovation, and
                quality. We specialize in mechanical fabrication, electrical
                system design, industrial automation, and textile machinery
                solutions.
              </p>

              <p className="text-navy-lighter text-base md:text-lg leading-relaxed mb-8">
                Our team of certified engineers and skilled technicians is
                committed to delivering projects on time, within budget, and
                to the highest standards of quality and safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green flex-shrink-0" />
                    <span className="text-navy text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div
            ref={ref}
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="bg-navy rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green/20 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Why Choose Us?
              </h3>

              <div className="space-y-6 relative z-10">
                {companyInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <span className="text-white/70 text-sm md:text-base">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-bold text-green">
                      {stat.number}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between pb-4">
                  <span className="text-white/70 text-sm md:text-base">
                    Established
                  </span>
                  <span className="text-2xl font-bold text-green">
                    {companyInfo.established}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About