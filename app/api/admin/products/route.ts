import { NextRequest, NextResponse } from 'next/server'
import { createProduct, getAllProducts, isSlugTaken, type ShopProductInput } from '@/lib/shop'
import { isProductCategory } from '@/lib/shop-categories'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function validate(body: Record<string, unknown>): { input: ShopProductInput } | { error: string } {
  const { name, category, summary, description, price, image, gradient, tags, specs, tracklist, sourceName, affiliateUrl, slug } = body

  if (typeof name !== 'string' || name.trim().length < 2) return { error: 'Vul een geldige productnaam in.' }
  if (typeof category !== 'string' || !isProductCategory(category)) return { error: 'Kies een geldige categorie.' }
  if (typeof summary !== 'string' || summary.trim().length < 5) return { error: 'Vul een korte beschrijving in (min. 5 tekens).' }
  if (typeof sourceName !== 'string' || sourceName.trim().length < 2) return { error: 'Vul de naam van de bron/winkel in.' }
  if (typeof affiliateUrl !== 'string' || !/^https?:\/\//.test(affiliateUrl)) return { error: 'Vul een geldige affiliate-URL in (met https://).' }
  if (typeof gradient !== 'string' || gradient.trim().length === 0) return { error: 'Kies een kleurverloop.' }

  const finalSlug = typeof slug === 'string' && slug.trim() ? slugify(slug) : slugify(name)
  if (!finalSlug) return { error: 'Kon geen geldige URL-slug afleiden van de naam.' }

  if (image !== undefined && image !== null && image !== '' && typeof image === 'string' && !/^https?:\/\//.test(image)) {
    return { error: 'De afbeelding-URL moet met https:// beginnen.' }
  }

  const parsedTags = Array.isArray(tags) ? tags.filter((t): t is string => typeof t === 'string' && t.trim() !== '') : undefined
  const parsedSpecs =
    specs && typeof specs === 'object' && !Array.isArray(specs)
      ? (Object.fromEntries(
          Object.entries(specs as Record<string, unknown>).filter(
            (entry): entry is [string, string] => typeof entry[0] === 'string' && entry[0].trim() !== '' && typeof entry[1] === 'string' && entry[1].trim() !== ''
          )
        ) as Record<string, string>)
      : undefined
  const parsedTracklist = Array.isArray(tracklist) ? tracklist.filter((t): t is string => typeof t === 'string' && t.trim() !== '') : undefined

  return {
    input: {
      slug: finalSlug,
      name: name.trim(),
      category,
      summary: summary.trim(),
      description: typeof description === 'string' && description.trim() ? description.trim() : undefined,
      price: typeof price === 'string' && price.trim() ? price.trim() : undefined,
      image: typeof image === 'string' && image.trim() ? image.trim() : undefined,
      gradient: gradient.trim(),
      tags: parsedTags && parsedTags.length > 0 ? parsedTags : undefined,
      specs: parsedSpecs && Object.keys(parsedSpecs).length > 0 ? parsedSpecs : undefined,
      tracklist: parsedTracklist && parsedTracklist.length > 0 ? parsedTracklist : undefined,
      sourceName: sourceName.trim(),
      affiliateUrl: affiliateUrl.trim(),
    },
  }
}

export async function GET() {
  const products = await getAllProducts()
  return NextResponse.json({ products })
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const result = validate((body ?? {}) as Record<string, unknown>)
  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  if (await isSlugTaken(result.input.slug)) {
    return NextResponse.json({ error: `De URL-slug "${result.input.slug}" is al in gebruik door een ander product.` }, { status: 400 })
  }

  try {
    const product = await createProduct(result.input)
    return NextResponse.json({ product })
  } catch (err) {
    console.error('[admin/products] create failed:', err)
    return NextResponse.json({ error: 'Er ging iets mis bij het opslaan.' }, { status: 500 })
  }
}
