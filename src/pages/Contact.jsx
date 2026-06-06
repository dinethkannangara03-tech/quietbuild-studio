import { useState } from 'react'
import siteData from '../data/siteData'
import supabase from '../lib/supabase'

function Contact() {
  const page = siteData.pages.contact
  const studio = siteData.studio

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()
    setStatusMessage(null)
    setErrorMessage(null)

    if (!name.trim() || !email.trim() || !service.trim() || !message.trim()) {
      setErrorMessage('Please fill in all fields.')
      return
    }

    setIsSubmitting(true)

    try {
      const { error } = await supabase.from('inquiries').insert([
        { name: name.trim(), email: email.trim(), service: service.trim(), message: message.trim() },
      ])

      if (error) {
        console.error('Supabase insert error:', error)
        setErrorMessage('Something went wrong. Please try again.')
      } else {
        setStatusMessage('Thanks — your inquiry was sent.')
        setName('')
        setEmail('')
        setService('')
        setMessage('')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <form className="inquiry-form" onSubmit={handleSubmit}>
            {statusMessage && <div className="form-notice"><strong>{statusMessage}</strong></div>}
            {errorMessage && <div className="form-notice"><strong>{errorMessage}</strong></div>}
            <label>Name<input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} /></label>
            <label>Email<input type="email" placeholder="you@business.com" value={email} onChange={e => setEmail(e.target.value)} /></label>
            <label>What do you need?<select value={service} onChange={e => setService(e.target.value)}><option value="" disabled>Select a service</option>{siteData.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}</select></label>
            <label>Project details<textarea rows="5" placeholder="A short summary of your goals, timeline, and requirements..." value={message} onChange={e => setMessage(e.target.value)} /></label>
            <button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
