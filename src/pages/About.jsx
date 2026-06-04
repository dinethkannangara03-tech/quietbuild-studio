import { Link } from 'react-router-dom'
import { ArrowIcon, BoltIcon, DeviceIcon, ShieldIcon } from '../components/Icons'

function About() {
  return (
    <>
      <section className="page-hero section"><div className="container narrow"><span className="eyebrow">About the studio</span><h1>Quiet work. Clear thinking. Useful outcomes.</h1><p className="lead">QuietBuild Studio helps small businesses present themselves with more confidence through clean websites and focused web systems.</p></div></section>
      <section className="section page-content">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">The mission</span>
            <h2>Make professional digital work feel straightforward.</h2>
            <p>A good website should explain your business clearly, work well on a phone, and help visitors know what to do next. The goal is not to fill every inch of the screen. It is to build the right thing, with care.</p>
            <p>QuietBuild focuses on honest communication, thoughtful design, and practical systems. No inflated promises. No unnecessary complexity. Just a clear path from idea to launch.</p>
            <Link className="button button-primary" to="/contact">Start a conversation <ArrowIcon /></Link>
          </div>
          <div className="values-grid">
            <article><DeviceIcon /><h3>Mobile experience</h3><p>Layouts are shaped for small screens from the start.</p></article>
            <article><BoltIcon /><h3>Speed &amp; clarity</h3><p>Pages stay focused, lightweight, and easy to understand.</p></article>
            <article><ShieldIcon /><h3>Useful systems</h3><p>Features earn their place by solving a real problem.</p></article>
            <article><span className="value-number">03</span><h3>Simple process</h3><p>Share the goal, review a clean preview, then launch confidently.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
