import { createClient, type Client } from '@libsql/client'

export interface ContactSubmissionRow {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface NewsletterSubscriberRow {
  id: string
  email: string
  locale: string
  created_at: string
}

export interface AffiliateClickStat {
  product_slug: string
  clicks: number
  last_clicked: string
}

let client: Client | null = null

/**
 * Lazily-created singleton Turso client. Only ever imported from
 * app/api/* route handlers (server-only) — never from a page or
 * client component, since TURSO_AUTH_TOKEN must not reach the browser.
 */
export function getTursoClient(): Client {
  if (client) return client

  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url || !authToken) {
    throw new Error('TURSO_DATABASE_URL / TURSO_AUTH_TOKEN are not set')
  }

  client = createClient({ url, authToken })
  return client
}

/**
 * Creates the tables this app needs if they don't already exist yet.
 * Cheap to call on every write (CREATE TABLE IF NOT EXISTS is a no-op
 * once the table is there) — avoids needing a separate migration step
 * for a schema this small.
 */
export async function ensureSchema(): Promise<void> {
  const db = getTursoClient()

  await db.batch(
    [
      `CREATE TABLE IF NOT EXISTS contact_submissions (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        locale TEXT NOT NULL DEFAULT 'nl',
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS affiliate_clicks (
        id TEXT PRIMARY KEY,
        product_slug TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS shop_products (
        id TEXT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        summary TEXT NOT NULL,
        description TEXT,
        price TEXT,
        image TEXT,
        gradient TEXT NOT NULL,
        tags TEXT,
        specs TEXT,
        tracklist TEXT,
        source_name TEXT NOT NULL,
        affiliate_url TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )`,
      `CREATE TABLE IF NOT EXISTS site_config (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )`,
    ],
    'write'
  )
}

export async function getContactSubmissions(): Promise<ContactSubmissionRow[]> {
  await ensureSchema()
  const db = getTursoClient()
  const result = await db.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 200')
  return result.rows as unknown as ContactSubmissionRow[]
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriberRow[]> {
  await ensureSchema()
  const db = getTursoClient()
  const result = await db.execute('SELECT * FROM newsletter_subscribers ORDER BY created_at DESC LIMIT 500')
  return result.rows as unknown as NewsletterSubscriberRow[]
}

export async function getAffiliateClickStats(): Promise<AffiliateClickStat[]> {
  await ensureSchema()
  const db = getTursoClient()
  const result = await db.execute(`
    SELECT product_slug, COUNT(*) as clicks, MAX(created_at) as last_clicked
    FROM affiliate_clicks
    GROUP BY product_slug
    ORDER BY clicks DESC
  `)
  return result.rows as unknown as AffiliateClickStat[]
}

export async function getCounts(): Promise<{
  products: number
  contacts: number
  subscribers: number
  clicks: number
}> {
  await ensureSchema()
  const db = getTursoClient()
  const [products, contacts, subscribers, clicks] = await db.batch(
    [
      'SELECT COUNT(*) as count FROM shop_products',
      'SELECT COUNT(*) as count FROM contact_submissions',
      'SELECT COUNT(*) as count FROM newsletter_subscribers',
      'SELECT COUNT(*) as count FROM affiliate_clicks',
    ],
    'read'
  )
  return {
    products: Number(products.rows[0]?.count ?? 0),
    contacts: Number(contacts.rows[0]?.count ?? 0),
    subscribers: Number(subscribers.rows[0]?.count ?? 0),
    clicks: Number(clicks.rows[0]?.count ?? 0),
  }
}

/**
 * Tiny key/value store for one-off site settings that don't warrant their
 * own table — currently just the manually-set "latest TikTok video" URL
 * (see lib/tiktok.ts), since there's no reliable way to auto-discover
 * that without TikTok's official, approval-gated API.
 */
export async function getSiteConfig(key: string): Promise<string | null> {
  await ensureSchema()
  const db = getTursoClient()
  const result = await db.execute({ sql: 'SELECT value FROM site_config WHERE key = ? LIMIT 1', args: [key] })
  const row = result.rows[0] as unknown as { value: string } | undefined
  return row?.value ?? null
}

export async function setSiteConfig(key: string, value: string): Promise<void> {
  await ensureSchema()
  const db = getTursoClient()
  await db.execute({
    sql: `INSERT INTO site_config (key, value, updated_at) VALUES (?, ?, ?)
          ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`,
    args: [key, value, new Date().toISOString()],
  })
}
