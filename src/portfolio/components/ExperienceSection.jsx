import { SectionHeading } from './SectionHeading'

export function ExperienceSection({ section, experiences }) {
  return (
    <section id={section.id} className='pf-section'>
      <SectionHeading label={section.label} heading={section.heading} />
      <div className='pf-timeline'>
        {experiences.map((experience) => (
          <article className='pf-timeline__item' key={`${experience.company}-${experience.date}`}>
            <div className='pf-exp__header'>
              <div className='pf-exp__top'>
                <span className='pf-exp__company'>{experience.company}</span>
                <span className='pf-exp__date'>{experience.date}</span>
              </div>
              <div className='pf-exp__meta'>
                <span className='pf-exp__role'>{experience.role}</span>
                <span className='pf-exp__badge'>{experience.type}</span>
                <span className='pf-exp__location'>{experience.location}</span>
              </div>
            </div>
            <ul className='pf-exp__bullets'>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
