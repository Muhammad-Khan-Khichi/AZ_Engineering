import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Card = ({ children, className = '', hover = true, ...props }) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${
        hover
          ? 'hover:shadow-xl hover:border-green/30 hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card