import { Link } from 'react-router-dom'
import ContentIcon from '../components/ContentIcon'
import { ArrowIcon } from '../components/Icons'
import siteData from '../data/siteData'

function About() {
  const page = siteData.pages.about

  return (
    <>
      <section className="page-hero section"><div className="container narrow"><span className="eyebrow">{page.eyebrow}</span><h1>{page.heading}</h1><p className="lead">{page.description}</p></div></section>
      <section className="section page-content">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">{page.missionEyebrow}</span>
            <h2>{page.missionHeading}</h2>
            {page.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <Link className="button button-primary" to="/contact">Start a conversation <ArrowIcon /></Link>
          </div>
          <div className="values-grid">
            {page.values.map((value, index) => (
              <article key={value.title}>
                {value.icon === 'number' ? <span className="value-number">{String(index + 1).padStart(2, '0')}</span> : <ContentIcon name={value.icon} />}
                <h3>{value.title}</h3><p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
