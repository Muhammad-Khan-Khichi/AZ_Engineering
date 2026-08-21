import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendar,
  FaCheckCircle,
} from 'react-icons/fa'
import projects from '../../data/projects'

const FeaturedProjects = () => {
  const navigate = useNavigate()
  const [hoveredId, setHoveredId] = useState(null)

  // Get only featured projects
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaCheckCircle />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Featured <span className="text-green">Projects</span>
          </h2>
          <p className="text-navy-lighter text-lg max-w-2xl mx-auto">
            Showcasing our successful installations across Pakistan's leading
            textile and industrial facilities
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => navigate('/projects')}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-navy text-xs px-3 py-1.5 rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4 bg-green text-white text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  Featured
                </div>

                {/* Bottom Content (on image) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80 text-xs">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-navy-lighter text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.slice(0, 3).map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-navy-lighter px-2.5 py-1 rounded-md"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 3 && (
                    <span className="text-xs bg-green/10 text-green px-2.5 py-1 rounded-md font-medium">
                      +{project.services.length - 3}
                    </span>
                  )}
                </div>

                {/* View Button */}
                <button className="w-full flex items-center justify-center gap-2 text-green font-semibold py-2 group/btn">
                  View Case Study
                  <FaArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Stats Counter Bar */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            ></div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '50+', label: 'Projects Completed' },
              { num: '30+', label: 'Happy Clients' },
              { num: '15+', label: 'Industries Served' },
              { num: '5+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green mb-2">
                  {stat.num}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-3 bg-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            View All Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects