import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'
import ProjectVisual from './ProjectVisual'

function ProjectCard({ project, large = false }) {
  return (
    <article className={`project-card ${large ? 'project-card-large' : ''}`}>
      <ProjectVisual project={project} compact={!large} />
      <div className="project-copy">
        {large && <span className="project-type">{project.type}</span>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-actions">
          <Link className="text-link" to="/contact">View Project <ArrowIcon /></Link>
          {large && <a className="button button-ghost button-small" href={project.liveLink} target={project.liveLink === '#' ? undefined : '_blank'} rel="noreferrer">Live Demo</a>}
          {large && <span className="case-note">Case study coming soon</span>}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
