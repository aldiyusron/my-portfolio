import { SectionHeading } from './SectionHeading'

export function SkillsSection({ section, skillGroups }) {
  return (
    <section id={section.id} className='pf-section'>
      <SectionHeading label={section.label} heading={section.heading} />
      <div className='pf-skills'>
        {skillGroups.map((group) => (
          <div className='pf-skill-group' key={group.title}>
            <div className='pf-skill-group__title'>{group.title}</div>
            <div className='pf-skill-group__tags'>
              {group.skills.map((skill) => (
                <span className='pf-tag' key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
