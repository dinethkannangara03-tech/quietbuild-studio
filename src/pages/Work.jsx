import ProjectCard from '../components/ProjectCard'
import siteData from '../data/siteData'

function Work() {
  const page = siteData.pages.work

  return (
    <>
      <section className="page-hero section">
        <div className="container narrow"><span className="eyebrow">{page.eyebrow}</span><h1>{page.heading}</h1><p className="lead">{page.description}</p></div>
      </section>
      <section className="section page-content">
        <div className="container work-list">{siteData.projects.map(project => <ProjectCard key={project.slug} project={project} large />)}</div>
      </section>
    </>
  )
}

export default Work
