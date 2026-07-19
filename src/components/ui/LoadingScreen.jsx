import { useEffect, useState } from 'react'
import { FaIndustry } from 'react-icons/fa'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30) // Speed of loading

    // Fade out after loading completes
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setHidden(true)
        onComplete?.()
      }, 500) // Fade duration
    }, 2000) // Total loading time

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onComplete])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-navy transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-green/10 blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo / Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer Ring (Spinning) */}
            <div className="w-24 h-24 rounded-full border-4 border-white/10 border-t-green animate-spin"></div>

            {/* Inner Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-green text-3xl">
              <FaIndustry />
            </div>

            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-green/30 animate-ping"></div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
          A & Z <span className="text-green">Engineering</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/60 text-sm md:text-base mb-8 tracking-wide">
          Engineering Excellence Since 1999
        </p>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mx-auto mb-4">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green to-green-dark transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="text-white/50 text-xs font-mono">
          {progress}%
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-green animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-green animate-bounce delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-green animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen