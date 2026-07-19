import { useState } from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUserTie,
  FaDirections,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'
import { companyInfo } from '../data/companyInfo'
import { services } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { sendContactEmail } from '../services/emailService'
import SEO from '../components/ui/SEO'

const ContactPage = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    const result = await sendContactEmail(formData)

    if (result.success) {
      setStatus('success')
      resetForm()
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      setStatus('error')
      setErrorMessage(result.message)
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: companyInfo.address,
    },
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: Array.isArray(companyInfo.phones)
        ? companyInfo.phones.join(' | ')
        : companyInfo.phone,
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: companyInfo.email,
    },
    {
      icon: FaClock,
      label: 'Working Hours',
      value: companyInfo.hours,
    },
  ]

  return (
    <div>
      <SEO
        title="Contact Us | A & Z Engineering – Lahore"
        description="Get in touch with A & Z Engineering for mechanical, electrical, and textile machinery services. Located on Ferozepur Road, Lahore, Pakistan."
        url="https://www.azengineering.com/contact"
      />

      {/* Page Banner */}
      <section className="relative h-[420px] md:h-[480px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/contact.jpg")',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#0B101B',
            opacity: 0.88,
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-green/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-green/5 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 md:py-10">
          <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-4 border border-green/40 rounded-full px-4 py-1.5">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We're here to help with your engineering needs. Reach out and
            let's talk about your next project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={contentRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 ${
              contentVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Left: Contact Info */}
            <div>
              <span className="inline-block text-green font-semibold text-xs uppercase tracking-wider mb-3">
                Reach Out
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                Let's Start a Conversation
              </h2>

              <p className="text-navy-lighter text-base leading-relaxed mb-8">
                Whether you have a question about our services, need a quote, or
                want to discuss a project — our team is ready to help. Fill out
                the form and we'll get back to you within 24 hours.
              </p>

              {/* Contact Detail Cards */}
              <div className="space-y-4 mb-8">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 rounded-xl p-5 border border-gray-100 hover:border-green/40 hover:shadow-md transition-all duration-300 bg-gray-50"
                    >
                      <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center text-green text-xl flex-shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="text-navy font-semibold text-sm mb-1">
                          {detail.label}
                        </h4>
                        <p className="text-navy-lighter text-sm leading-relaxed">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Direct Contact Person */}
              <div className="bg-navy rounded-xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green/20 flex items-center justify-center text-green text-2xl flex-shrink-0">
                  <FaUserTie />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Project Inquiries
                  </p>
                  <h4 className="text-white font-bold text-base">
                    {companyInfo.contactPerson || 'Engineering Team'}
                  </h4>
                  <p className="text-white/70 text-xs mt-1">
                    Available Mon - Sat, 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-xl"
              style={{ backgroundColor: '#0B101B' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-green/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green/10 rounded-full blur-3xl"></div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Fill out the form and our team will respond within 24 hours.
                </p>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green/20 border border-green/40 text-green text-sm flex items-center gap-3 animate-fade-in">
                    <FaCheckCircle className="text-lg flex-shrink-0" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm flex items-center gap-3 animate-fade-in">
                    <FaExclamationCircle className="text-lg flex-shrink-0" />
                    <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                  </div>
                )}

                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green focus:bg-white/10 transition-all placeholder-white/30 disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green focus:bg-white/10 transition-all placeholder-white/30 disabled:opacity-50"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green focus:bg-white/10 transition-all placeholder-white/30 disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green focus:bg-white/10 transition-all appearance-none cursor-pointer disabled:opacity-50"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.25em',
                    }}
                  >
                    <option value="" className="bg-navy text-white">
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.title}
                        className="bg-navy text-white"
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green focus:bg-white/10 transition-all placeholder-white/30 resize-none disabled:opacity-50"
                    placeholder="Tell us about your project, requirements, timeline..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-green text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-green/30"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-white/40 text-xs text-center">
                  By submitting, you agree to our privacy policy. We'll never share your info.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="inline-block text-green font-semibold text-xs uppercase tracking-wider mb-3 border border-green/40 rounded-full px-4 py-1.5">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Find Our Office
            </h2>
            <p className="text-navy-lighter text-base">
              Stop by our office to discuss your project in person.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-green text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-dark transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage