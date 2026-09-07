import Link from 'next/link'
import { getAllProducts } from '@/lib/shop'
import ProductDeleteButton from '@/components/admin/ProductDeleteButton'

export const dynamic = 'force-dynamic'

export default async function AdminProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="p-6 sm:p-10">
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <h1 className="text-2xl font-bold font-serif text-slate-900">Producten ({products.length})</h1>
        <Link href="/admin/products/new" className="btn-metamask btn-orange text-sm">
          + Nieuw product
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="px-5 py-3">Product</th>
                <th className="px-5 py-3">Categorie</th>
                <th className="px-5 py-3">Prijs</th>
                <th className="px-5 py-3">Bron</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-slate-400">
                    Nog geen producten. <Link href="/admin/products/new" className="text-[#E25A3C] hover:underline">Voeg er een toe &rarr;</Link>
                  </td>
                </tr>
              )}
              {products.map((p) => (
                <tr key={p.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} shrink-0 overflow-hidden flex items-center justify-center`}>
                        {p.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-white font-bold text-xs">{p.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate">{p.name}</p>
                        <p className="text-xs text-slate-400 truncate">/shop/{p.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-600">{p.category}</td>
                  <td className="px-5 py-3 text-slate-600">{p.price || '—'}</td>
                  <td className="px-5 py-3 text-slate-600">{p.sourceName}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">
                    <Link href={`/admin/products/${p.id}`} className="text-[#E25A3C] hover:underline font-medium mr-4">
                      Bewerken
                    </Link>
                    <ProductDeleteButton id={p.id} name={p.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
