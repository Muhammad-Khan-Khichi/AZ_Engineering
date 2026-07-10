import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaIndustry } from 'react-icons/fa'
import { useNavStore } from '../../store/useNavStore'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavStore()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Check if we're on homepage (where hero is navy)
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine if navbar should show "white mode" (transparent on dark bg)
  // Only home page shows white mode initially
  const useWhiteMode = isHomePage && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        useWhiteMode
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-md shadow-md py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-green flex items-center justify-center text-white text-xl">
            <FaIndustry />
          </div>
          <div className="leading-tight">
            <span
              className={`block font-bold text-lg transition-colors duration-300 ${
                useWhiteMode ? 'text-white' : 'text-navy'
              }`}
            >
              A & Z
            </span>
            <span className="block text-green text-xs font-medium">
              Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`font-medium text-sm transition-colors duration-300 ${
                  useWhiteMode
                    ? 'text-white hover:text-green'
                    : 'text-navy hover:text-green'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <a
          href="tel:+923070409362"
          className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
            useWhiteMode
              ? 'bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-navy'
              : 'bg-green text-white hover:bg-green-dark'
          }`}
        >
          Get a Quote
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden text-2xl transition-colors duration-300 ${
            useWhiteMode ? 'text-white' : 'text-navy'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 mt-3">
          <ul className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={closeMobileMenu}
                  className="block py-3 text-navy hover:text-green font-medium border-b border-gray-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="tel:+923070409362"
                onClick={closeMobileMenu}
                className="block text-center bg-green text-white px-5 py-3 rounded-lg font-semibold"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar