import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { companyInfo } from '../../data/companyInfo'
import { services } from '../../data/services'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const offices = [
  {
    title: 'Head Office',
    address: companyInfo.address,
  },
  {
    title: 'Branch Office',
    address: '456 Commercial Zone, Karachi, Pakistan',
  },
]

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Acknowledgement */}
          <div>
            {/* Logo */}
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/az-logo.jpeg"
                alt="A & Z Engineering"
                className="h-16 md:h-20 w-auto bg-white rounded-lg p-2"
              />
            </Link>

            {/* Acknowledgement Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-4">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
                Acknowledgement
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                A & Z Engineering acknowledges the Traditional Custodians
                of the lands on which we work and live. We pay our respects
                to Elders past, present, and emerging, and recognise their
                continuing connection to land, water, and community.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-green text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-green text-sm transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5">
              {offices.map((office, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-green mt-1 text-base shrink-0" />
                  <div>
                    <h5 className="text-white font-semibold text-sm mb-1">
                      {office.title}
                    </h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-green hover:text-white hover:border-green transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-green hover:text-white hover:border-green transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-green hover:text-white hover:border-green transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-xs">
            Copyright © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer