function Contact() {
  return (
    <>
      <section className="page-hero section"><div className="container narrow"><span className="eyebrow">Start a project</span><h1>Tell me what you want to build.</h1><p className="lead">Share your goal, timeline, and the kind of support you need. I’ll help turn it into a clear next step.</p></div></section>
      <section className="section page-content">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">Contact details</span><h2>Let’s make your business look the part.</h2><p>Use the details below as placeholders until your real contact links are ready.</p>
            <a href="mailto:hello@quietbuildstudio.com"><small>Email</small><strong>hello@quietbuildstudio.com</strong></a>
            <a href="#" aria-label="WhatsApp placeholder"><small>WhatsApp</small><strong>+94 00 000 0000</strong></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><small>GitHub</small><strong>github.com/quietbuildstudio</strong></a>
            <div className="social-row"><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Behance</a></div>
          </div>
          <form className="inquiry-form" onSubmit={event => event.preventDefault()}>
            <div className="form-notice"><strong>Project inquiry form placeholder</strong><span>This form will become functional when a backend is connected.</span></div>
            <label>Name<input type="text" placeholder="Your name" /></label>
            <label>Email<input type="email" placeholder="you@business.com" /></label>
            <label>What do you need?<select defaultValue=""><option value="" disabled>Select a service</option><option>Business Website</option><option>Portfolio Website</option><option>Landing Page</option><option>Client Portal</option><option>Simple Dashboard</option></select></label>
            <label>Project details<textarea rows="5" placeholder="A short summary of your goals, timeline, and requirements..." /></label>
            <button className="button button-primary" type="submit" disabled>Send Inquiry (Backend Required)</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
