import { useState } from 'react'

function ProjectVisual({ project, compact = false }) {
  const [imageMissing, setImageMissing] = useState(false)

  return (
    <div className={`project-visual ${compact ? 'compact' : ''}`}>
      {!imageMissing ? (
        <img src={project.imagePath} alt={`${project.title} project screenshot`} onError={() => setImageMissing(true)} />
      ) : (
        <div className="image-fallback">
          <strong>Project image coming soon</strong>
          <span>Add the image at {project.imagePath}</span>
        </div>
      )}
    </div>
  )
}

export default ProjectVisual
