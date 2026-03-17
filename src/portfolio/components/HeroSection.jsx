export function HeroSection({ hero, cursorOn, displayText, onNavigate }) {
  const handleViewExperience = (event) => {
    event.preventDefault()
    onNavigate(hero.secondaryCta.sectionId)
  }

  return (
    <section id='about' className='pf-hero'>
      <div className='pf-hero__tag'>{hero.tag}</div>
      <h1 className='pf-hero__name'>
        {hero.firstName}
        <br />
        {hero.lastName}
      </h1>
      <div className='pf-hero__title'>
        <span>{displayText}</span>
        <span className={`pf-cursor ${cursorOn ? 'pf-cursor--on' : ''}`} />
      </div>
      <p className='pf-hero__summary'>{hero.summary}</p>
      <div className='pf-hero__cta'>
        <a href={hero.primaryCta.href} className='pf-btn pf-btn--primary'>
          {hero.primaryCta.label}
        </a>
        <a
          href={hero.secondaryCta.href}
          onClick={handleViewExperience}
          className='pf-btn pf-btn--secondary'
        >
          {hero.secondaryCta.label}
        </a>
      </div>
      <div className='pf-hero__stats'>
        {hero.stats.map((stat, index) => (
          <Stat key={stat.label} stat={stat} showDivider={index < hero.stats.length - 1} />
        ))}
      </div>
    </section>
  )
}

function Stat({ stat, showDivider }) {
  return (
    <>
      <div className='pf-stat'>
        <span className='pf-stat__num'>{stat.value}</span>
        <span className='pf-stat__label'>{stat.label}</span>
      </div>
      {showDivider ? <div className='pf-stat__divider' /> : null}
    </>
  )
}
