export function PortfolioFooter({ footer }) {
  return (
    <footer className='pf-footer'>
      <span>{footer.copyright}</span>
      <span className='pf-footer__sep'>·</span>
      <span>{footer.location}</span>
      <span className='pf-footer__sep'>·</span>
      <span>{footer.tech}</span>
    </footer>
  )
}
