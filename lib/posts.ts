import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/news')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
  youtubeId?: string
  tags?: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}

function getMarkdownFilenames(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md') && file !== 'README.md')
}

export function getAllPosts(): PostMeta[] {
  const filenames = getMarkdownFilenames()

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage,
      youtubeId: data.youtubeId,
      tags: data.tags || [],
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllSlugs(): string[] {
  return getMarkdownFilenames().map((filename) => filename.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const contentHtml = marked.parse(content, { async: false }) as string

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage,
    youtubeId: data.youtubeId,
    tags: data.tags || [],
    contentHtml,
  }
}
