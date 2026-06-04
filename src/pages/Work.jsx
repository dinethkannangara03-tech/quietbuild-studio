import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

function Work() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow"><span className="eyebrow">Selected work</span><h1>Digital experiences built with purpose.</h1><p className="lead">A collection of website and web-system concepts focused on clear design, mobile usability, and practical business goals.</p></div>
      </section>
      <section className="section page-content">
        <div className="container work-list">{projects.map(project => <ProjectCard key={project.slug} project={project} large />)}</div>
      </section>
    </>
  )
}

export default Work
