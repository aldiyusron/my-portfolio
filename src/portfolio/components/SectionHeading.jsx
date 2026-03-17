export function SectionHeading({ label, heading, centered = false }) {
  const labelClassName = centered ? 'pf-label pf-label--center' : 'pf-label'

  return (
    <>
      <div className={labelClassName}>{label}</div>
      <h2 className='pf-heading'>{heading}</h2>
    </>
  )
}
