const DotBackground = ({
  color = '#0B101B',      // Navy color
  dotSize = 1,             // Size of each dot
  spacing = 304,            // Space between dots
  opacity = 0,          // Dot opacity
}) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}

export default DotBackground