import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavStore } from '../../store/useNavStore'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useNavStore()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isInnerPage = !isHomePage

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  const logoClass = isInnerPage
    ? 'h-10 md:h-12 w-auto'
    : scrolled
    ? 'h-10 md:h-12 w-auto'
    : 'h-12 md:h-14 w-auto'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isInnerPage
          ? 'bg-white shadow-md py-3'
          : scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/az-logo.jpeg"
            alt="A & Z Engineering"
            className={`${logoClass} transition-all duration-300`}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`font-semibold text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isInnerPage || scrolled
                      ? isActive
                        ? 'text-green'
                        : 'text-navy hover:text-green'
                      : isActive
                      ? 'text-green'
                      : 'text-white hover:text-green'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Get a Quote Button (Desktop) */}
        <Link
          to="/contact"
          className={`hidden md:inline-block font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-300 ${
            isInnerPage || scrolled
              ? 'bg-green hover:bg-green-dark text-white'
              : 'bg-green hover:bg-white hover:text-green text-white border-2 border-green'
          }`}
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-2xl ${
            isInnerPage || scrolled ? 'text-navy' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${isInnerPage || scrolled ? 'bg-white' : 'bg-navy'}`}
      >
        <ul className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-colors ${
                    isInnerPage || scrolled
                      ? isActive
                        ? 'bg-green text-white'
                        : 'text-navy hover:bg-gray-100'
                      : isActive
                      ? 'bg-green text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li className="mt-2">
            <Link
              to="/contact"
              className="block text-center bg-green hover:bg-green-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar