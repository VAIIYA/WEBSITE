/**
 * Fixed list of product categories. Deliberately not free-text (per
 * product decision) — add a new one here (and it's instantly available
 * in the admin panel's dropdown) rather than letting editors type
 * arbitrary values that drift/typo over time.
 */
export const SHOP_CATEGORIES = ['CD', 'Vinyl', 'Boek'] as const

export type ProductCategory = (typeof SHOP_CATEGORIES)[number]

export function isProductCategory(value: string): value is ProductCategory {
  return (SHOP_CATEGORIES as readonly string[]).includes(value)
}
