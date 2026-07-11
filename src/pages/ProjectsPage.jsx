import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { projects } from '../data/projects'
import SectionHeader from '../components/ui/SectionHeader'
import Badge from '../components/ui/Badge'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = ['All', 'Mechanical', 'Electrical', 'Textile', 'Automation']

const ProjectsPage = () => {
  // Only for the projects grid (below banner)
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Page Banner with Background Image - TEXT APPEARS IMMEDIATELY */}
      <section className="relative h-[420px] md:h-[480px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/project.avif")',
          }}
        />

        {/* Navy Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#0B101B',
            opacity: 0.85,
          }}
        />

        {/* Decorative glow accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-green/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-green/5 blur-3xl"></div>
        </div>

        {/* Banner Content - NO SCROLL TRIGGER, appears immediately */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16">
          <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-6 border border-green/40 rounded-full px-4 py-1.5">
            Our Track Record
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Selected Projects of Excellence
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our Engineers have a proven track record of delivering complex
            geotechnical, environmental, and structural engineering solutions
            across Australia.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Engineering Projects"
            subtitle="Browse through our completed projects across various industries and categories."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-green text-white border border-green shadow-md'
                      : 'bg-white text-navy border border-gray-200 hover:bg-green hover:text-white hover:border-green'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Projects Grid - Has scroll animation */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              gridVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => {
                const Icon =
                  FaIcons[project.icon] || FaIcons.FaProjectDiagram

                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-700 hover:shadow-xl hover:border-green/30 hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-navy flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-green blur-2xl"></div>
                      </div>

                      <div className="relative z-10 w-16 h-16 rounded-xl bg-green/20 flex items-center justify-center text-green text-3xl">
                        <Icon />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <Badge variant="solidGreen">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-navy mb-3">
                        {project.title}
                      </h3>

                      <p className="text-navy-lighter leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-navy-lighter text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>

          <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your engineering vision to life with
            the same quality and precision.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-dark transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage