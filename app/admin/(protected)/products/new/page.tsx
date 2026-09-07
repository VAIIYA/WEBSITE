import ProductForm from '@/components/admin/ProductForm'

export default function NewProductPage() {
  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-8">Nieuw product</h1>
      <ProductForm />
    </div>
  )
}
