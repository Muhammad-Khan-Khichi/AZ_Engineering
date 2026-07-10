import * as FaIcons from 'react-icons/fa'
import { projects } from '../../data/projects'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ProjectCard = ({ project, index }) => {
  const { ref, isVisible } = useScrollAnimation()
  const Icon = FaIcons[project.icon] || FaIcons.FaProjectDiagram

  return (
    <div
      ref={ref}
      className={`bg-navy rounded-2xl p-8 transition-all duration-700 hover:bg-navy-light hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
<div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-xl bg-green/20 flex items-center justify-center text-green text-2xl">
          <Icon />
        </div>
        <Badge variant="solidGreen">{project.category}</Badge>
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-green blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-green blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block text-green font-semibold text-sm uppercase tracking-wider mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            A selection of our key engineering projects delivered with precision
            and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects