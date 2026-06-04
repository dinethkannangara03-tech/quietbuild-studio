import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { ArrowIcon, BoltIcon, CheckIcon, DeviceIcon, ShieldIcon } from '../components/Icons'
import { projects } from '../data'

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Website and client portal mockups">
      <div className="hero-glow" />
      <div className="laptop">
        <div className="laptop-screen">
          <div className="mock-nav"><span>FORGE<span>FIT</span></span><i /><i /><b>Join now</b></div>
          <div className="mock-hero">
            <small>ONLINE COACHING</small>
            <strong>BUILD<br /><em>STRONGER.</em></strong>
            <p>Training built around your real life.</p>
            <b>Start training →</b>
          </div>
          <div className="mock-stats"><span><b>120+</b> Plans built</span><span><b>4.9</b> Rating</span><span><b>24/7</b> Access</span></div>
        </div>
        <div className="laptop-base" />
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <small>Good morning</small>
        <strong>Your portal</strong>
        <div className="portal-card"><span>Project progress</span><b>78%</b><i /></div>
        <div className="portal-task"><i>✓</i><span><b>Homepage review</b><small>Completed</small></span></div>
        <div className="portal-task"><i>2</i><span><b>Content upload</b><small>In progress</small></span></div>
      </div>
      <div className="float-card float-one"><DeviceIcon /><span><b>Mobile First</b><small>Built for every screen</small></span></div>
      <div className="float-card float-two"><BoltIcon /><span><b>Fast Loading</b><small>Performance focused</small></span></div>
      <div className="float-card float-three"><ShieldIcon /><span><b>Simple Client Portals</b><small>Everything in one place</small></span></div>
    </div>
  )
}

function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Websites &amp; web systems that drive results.</span>
            <h1>Websites that make small businesses <span>look bigger.</span></h1>
            <p className="lead">QuietBuild Studio creates clean, mobile-friendly websites and simple web systems for coaches, agencies, gyms, tutors, and service businesses.</p>
            <div className="button-row">
              <Link className="button button-primary" to="/work">View Work <ArrowIcon /></Link>
              <Link className="button button-ghost" to="/contact">Start a Project</Link>
            </div>
            <div className="hero-proof"><span><CheckIcon /> Clean design</span><span><CheckIcon /> Mobile friendly</span><span><CheckIcon /> Useful systems</span></div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><DeviceIcon /><span><strong>Responsive Design</strong><small>Clear on every screen.</small></span></div>
          <div><BoltIcon /><span><strong>Fast &amp; Optimized</strong><small>Built to feel effortless.</small></span></div>
          <div><ShieldIcon /><span><strong>Clean &amp; Reliable</strong><small>Simple, stable, and useful.</small></span></div>
        </div>
      </section>

      <section className="section selected-work">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">A few recent builds</span><h2>Selected Projects</h2></div>
            <Link className="text-link" to="/work">View All Work <ArrowIcon /></Link>
          </div>
          <div className="project-grid">{projects.slice(0, 3).map(project => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="center-heading"><span className="eyebrow">How it works</span><h2>Simple process. Strong results.</h2></div>
          <div className="process-grid">
            <article><span>01</span><h3>Tell me what you need</h3><p>You share your ideas, goals, and requirements.</p></article>
            <article><span>02</span><h3>I build a clean preview</h3><p>I create a modern, responsive preview for your feedback.</p></article>
            <article><span>03</span><h3>You review and launch</h3><p>You review, approve, and I help you launch with confidence.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <span className="eyebrow">Ready when you are</span>
          <h2>Need a website that looks professional?</h2>
          <p>Let’s build something clean, modern, and useful.</p>
          <div className="button-row"><Link className="button button-primary" to="/contact">Start a Project <ArrowIcon /></Link><Link className="button button-ghost" to="/contact">Contact Me</Link></div>
        </div>
      </section>
    </>
  )
}

export default Home
