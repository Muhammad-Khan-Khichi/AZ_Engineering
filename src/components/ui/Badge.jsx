const Badge = ({ children, variant = 'green', className = '' }) => {
  const variants = {
    green: 'bg-green/10 text-green',
    navy: 'bg-navy/10 text-navy',
    white: 'bg-white/10 text-white',
    solidGreen: 'bg-green text-white',
    solidNavy: 'bg-navy text-white',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge