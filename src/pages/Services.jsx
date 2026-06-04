import ServiceCard from '../components/ServiceCard'
import siteData from '../data/siteData'

function Services() {
  const page = siteData.pages.services

  return (
    <>
      <section className="page-hero section"><div className="container narrow"><span className="eyebrow">{page.eyebrow}</span><h1>{page.heading}</h1><p className="lead">{page.description}</p></div></section>
      <section className="section page-content"><div className="container services-grid">{siteData.services.map(service => <ServiceCard key={service.title} service={service} />)}</div></section>
    </>
  )
}

export default Services
