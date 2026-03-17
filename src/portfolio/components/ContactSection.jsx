import { SectionHeading } from './SectionHeading'

export function ContactSection({ section, contact }) {
  return (
    <section id={section.id} className='pf-section pf-contact'>
      <SectionHeading label={section.label} heading={section.heading} centered />
      <p className='pf-contact__blurb'>{contact.blurb}</p>
      <a href={`mailto:${contact.email}`} className='pf-contact__email'>
        {contact.email} ↗
      </a>
      <div className='pf-contact__links'>
        {contact.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className='pf-btn pf-btn--secondary'
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
