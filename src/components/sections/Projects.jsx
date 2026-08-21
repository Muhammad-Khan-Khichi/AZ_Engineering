import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendar,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from 'react-icons/fa'
import projects from '../../data/projects'
import ImageLightbox from '../ui/ImageLightbox'

const ProjectCard = ({ project, index, onImageClick }) => {
  const navigate = useNavigate()
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    )
  }

  const handleExpand = (e) => {
    e.stopPropagation()
    onImageClick(project.images, currentImage)
  }

  return (
    <div
      className="group bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/projects')}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-navy flex-shrink-0">
        {!imageError ? (
          <img
            src={project.images[currentImage]}
            alt={project.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/40">
            <div className="text-center p-6">
              <FaExpand className="text-4xl mx-auto mb-3 opacity-50" />
              <p className="text-sm font-medium">{project.title}</p>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-90' : 'opacity-60'
          }`}
        />

        {/* Image Counter */}
        {project.images.length > 1 && !imageError && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">
            {currentImage + 1} / {project.images.length}
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-green text-white text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider flex items-center gap-1 z-10">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            Featured
          </div>
        )}

        {/* Image Navigation Arrows */}
        {project.images.length > 1 && !imageError && (
          <>
            <button
              onClick={prevImage}
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center transition-all z-10 shadow-lg ${
                isHovered
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2 pointer-events-none'
              }`}
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center transition-all z-10 shadow-lg ${
                isHovered
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2 pointer-events-none'
              }`}
              aria-label="Next image"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </>
        )}

        {/* Expand Button */}
        <button
          onClick={handleExpand}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-green text-white flex items-center justify-center hover:bg-green-dark transition-all shadow-lg z-10 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          aria-label="Expand image"
        >
          <FaExpand className="text-sm" />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-navy text-xs px-3 py-1.5 rounded-full font-semibold z-10">
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green transition-colors line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-3 text-xs text-white/60">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-green" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCalendar className="text-green" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {project.services.slice(0, 3).map((service, idx) => (
            <span
              key={idx}
              className="text-xs bg-white/5 text-white/70 px-2.5 py-1 rounded-md border border-white/10"
            >
              {service}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-xs bg-green/20 text-green px-2.5 py-1 rounded-md font-medium">
              +{project.services.length - 3} more
            </span>
          )}
        </div>

        {/* View Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
          <span className="text-green font-semibold text-sm flex items-center gap-2 group/btn">
            View Details
            <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
          </span>
          {project.duration && (
            <span className="text-xs text-white/50">{project.duration}</span>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })

  const openLightbox = (images, index) => {
    setLightbox({ open: true, images, index })
  }

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false })
  }

  return (
    <section id="projects" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-green blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-green blur-3xl"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green/20 text-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaCheckCircle />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-green">Projects</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            A selection of our key engineering projects delivered with precision
            and excellence across Pakistan's industrial sector.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {/* Stats Counter */}
        <div className="bg-navy-light rounded-2xl p-8 md:p-10 mb-12 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '50+', label: 'Projects Delivered' },
              { num: '30+', label: 'Happy Clients' },
              { num: '15+', label: 'Industries Served' },
              { num: '25+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green mb-1">
                  {stat.num}
                </div>
                <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-3 bg-green text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-green-dark transition-all hover:scale-105 shadow-lg hover:shadow-green/50 group"
          >
            View All Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}

export default Projects