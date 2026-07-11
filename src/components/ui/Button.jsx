const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  href,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2'

  const variants = {
    primary:
      'bg-green text-white hover:bg-green-dark shadow-md hover:shadow-lg',
    secondary:
      'bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg',
    outline:
      'border-2 border-green text-green hover:bg-green hover:text-white',
    ghost: 'text-navy hover:text-green',
    white: 'bg-white text-navy hover:bg-gray-100 shadow-md hover:shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button