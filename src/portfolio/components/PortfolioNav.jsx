export function PortfolioNav({ items, onNavigate, localeSwitch }) {
  const handleClick = (event, item) => {
    event.preventDefault()
    onNavigate(item.id)
  }

  return (
    <nav className='pf-nav'>
      <div className='pf-nav__logo'>M.A.Y_</div>
      <div className='pf-nav__actions'>
        <div className='pf-nav__links'>
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(event) => handleClick(event, item)}>
              {item.label}
            </a>
          ))}
        </div>
        <div className='pf-nav__locale-toggle' aria-label='Language switcher'>
          {localeSwitch.options.map((option) => {
            const isActive = option.locale === localeSwitch.active

            return (
              <a
                key={option.locale}
                href={option.href}
                className={`pf-nav__locale-option ${isActive ? 'pf-nav__locale-option--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {option.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
