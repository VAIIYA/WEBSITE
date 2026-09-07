import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugsEn, getCoverImage, getPostBySlugEn, slugifyTag } from '@/lib/posts'
import ArticleListenButton from '@/components/ArticleListenButton'

export function generateStaticParams() {
  const slugs = getAllSlugsEn()
  // Static export errors out if a dynamic route resolves zero params —
  // there are no English article translations yet, so fall back to one
  // placeholder that 404s, until the first content/news-en/*.md lands.
  if (slugs.length === 0) return [{ slug: '_none' }]
  return slugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlugEn(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPostPageEn({ params }: { params: { slug: string } }) {
  const post = getPostBySlugEn(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/en/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-metamask-purple hover:text-metamask-orange transition-colors mb-10"
        >
          &larr; Back To News
        </Link>

        <header className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-metamask-gray-50 border border-metamask-gray-100 text-[10px] font-semibold uppercase tracking-wider text-metamask-purple"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>
          {post.date && (
            <p className="text-sm text-gray-500 font-medium">{formatDate(post.date)}</p>
          )}
          {post.sourceUrl && (
            <p className="text-sm text-gray-500 mt-3 pt-3 border-t border-metamask-gray-100">
              Based on reporting from{' '}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-metamask-orange hover:underline"
              >
                {post.sourceName || 'the original source'} &rarr;
              </a>{' '}
              &mdash; simplified &amp; explained by VAIIYA.
            </p>
          )}
        </header>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getCoverImage(post)}
          alt={post.title}
          className="w-full rounded-3xl mb-10 object-cover"
        />

        <ArticleListenButton title={post.title} contentSelector="#article-body" locale="en" />

        <div
          id="article-body"
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-metamask-orange"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-14 pt-8 border-t border-metamask-gray-100">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news/tag/${slugifyTag(tag)}`}
                className="px-3 py-1.5 rounded-full bg-metamask-gray-50 border border-metamask-gray-100 text-xs font-semibold text-metamask-purple hover:bg-metamask-purple hover:text-white transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </article>
    </main>
  )
}
