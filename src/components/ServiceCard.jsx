import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <div className="suitable"><strong>Suitable for</strong><span>{service.suitable}</span></div>
      <Link className="text-link" to="/contact">Discuss your project <ArrowIcon /></Link>
    </article>
  )
}

export default ServiceCard
