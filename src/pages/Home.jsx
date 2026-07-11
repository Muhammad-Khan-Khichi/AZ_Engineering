import SEO from '../components/ui/SEO'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Leadership from '../components/sections/Leadership'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import MissionVision from '../components/sections/MissionVision'
import Equipment from '../components/sections/Equipment'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <SEO
        title="A & Z Engineering | Mechanical, Electrical & Textile Machinery – Lahore"
        description="A & Z Engineering, Lahore since 1999 mechanical, electrical & textile machinery design, fabrication, installation, automation & maintenance services."
        path="/"
      />
      <Hero />
      <About />
      <Leadership />
      <Services />
      <Projects />
      <MissionVision />
      <Equipment />
      <Contact />
    </>
  )
}

export default Home