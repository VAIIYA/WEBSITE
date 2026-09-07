'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '📊', exact: true },
  { href: '/admin/products', label: 'Producten', icon: '🛍️' },
  { href: '/admin/contacts', label: 'Contacten', icon: '✉️' },
  { href: '/admin/newsletter', label: 'Nieuwsbrief', icon: '📰' },
  { href: '/admin/clicks', label: 'Kliks', icon: '🔗' },
  { href: '/admin/social', label: 'Social', icon: '🎬' },
]

export default function AdminSidebar() {
  const pathname = usePathname() || ''
  const router = useRouter()

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + '/')

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-full sm:w-56 shrink-0 bg-slate-950 text-white sm:min-h-screen sm:sticky sm:top-0 flex flex-col">
      <div className="p-6 border-b border-slate-900">
        <Link href="/" className="text-lg font-bold font-serif">
          VAIIYA <span className="text-[#E25A3C]">Admin</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive(item.href, item.exact)
                ? 'bg-[#E25A3C] text-white'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-900">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
        >
          🚪 Uitloggen
        </button>
      </div>
    </aside>
  )
}
