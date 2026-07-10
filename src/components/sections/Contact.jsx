import { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'
import { companyInfo } from '../../data/companyInfo'
import { useContactStore } from '../../store/useContactStore'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { services } from '../../data/services'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    lines: [companyInfo.address],
  },
  {
    icon: FaPhoneAlt,
    title: 'Phone',
    lines: [companyInfo.phones,  companyInfo.phoneSecondary],
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    lines: [companyInfo.email],
  },
  {
    icon: FaClock,
    title: 'Hours',
    lines: ['Monday - Saturday, 9:00 AM - 6:00 PM'],
  },
]

const Contact = () => {
  const { formData, updateField, resetForm } = useContactStore()
  const { ref, isVisible } = useScrollAnimation()
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('')

    try {
      const formBody = new FormData(e.target)
      formBody.append('access_key', 'YOUR_WEB3FORMS_KEY')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        resetForm()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* LEFT: Heading + Info Cards */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Let's Start a Conversation
            </h2>
            <p className="text-navy-lighter text-base md:text-lg mb-10 leading-relaxed">
              Whether you have a question about our services, need a quote,
              or want to discuss a project — our team is ready to help. Fill
              out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                    style={{ backgroundColor: '#F9FAFB' }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-green text-xl shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-navy font-bold text-base mb-1">
                        {info.title}
                      </h3>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-navy-lighter text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Contact Form - NAVY BLUE */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl shadow-xl p-8 md:p-10"
              style={{ backgroundColor: '#0B101B' }}
            >
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">
                Send Us a Message
              </h3>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-white font-medium text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-green focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="Your phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-green focus:outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-white font-medium text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-green focus:outline-none transition-colors text-sm"
                />
              </div>

              {/* Service Select */}
              <div className="mb-5">
                <label className="block text-white font-medium text-sm mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service || ''}
                  onChange={(e) => updateField('service', e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-green focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
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
                    <option key={service.id} value={service.title} className="bg-navy text-white">
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-white font-medium text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-green focus:outline-none transition-colors resize-none text-sm"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-5 p-4 rounded-lg bg-green/20 border border-green/40 text-green text-sm">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-5 p-4 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white font-semibold py-3.5 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                {!submitting && <FaPaperPlane />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact