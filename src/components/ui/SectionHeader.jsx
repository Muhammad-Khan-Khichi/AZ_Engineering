import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const SectionHeader = ({ eyebrow, title, subtitle, center = true }) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`mb-12 ${center ? 'text-center' : 'text-left'} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {eyebrow && (
        <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-navy-lighter text-base md:text-lg ${center ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader