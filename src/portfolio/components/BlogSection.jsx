import { useMediumPosts } from '../hooks/useMediumPosts'
import { SectionHeading } from './SectionHeading'

function PostSkeleton() {
  return (
    <div className='pf-post pf-post--skeleton'>
      <div className='pf-post__meta'>
        <div className='pf-skeleton pf-skeleton--date' />
        <div className='pf-skeleton pf-skeleton--tag' />
      </div>
      <div className='pf-post__body'>
        <div className='pf-skeleton pf-skeleton--title' />
        <div className='pf-skeleton pf-skeleton--line' />
        <div className='pf-skeleton pf-skeleton--line pf-skeleton--short' />
      </div>
    </div>
  )
}

export function BlogSection({ section }) {
  const { posts, loading, error } = useMediumPosts()

  return (
    <section id={section.id} className='pf-section'>
      <SectionHeading label={section.label} heading={section.heading} />
      <div className='pf-blog'>
        {loading && (
          <>
            <PostSkeleton />
            <PostSkeleton />
          </>
        )}
        {error && <p className='pf-blog__empty'>{section.emptyState}</p>}
        {!loading && !error && posts.length === 0 && (
          <p className='pf-blog__empty'>{section.emptyState}</p>
        )}
        {!loading &&
          !error &&
          posts.map((post) => (
            <a
              key={post.href}
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
    </section>
  )
}
