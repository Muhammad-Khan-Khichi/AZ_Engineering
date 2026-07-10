import { FaLinkedin } from 'react-icons/fa'
import { team } from '../../data/team'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet Our Directors"
          subtitle="Experienced professionals leading A & Z Engineering with vision and expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const { ref, isVisible } = useScrollAnimation()

            return (
              <div
                key={member.id}
                ref={ref}
                className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center transition-all duration-700 hover:shadow-xl hover:border-green/30 hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-navy flex items-center justify-center text-white text-2xl font-bold">
                  {member.initials}
                </div>

<h3 className="text-xl font-bold text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-green font-semibold text-sm mb-3">
                  {member.role}
                </p>

                {member.pec && (
                  <div className="mb-4">
                    <Badge variant="green">PEC: {member.pec}</Badge>
                  </div>
                )}

                <p className="text-navy-lighter text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Leadership