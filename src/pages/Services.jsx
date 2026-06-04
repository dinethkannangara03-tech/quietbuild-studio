import ServiceCard from '../components/ServiceCard'
import { DeviceIcon, LayoutIcon, ShieldIcon, WindowIcon } from '../components/Icons'

const services = [
  { title: 'Business Websites', description: 'Clear, professional websites that explain what you do and make it easy to take the next step.', suitable: 'Coaches, gyms, tutors, agencies, and service businesses', icon: <WindowIcon /> },
  { title: 'Portfolio Websites', description: 'Focused portfolios that present your work, thinking, and value with confidence.', suitable: 'Freelancers, creatives, and small studios', icon: <LayoutIcon /> },
  { title: 'Landing Pages', description: 'Single-purpose pages shaped around one offer, launch, or campaign.', suitable: 'New offers, campaigns, and lead generation', icon: <DeviceIcon /> },
  { title: 'Client Portals', description: 'Simple private spaces where clients can find updates, files, and next steps.', suitable: 'Service businesses with repeatable client workflows', icon: <ShieldIcon /> },
  { title: 'Login Systems', description: 'Straightforward login experiences for small protected tools and portals.', suitable: 'Simple member areas and internal tools', icon: <ShieldIcon /> },
  { title: 'Simple Dashboards', description: 'Useful interfaces that turn a small set of data into clear actions.', suitable: 'Trackers, progress views, and focused admin tools', icon: <LayoutIcon /> },
]

function Services() {
  return (
    <>
      <section className="page-hero section"><div className="container narrow"><span className="eyebrow">Services</span><h1>Practical digital work, built around your goal.</h1><p className="lead">Focused websites and simple systems for businesses that need to look professional and work smoothly.</p></div></section>
      <section className="section page-content"><div className="container services-grid">{services.map(service => <ServiceCard key={service.title} service={service} />)}</div></section>
    </>
  )
}

export default Services
