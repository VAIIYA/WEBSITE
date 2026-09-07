import { getContactSubmissions } from '@/lib/turso'

export const dynamic = 'force-dynamic'

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('nl-NL', { dateStyle: 'medium', timeStyle: 'short' })
}

export default async function AdminContactsPage() {
  const submissions = await getContactSubmissions()

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-8">Contactberichten ({submissions.length})</h1>

      {submissions.length === 0 ? (
        <p className="text-slate-400">Nog geen contactberichten binnengekomen.</p>
      ) : (
        <div className="space-y-4 max-w-3xl">
          {submissions.map((s) => (
            <div key={s.id} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <p className="font-semibold text-slate-900">{s.name}</p>
                <p className="text-xs text-slate-400">{formatDate(s.created_at)}</p>
              </div>
              <a href={`mailto:${s.email}`} className="text-sm text-[#E25A3C] hover:underline">
                {s.email}
              </a>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 whitespace-pre-line">{s.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
