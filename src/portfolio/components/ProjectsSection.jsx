import { SectionHeading } from './SectionHeading'

export function ProjectsSection({ section, projects }) {
  return (
    <section id={section.id} className='pf-section'>
      <SectionHeading label={section.label} heading={section.heading} />
      <div className='pf-projects'>
        {projects.map((project) => (
          <article className='pf-project' key={project.num}>
            <div className='pf-project__num'>{project.num}</div>
            <div className='pf-project__body'>
              <h3 className='pf-project__title'>{project.title}</h3>
              <p className='pf-project__desc'>{project.desc}</p>
              <div className='pf-project__tags'>
                {project.tags.map((tag) => (
                  <span className='pf-tag pf-tag--dim' key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className='pf-project__line' />
          </article>
        ))}
      </div>
    </section>
  )
}
