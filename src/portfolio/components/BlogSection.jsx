import { SectionHeading } from './SectionHeading'

export function BlogSection({ section, posts }) {
  return (
    <section id={section.id} className='pf-section'>
      <SectionHeading label={section.label} heading={section.heading} />
      {posts.length === 0 ? (
        <p className='pf-blog__empty'>{section.emptyState}</p>
      ) : (
        <div className='pf-blog'>
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className='pf-post'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='pf-post__meta'>
                <span className='pf-post__date'>{post.date}</span>
                <div className='pf-post__tags'>
                  {post.tags.map((tag) => (
                    <span className='pf-tag pf-tag--dim' key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className='pf-post__body'>
                <h3 className='pf-post__title'>{post.title}</h3>
                <p className='pf-post__excerpt'>{post.excerpt}</p>
              </div>
              <span className='pf-post__cta'>{section.cta}</span>
              <div className='pf-post__line' />
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
