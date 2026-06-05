import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContentIcon from '../components/ContentIcon'
import ProjectCard from '../components/ProjectCard'
import { ArrowIcon, CheckIcon } from '../components/Icons'
import siteData from '../data/siteData'

function HeroVisual() {
  const [imageMissing, setImageMissing] = useState(false)

  return (
    <div className="hero-visual" aria-label="Website and client portal mockups">
      <div className="hero-glow" />
      <div className="laptop">
        <div className="laptop-screen">
          {!imageMissing ? (
            <img src={siteData.hero.heroImage} alt="Featured website screenshot" onError={() => setImageMissing(true)} />
          ) : (
            <div className="hero-image-fallback"><strong>Hero screenshot coming soon</strong><span>Add the image at {siteData.hero.heroImage}</span></div>
          )}
        </div>
        <div className="laptop-base" />
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <img className="phone-screen-image" src={siteData.hero.phoneImage} alt="Client portal preview" />
      </div>
      {siteData.hero.featureCards.map((feature, index) => (
        <div className={`float-card float-${['one', 'two', 'three'][index]}`} key={feature.title}>
          <ContentIcon name={feature.icon} /><span><b>{feature.title}</b><small>{feature.description}</small></span>
        </div>
      ))}
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="eyebrow">{siteData.hero.eyebrow}</span>
            <h1>{siteData.hero.headline} <span>{siteData.hero.highlightedHeadline}</span></h1>
            <p className="lead">{siteData.hero.description}</p>
            <div className="button-row">
              <Link className="button button-primary" to="/work">View Work <ArrowIcon /></Link>
              <Link className="button button-ghost" to="/contact">Start a Project</Link>
            </div>
            <div className="hero-proof">{siteData.hero.proofItems.map(item => <span key={item}><CheckIcon /> {item}</span>)}</div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          {siteData.trustItems.map(item => <div key={item.title}><ContentIcon name={item.icon} /><span><strong>{item.title}</strong><small>{item.description}</small></span></div>)}
        </div>
      </section>

      <section className="section selected-work">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">A few recent builds</span><h2>Selected Projects</h2></div>
            <Link className="text-link" to="/work">View All Work <ArrowIcon /></Link>
          </div>
          <div className="project-grid">{siteData.projects.slice(0, 3).map(project => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="center-heading"><span className="eyebrow">{siteData.process.eyebrow}</span><h2>{siteData.process.heading}</h2></div>
          <div className="process-grid">
            {siteData.process.steps.map(step => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <span className="eyebrow">{siteData.callToAction.eyebrow}</span>
          <h2>{siteData.callToAction.heading}</h2>
          <p>{siteData.callToAction.description}</p>
          <div className="button-row"><Link className="button button-primary" to="/contact">Start a Project <ArrowIcon /></Link><Link className="button button-ghost" to="/contact">Contact Me</Link></div>
        </div>
      </section>
    </>
  )
}

export default Home
