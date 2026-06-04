import siteData from '../data/siteData'

function Contact() {
  const page = siteData.pages.contact
  const studio = siteData.studio

  return (
    <>
      <section className="page-hero section"><div className="container narrow"><span className="eyebrow">{page.eyebrow}</span><h1>{page.heading}</h1><p className="lead">{page.description}</p></div></section>
      <section className="section page-content">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">{page.detailsEyebrow}</span><h2>{page.detailsHeading}</h2><p>{page.detailsDescription}</p>
            <a href={`mailto:${studio.email}`}><small>Email</small><strong>{studio.email}</strong></a>
            <a href={studio.whatsappLink} target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>{studio.whatsappLabel}</strong></a>
            <a href={studio.githubLink} target="_blank" rel="noreferrer"><small>GitHub</small><strong>{studio.githubLabel}</strong></a>
            <div className="social-row">{studio.socialLinks.map(link => <a href={link.url} key={link.label} target={link.url === '#' ? undefined : '_blank'} rel="noreferrer">{link.label}</a>)}</div>
          </div>
          <form className="inquiry-form" onSubmit={event => event.preventDefault()}>
            <div className="form-notice"><strong>Project inquiry form placeholder</strong><span>{page.formNotice}</span></div>
            <label>Name<input type="text" placeholder="Your name" /></label>
            <label>Email<input type="email" placeholder="you@business.com" /></label>
            <label>What do you need?<select defaultValue=""><option value="" disabled>Select a service</option>{siteData.services.map(service => <option key={service.title}>{service.title}</option>)}</select></label>
            <label>Project details<textarea rows="5" placeholder="A short summary of your goals, timeline, and requirements..." /></label>
            <button className="button button-primary" type="submit" disabled>Send Inquiry (Backend Required)</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
