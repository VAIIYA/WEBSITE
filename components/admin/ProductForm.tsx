'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { ShopProduct } from '@/lib/shop'
import { SHOP_CATEGORIES } from '@/lib/shop-categories'
import { SHOP_GRADIENTS } from '@/lib/shop-gradients'

type SpecRow = { key: string; value: string }

function specsToRows(specs?: Record<string, string>): SpecRow[] {
  if (!specs) return []
  return Object.entries(specs).map(([key, value]) => ({ key, value }))
}

export default function ProductForm({ product }: { product?: ShopProduct }) {
  const router = useRouter()
  const isEdit = !!product

  const [name, setName] = useState(product?.name ?? '')
  const [slug, setSlug] = useState(product?.slug ?? '')
  const [slugTouched, setSlugTouched] = useState(isEdit)
  const [category, setCategory] = useState(product?.category ?? SHOP_CATEGORIES[0])
  const [summary, setSummary] = useState(product?.summary ?? '')
  const [description, setDescription] = useState(product?.description ?? '')
  const [price, setPrice] = useState(product?.price ?? '')
  const [image, setImage] = useState(product?.image ?? '')
  const [gradient, setGradient] = useState(product?.gradient ?? SHOP_GRADIENTS[0])
  const [tagsText, setTagsText] = useState(product?.tags?.join(', ') ?? '')
  const [sourceName, setSourceName] = useState(product?.sourceName ?? '')
  const [affiliateUrl, setAffiliateUrl] = useState(product?.affiliateUrl ?? '')
  const [specRows, setSpecRows] = useState<SpecRow[]>(specsToRows(product?.specs))
  const [tracklistText, setTracklistText] = useState(product?.tracklist?.join('\n') ?? '')

  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const slugify = (input: string) =>
    input
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')

  const handleNameChange = (value: string) => {
    setName(value)
    if (!slugTouched) setSlug(slugify(value))
  }

  const updateSpecRow = (index: number, field: 'key' | 'value', value: string) => {
    setSpecRows((rows) => rows.map((r, i) => (i === index ? { ...r, [field]: value } : r)))
  }
  const addSpecRow = () => setSpecRows((rows) => [...rows, { key: '', value: '' }])
  const removeSpecRow = (index: number) => setSpecRows((rows) => rows.filter((_, i) => i !== index))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const specs = Object.fromEntries(
      specRows.filter((r) => r.key.trim() && r.value.trim()).map((r) => [r.key.trim(), r.value.trim()])
    )

    const payload = {
      name,
      slug,
      category,
      summary,
      description: description.trim() || undefined,
      price: price.trim() || undefined,
      image: image.trim() || undefined,
      gradient,
      tags: tagsText.split(',').map((t) => t.trim()).filter(Boolean),
      specs: Object.keys(specs).length > 0 ? specs : undefined,
      tracklist: tracklistText.split('\n').map((t) => t.trim()).filter(Boolean),
      sourceName,
      affiliateUrl,
    }

    try {
      const res = await fetch(isEdit ? `/api/admin/products/${product!.id}` : '/api/admin/products', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(json.error || 'Er ging iets mis.')
        setSaving(false)
        return
      }

      router.push('/admin/products')
      router.refresh()
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.')
      setSaving(false)
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E25A3C]/30 focus:border-[#E25A3C]/40'
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
      {error && (
        <p className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 font-medium">
          ⚠️ {error}
        </p>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-bold text-slate-900">Basisinformatie</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Producttitel</label>
            <input
              required
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>URL-slug</label>
            <input
              required
              value={slug}
              onChange={(e) => {
                setSlugTouched(true)
                setSlug(e.target.value)
              }}
              className={inputClass}
            />
            <p className="text-xs text-slate-400 mt-1">/shop/{slug || '...'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Categorie</label>
            <select value={category} onChange={(e) => setCategory(e.target.value as typeof category)} className={inputClass}>
              {SHOP_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Prijs (optioneel)</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="€ 19,99"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Korte beschrijving</label>
          <textarea
            required
            rows={2}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={inputClass}
            placeholder="Verschijnt op de productkaart en bovenaan de detailpagina."
          />
        </div>

        <div>
          <label className={labelClass}>Lange beschrijving (optioneel)</label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
            placeholder="Verschijnt verderop de detailpagina, onder 'Over dit product'."
          />
        </div>

        <div>
          <label className={labelClass}>Tags (komma-gescheiden)</label>
          <input
            value={tagsText}
            onChange={(e) => setTagsText(e.target.value)}
            placeholder="AI, Management, Boek"
            className={inputClass}
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-bold text-slate-900">Afbeelding &amp; stijl</h2>

        <div>
          <label className={labelClass}>Afbeelding-URL (optioneel)</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://..."
            className={inputClass}
          />
          <p className="text-xs text-slate-400 mt-1">
            Extern gehost (bijv. Bol.com-productafbeelding). Zonder afbeelding tonen we een gekleurd vlak met de eerste letter.
          </p>
        </div>

        <div>
          <label className={labelClass}>Kleurverloop (fallback wanneer er geen afbeelding is)</label>
          <div className="flex flex-wrap gap-2">
            {SHOP_GRADIENTS.map((g) => (
              <button
                type="button"
                key={g}
                onClick={() => setGradient(g)}
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g} border-2 transition-all ${
                  gradient === g ? 'border-[#E25A3C] scale-110' : 'border-transparent'
                }`}
                title={g}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-bold text-slate-900">Affiliate-link</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Bronnaam</label>
            <input
              required
              value={sourceName}
              onChange={(e) => setSourceName(e.target.value)}
              placeholder="Bol.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Affiliate-URL</label>
            <input
              required
              type="url"
              value={affiliateUrl}
              onChange={(e) => setAffiliateUrl(e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">Specificaties (optioneel)</h2>
          <button type="button" onClick={addSpecRow} className="text-xs font-semibold text-[#E25A3C] hover:underline">
            + Regel toevoegen
          </button>
        </div>
        {specRows.length === 0 && <p className="text-sm text-slate-400">Geen specificaties toegevoegd.</p>}
        {specRows.map((row, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={row.key}
              onChange={(e) => updateSpecRow(i, 'key', e.target.value)}
              placeholder="Auteur"
              className={inputClass}
            />
            <input
              value={row.value}
              onChange={(e) => updateSpecRow(i, 'value', e.target.value)}
              placeholder="Timo Boezeman"
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => removeSpecRow(i)}
              className="shrink-0 px-3 rounded-xl text-red-500 hover:bg-red-50 text-sm font-medium"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <label className={labelClass}>Tracklist (optioneel — één per regel, voor CD/Vinyl)</label>
        <textarea
          rows={6}
          value={tracklistText}
          onChange={(e) => setTracklistText(e.target.value)}
          className={inputClass}
          placeholder={'Blame\nTen Thousand\nCloser'}
        />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={saving} className="btn-metamask btn-orange text-sm disabled:opacity-60">
          {saving ? 'Opslaan...' : isEdit ? 'Wijzigingen opslaan' : 'Product aanmaken'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/products')}
          className="btn-metamask btn-outline-dark text-sm"
        >
          Annuleren
        </button>
      </div>
    </form>
  )
}
