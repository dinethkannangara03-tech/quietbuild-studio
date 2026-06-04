function ProjectVisual({ project, compact = false }) {
  return (
    <div className={`project-visual project-${project.slug} ${compact ? 'compact' : ''}`} aria-label={`${project.title} screenshot placeholder`}>
      <div className="visual-browser">
        <div className="visual-top"><span /><span /><span /><b /></div>
        <div className="visual-content">
          <div className="visual-sidebar"><i /><i /><i /><i /></div>
          <div className="visual-main">
            <div className="visual-title" />
            <div className="visual-line" />
            <div className="visual-grid"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="placeholder-tag">Screenshot placeholder</span>
    </div>
  )
}

export default ProjectVisual
