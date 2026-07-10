import * as FaIcons from 'react-icons/fa'
import { missionVision } from '../../data/missionVision'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Mission = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="mission" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-3">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Purpose, Vision & Mission
          </h2>
          <p className="text-navy-lighter text-base md:text-lg max-w-2xl mx-auto">
            The principles that drive everything we do at A & Z Engineering.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {missionVision.map((item, index) => {
            const Icon = FaIcons[item.icon] || FaIcons.FaStar

            return (
              <div
                key={item.id}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green/30 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-green flex items-center justify-center text-white text-2xl mb-6">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>

                {item.description && (
                  <p className="text-navy-lighter text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {item.list && (
                  <ul className="space-y-3">
                    {item.list.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green mt-1.5 text-xs">●</span>
                        <span className="text-navy-lighter text-sm leading-relaxed">
                          {listItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Mission