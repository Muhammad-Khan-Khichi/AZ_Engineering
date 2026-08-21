import { useState } from 'react'
import {
  FaExpand,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

const ProjectCard = ({ project, onImageClick }) => {
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
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - Fixed Height */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
        {/* Actual Image */}
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
          /* Fallback when image fails to load */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-navy-light text-white/40">
            <div className="text-center p-6">
              <FaExpand className="text-4xl mx-auto mb-3 opacity-50" />
              <p className="text-sm font-medium">{project.title}</p>
              <p className="text-xs opacity-60 mt-1">Image not available</p>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}
        />

        {/* Image Counter */}
        {project.images.length > 1 && !imageError && (
          <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">
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

        {/* Image Navigation */}
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

        {/* Category Tag */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-navy text-xs px-3 py-1.5 rounded-full font-semibold z-10">
          {project.category}
        </div>
      </div>

      {/* Content Section - Flexible Height */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title - Fixed height */}
        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-green transition-colors min-h-[3.5rem] line-clamp-2">
          {project.title}
        </h3>

        {/* Description - Fixed height */}
        <p className="text-navy-lighter text-sm mb-4 line-clamp-3 leading-relaxed min-h-[4.5rem]">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-navy-lighter">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-green" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCalendar className="text-green" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-5 min-h-[2rem]">
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
              +{project.services.length - 3} more
            </span>
          )}
        </div>

        {/* View Button - Always at Bottom */}
        <button
          onClick={handleExpand}
          className="w-full flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-lg font-semibold hover:bg-green transition-colors group/btn mt-auto"
        >
          View Project
          <FaArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

export default ProjectCard