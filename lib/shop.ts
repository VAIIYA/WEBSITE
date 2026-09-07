import { randomUUID } from 'crypto'
import { getTursoClient, ensureSchema } from '@/lib/turso'
import type { ProductCategory } from '@/lib/shop-categories'

export type { ProductCategory }

export interface ShopProduct {
  id: string
  slug: string
  name: string
  category: ProductCategory
  /** Short summary shown on the card and near the top of the detail page */
  summary: string
  /** Optional long-form description shown further down the detail page */
  description?: string
  /** Optional display price, e.g. "€ 19,99" — purely informational, no checkout */
  price?: string
  /** Key/value product specifications, e.g. { Auteur: 'Timo Boezeman' } */
  specs?: Record<string, string>
  /** Product image URL (hosted externally — nothing gets uploaded to this repo) */
  image?: string
  /** Fallback gradient used when no image is provided */
  gradient: string
  tags?: string[]
  /** Name of the shop this product links out to, e.g. "Bol.com" */
  sourceName: string
  /** External product page this listing sends visitors to — always required:
   *  every product here is an affiliate link so VAIIYA never holds stock.
   *  Always carries rel="nofollow sponsored" on the outbound link. */
  affiliateUrl: string
  tracklist?: string[]
}

/**
 * The original hand-curated catalog. Used only as a one-time seed: the
 * first time the shop_products table is read and it's empty, these rows
 * get inserted so the live catalog isn't blank on the first deploy after
 * this migration to Turso. After that, the admin panel (/admin/products)
 * is the source of truth.
 */
const SEED_PRODUCTS: Omit<ShopProduct, 'id'>[] = [
  {
    slug: 'emilie-ogden-10-000',
    name: 'Emilie & Ogden - 10 000',
    category: 'CD',
    summary: '10 000 is een album van het Canadese folkduo Emilie and Ogden, uitgebracht in 2015 op CD.',
    specs: { EAN: '680341450025', Artiest: 'Emilie & Ogden', Uitvoering: 'CD' },
    gradient: 'from-rose-400 to-purple-600',
    tags: ['CD', 'Emilie & Ogden'],
    sourceName: 'Pop-eye.nl',
    affiliateUrl: 'https://pop-eye.nl/product/emilie-ogden-10-000-680341450025/',
    tracklist: ['Blame', 'Ten Thousand', 'Closer', 'White Lies', 'Nothing New', 'Babel', 'Long Gone', 'Go Home', 'What Happened', 'Hold Me Down', 'Dream'],
  },
  {
    slug: 'ai-aan-het-werk',
    name: 'AI aan het werk',
    category: 'Boek',
    summary: 'Managementboek van Timo Boezeman met een praktische aanpak voor organisaties die AI strategisch willen implementeren — inclusief het AI-Transformatiecanvas, praktijkvoorbeelden en actieplannen.',
    specs: { Auteur: 'Timo Boezeman', Uitgever: 'Van Duuren Media', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789463564120', "Aantal pagina's": '258', Verschijningsdatum: '28 augustus 2025' },
    image: 'https://media.s-bol.com/o4DP1oQq8w4j/MwZ1k1P/545x840.jpg',
    gradient: 'from-slate-700 to-slate-900',
    tags: ['Boek', 'AI', 'Management'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/ai-aan-het-werk/9300000233701860/',
  },
  {
    slug: 'informatieautonomie',
    name: 'Informatieautonomie',
    category: 'Boek',
    summary: 'Martijn Aslander onderzoekt waarom digitale projecten mislukken en organisaties vastlopen in vendor lock-in — over de ontbrekende voorwaarde voor datasoevereiniteit in een tijdperk van AI.',
    specs: { Auteur: 'Martijn Aslander', Uitgever: 'Van Duuren Media', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789463564526', "Aantal pagina's": '176', Verschijningsdatum: '26 mei 2026' },
    image: 'https://media.s-bol.com/35k8Jg9l8Dxr/zK3OV7r/783x1200.jpg',
    gradient: 'from-indigo-700 to-slate-900',
    tags: ['Boek', 'AI', 'Management'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/informatieautonomie/9300000271007560/',
  },
  {
    slug: 'this-is-not-ai',
    name: 'This is not AI',
    category: 'Boek',
    summary: 'Sanne Cornelissen leert je AI slim gebruiken zonder zelf te stoppen met nadenken — kritisch denkvermogen als concurrentievoordeel nu AI de standaard wordt.',
    specs: { Auteur: 'Sanne Cornelissen', Uitgever: 'Spectrum', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789000404582', "Aantal pagina's": '240', Verschijningsdatum: '30 april 2026' },
    image: 'https://media.s-bol.com/vA8PVzX2ym5m/ZVW5y55/781x1200.jpg',
    gradient: 'from-amber-500 to-orange-700',
    tags: ['Boek', 'AI', 'Persoonlijke ontwikkeling'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/this-is-not-ai/9300000268499179/',
  },
  {
    slug: 'slimmer-werken-met-chatgpt-copilot-en-gemini',
    name: 'Slimmer werken met ChatGPT, Copilot en Gemini',
    category: 'Boek',
    summary: 'Remy Gieling en Job van den Berg laten zien hoe je met drie grote AI-tools efficiënter werkt — prompts schrijven, taken automatiseren, content maken en data analyseren, met concrete voorbeelden voor beginners en gevorderden.',
    specs: { Auteurs: 'Remy Gieling, Job van den Berg', Uitgever: 'Haystack', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789461266262', "Aantal pagina's": '160', Verschijningsdatum: '27 september 2024' },
    image: 'https://media.s-bol.com/0rzrXV9ookR7/73WW18Q/550x780.jpg',
    gradient: 'from-emerald-600 to-cyan-700',
    tags: ['Boek', 'AI', 'Productiviteit'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/slimmer-werken-met-chatgpt-copilot-en-gemini/9300000184307274/',
  },
  {
    slug: 'van-iq-naar-ai',
    name: 'Van IQ naar AI',
    category: 'Boek',
    summary: 'Thomas Moerland legt uit hoe AI echt werkt en wat dat zegt over onszelf — een toegankelijke duik in de parallellen tussen menselijke en kunstmatige intelligentie.',
    specs: { Auteur: 'Thomas Moerland', Uitgever: 'Atlas Contact', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789045051963', "Aantal pagina's": '272', Verschijningsdatum: '9 oktober 2025' },
    image: 'https://media.s-bol.com/qBo3RqO85OYD/Y6qzNVY/769x1200.jpg',
    gradient: 'from-blue-700 to-violet-800',
    tags: ['Boek', 'AI', 'Wetenschap'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/van-iq-naar-ai/9300000234225412/',
  },
  {
    slug: 'empire-of-ai',
    name: 'Empire of AI',
    category: 'Boek',
    summary: 'Karen Hao onderzoekt in deze bekroonde longread de snelle opmars van OpenAI — de technologische, ecologische en menselijke kosten achter de ontwikkeling van geavanceerde AI, inclusief het ontslag en terugkeer van Sam Altman.',
    specs: { Auteur: 'Karen Hao', Uitgever: 'Allen Lane / Penguin Random House', Taal: 'Engels', Uitvoering: 'Paperback', ISBN: '9798217060481', "Aantal pagina's": '496', Verschijningsdatum: '20 mei 2025' },
    image: 'https://media.s-bol.com/0N8zNlXRAOYy/wpvBVnr/550x835.jpg',
    gradient: 'from-red-700 to-slate-900',
    tags: ['Boek', 'AI', 'Journalistiek'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/empire-of-ai/9300000223420155/',
  },
  {
    slug: 'claude-ai-haal-meer-uit-chat-cowork-code',
    name: 'Claude AI - Haal meer uit Chat, Cowork & Code',
    category: 'Boek',
    summary: 'Leon Tindemans leert je Claude, de AI-assistent van Anthropic, inzetten als digitale collega — van prompten en contentcreatie tot documentanalyse, onderzoek en programmeren, zonder technische voorkennis.',
    specs: { Auteur: 'Leon Tindemans', Uitgever: 'TTM Communicatie', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789082775631', "Aantal pagina's": '458', Verschijningsdatum: '1 juli 2026' },
    image: 'https://media.s-bol.com/YgQpZD1zPNgM/jZQ156B/845x1200.jpg',
    gradient: 'from-orange-500 to-rose-600',
    tags: ['Boek', 'AI', 'Claude'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/claude-ai-haal-meer-uit-chat-cowork-code/9300000330860049/',
  },
  {
    slug: 'the-reverse-centaurs-guide-to-life-after-ai',
    name: "The Reverse Centaur's Guide to Life After AI",
    category: 'Boek',
    summary: 'Cory Doctorow levert kritisch tegengeluid op de AI-hype — geen anti-AI-pamflet, maar een nuchtere blik op opgeblazen waarderingen, onrealistische beloftes en de impact van AI op werkomstandigheden.',
    specs: { Auteur: 'Cory Doctorow', Uitgever: 'Verso Books', Taal: 'Engels', Uitvoering: 'Paperback', ISBN: '9780374621568', "Aantal pagina's": '240', Verschijningsdatum: '20 juli 2026' },
    image: 'https://media.s-bol.com/m3xpnyN6LARR/1r1JP1Z/546x840.jpg',
    gradient: 'from-lime-600 to-emerald-800',
    tags: ['Boek', 'AI', 'Maatschappij'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/the-reverse-centaur-s-guide-to-life-after-ai/9300000254147012/',
  },
  {
    slug: 'me-myself-ai',
    name: 'Me, myself & AI',
    category: 'Boek',
    summary: 'Sanne Cornelissen combineert gedragspsychologie met AI-tools in 3 stappen naar slimmer en leuker werken — praktisch, zonder technische voorkennis nodig.',
    specs: { Auteur: 'Sanne Cornelissen', Uitgever: 'Spectrum', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789000399475', "Aantal pagina's": '208', Verschijningsdatum: '14 mei 2025' },
    image: 'https://media.s-bol.com/JMVRwQEoj7WJ/n5A97W5/781x1200.jpg',
    gradient: 'from-pink-500 to-fuchsia-700',
    tags: ['Boek', 'AI', 'Persoonlijke ontwikkeling'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/me-myself-ai/9300000227606658/',
  },
  {
    slug: '1001-prompts-laat-ai-jouw-werk-doen',
    name: '1001 Prompts: Laat AI jouw werk doen',
    category: 'Boek',
    summary: 'Leon Tindemans biedt 1001 kant-en-klare AI-prompts voor op de werkvloer — concrete voorbeelden voor ChatGPT, Gemini, Copilot en meer, van communicatie tot presentaties, zonder lange theorie.',
    specs: { Auteur: 'Leon Tindemans', Uitgever: 'TTM Communicatie', Taal: 'Nederlands', Uitvoering: 'Paperback', ISBN: '9789082775624', "Aantal pagina's": '258', Verschijningsdatum: '26 september 2025' },
    image: 'https://media.s-bol.com/BZyw3mvN7KoW/66VlpNV/550x781.jpg',
    gradient: 'from-cyan-600 to-blue-800',
    tags: ['Boek', 'AI', 'Prompts'],
    sourceName: 'Bol.com',
    affiliateUrl: 'https://www.bol.com/nl/nl/p/1001-prompts-laat-ai-jouw-werk-doen/9300000241786467/',
  },
]

// -- row <-> ShopProduct mapping -------------------------------------------

type Row = {
  id: string
  slug: string
  name: string
  category: string
  summary: string
  description: string | null
  price: string | null
  image: string | null
  gradient: string
  tags: string | null
  specs: string | null
  tracklist: string | null
  source_name: string
  affiliate_url: string
}

function rowToProduct(row: Row): ShopProduct {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category as ProductCategory,
    summary: row.summary,
    description: row.description ?? undefined,
    price: row.price ?? undefined,
    image: row.image ?? undefined,
    gradient: row.gradient,
    tags: row.tags ? JSON.parse(row.tags) : undefined,
    specs: row.specs ? JSON.parse(row.specs) : undefined,
    tracklist: row.tracklist ? JSON.parse(row.tracklist) : undefined,
    sourceName: row.source_name,
    affiliateUrl: row.affiliate_url,
  }
}

let seeded = false

async function ensureSeeded(): Promise<void> {
  if (seeded) return
  await ensureSchema()
  const db = getTursoClient()

  const result = await db.execute('SELECT COUNT(*) as count FROM shop_products')
  const count = Number(result.rows[0]?.count ?? 0)

  if (count === 0) {
    const now = new Date().toISOString()
    await db.batch(
      SEED_PRODUCTS.map((p) => ({
        sql: `INSERT INTO shop_products
          (id, slug, name, category, summary, description, price, image, gradient, tags, specs, tracklist, source_name, affiliate_url, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          randomUUID(),
          p.slug,
          p.name,
          p.category,
          p.summary,
          p.description ?? null,
          p.price ?? null,
          p.image ?? null,
          p.gradient,
          p.tags ? JSON.stringify(p.tags) : null,
          p.specs ? JSON.stringify(p.specs) : null,
          p.tracklist ? JSON.stringify(p.tracklist) : null,
          p.sourceName,
          p.affiliateUrl,
          now,
          now,
        ],
      })),
      'write'
    )
  }

  seeded = true
}

// -- public read API (used by the storefront pages) -------------------------

export async function getAllProducts(): Promise<ShopProduct[]> {
  await ensureSeeded()
  const db = getTursoClient()
  const result = await db.execute('SELECT * FROM shop_products ORDER BY created_at DESC')
  return result.rows.map((r) => rowToProduct(r as unknown as Row))
}

export async function getAllProductSlugs(): Promise<string[]> {
  const products = await getAllProducts()
  return products.map((p) => p.slug)
}

export async function getProductBySlug(slug: string): Promise<ShopProduct | null> {
  await ensureSeeded()
  const db = getTursoClient()
  const result = await db.execute({
    sql: 'SELECT * FROM shop_products WHERE slug = ? LIMIT 1',
    args: [slug],
  })
  const row = result.rows[0]
  return row ? rowToProduct(row as unknown as Row) : null
}

// -- admin CRUD API (used only by /admin and its API routes) ---------------

export type ShopProductInput = Omit<ShopProduct, 'id'>

export async function getProductById(id: string): Promise<ShopProduct | null> {
  await ensureSchema()
  const db = getTursoClient()
  const result = await db.execute({
    sql: 'SELECT * FROM shop_products WHERE id = ? LIMIT 1',
    args: [id],
  })
  const row = result.rows[0]
  return row ? rowToProduct(row as unknown as Row) : null
}

export async function createProduct(input: ShopProductInput): Promise<ShopProduct> {
  await ensureSchema()
  const db = getTursoClient()
  const id = randomUUID()
  const now = new Date().toISOString()

  await db.execute({
    sql: `INSERT INTO shop_products
      (id, slug, name, category, summary, description, price, image, gradient, tags, specs, tracklist, source_name, affiliate_url, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      id,
      input.slug,
      input.name,
      input.category,
      input.summary,
      input.description ?? null,
      input.price ?? null,
      input.image ?? null,
      input.gradient,
      input.tags ? JSON.stringify(input.tags) : null,
      input.specs ? JSON.stringify(input.specs) : null,
      input.tracklist ? JSON.stringify(input.tracklist) : null,
      input.sourceName,
      input.affiliateUrl,
      now,
      now,
    ],
  })

  return { id, ...input }
}

export async function updateProduct(id: string, input: ShopProductInput): Promise<void> {
  await ensureSchema()
  const db = getTursoClient()

  await db.execute({
    sql: `UPDATE shop_products SET
      slug = ?, name = ?, category = ?, summary = ?, description = ?, price = ?,
      image = ?, gradient = ?, tags = ?, specs = ?, tracklist = ?,
      source_name = ?, affiliate_url = ?, updated_at = ?
      WHERE id = ?`,
    args: [
      input.slug,
      input.name,
      input.category,
      input.summary,
      input.description ?? null,
      input.price ?? null,
      input.image ?? null,
      input.gradient,
      input.tags ? JSON.stringify(input.tags) : null,
      input.specs ? JSON.stringify(input.specs) : null,
      input.tracklist ? JSON.stringify(input.tracklist) : null,
      input.sourceName,
      input.affiliateUrl,
      new Date().toISOString(),
      id,
    ],
  })
}

export async function deleteProduct(id: string): Promise<void> {
  await ensureSchema()
  const db = getTursoClient()
  await db.execute({ sql: 'DELETE FROM shop_products WHERE id = ?', args: [id] })
}

export async function isSlugTaken(slug: string, excludeId?: string): Promise<boolean> {
  await ensureSchema()
  const db = getTursoClient()
  const result = await db.execute({
    sql: 'SELECT id FROM shop_products WHERE slug = ? LIMIT 1',
    args: [slug],
  })
  const row = result.rows[0] as unknown as { id: string } | undefined
  return !!row && row.id !== excludeId
}
