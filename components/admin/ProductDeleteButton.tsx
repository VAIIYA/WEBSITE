'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProductDeleteButton({ id, name }: { id: string; name: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Weet je zeker dat je "${name}" wilt verwijderen? Dit kan niet ongedaan worden gemaakt.`)) {
      return
    }
    setLoading(true)
    const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Verwijderen mislukt.')
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-500 hover:underline font-medium disabled:opacity-50"
    >
      {loading ? '...' : 'Verwijderen'}
    </button>
  )
}
