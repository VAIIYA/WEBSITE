import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/shop'
import ProductForm from '@/components/admin/ProductForm'

export const dynamic = 'force-dynamic'

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)
  if (!product) notFound()

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-8">Product bewerken</h1>
      <ProductForm product={product} />
    </div>
  )
}
