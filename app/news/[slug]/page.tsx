import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getCoverImage, getPostBySlug, slugifyTag } from '@/lib/posts'
import ArticleListenButton from '@/components/ArticleListenButton'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      // Social crawlers fetch this as a URL, so a data-URI placeholder
      // wouldn't render there — only use a real coverImage if present.
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-metamask-purple hover:text-metamask-orange transition-colors mb-10"
        >
          &larr; Terug naar Nieuws
        </Link>

        <header className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/news/tag/${slugifyTag(tag)}`}
                  className="px-2.5 py-1 rounded-full bg-metamask-gray-50 border border-metamask-gray-100 text-[10px] font-semibold uppercase tracking-wider text-metamask-purple hover:bg-metamask-purple hover:text-white transition-colors"
                >
                  {tag}
                </Link>
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
              Gebaseerd op berichtgeving van{' '}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-metamask-orange hover:underline"
              >
                {post.sourceName || 'de oorspronkelijke bron'} &rarr;
              </a>{' '}
              &mdash; vereenvoudigd &amp; uitgelegd door VAIIYA.
            </p>
          )}
        </header>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getCoverImage(post)}
          alt={post.title}
          className="w-full rounded-3xl mb-10 object-cover"
        />

        {post.youtubeId && (
          <div className="aspect-video w-full mb-10 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${post.youtubeId}`}
              title={post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}

        <ArticleListenButton title={post.title} contentSelector="#article-body" locale="nl" />

        <div
          id="article-body"
          className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-metamask-purple prose-a:text-metamask-orange prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  )
}
