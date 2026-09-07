import { getNewsletterSubscribers } from '@/lib/turso'

export const dynamic = 'force-dynamic'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', { dateStyle: 'medium' })
}

export default async function AdminNewsletterPage() {
  const subscribers = await getNewsletterSubscribers()

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-2xl font-bold font-serif text-slate-900 mb-8">Nieuwsbrief-abonnees ({subscribers.length})</h1>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="px-5 py-3">E-mailadres</th>
                <th className="px-5 py-3">Taal</th>
                <th className="px-5 py-3">Aangemeld</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-5 py-10 text-center text-slate-400">
                    Nog geen abonnees.
                  </td>
                </tr>
              )}
              {subscribers.map((s) => (
                <tr key={s.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                  <td className="px-5 py-3 text-slate-900 font-medium">{s.email}</td>
                  <td className="px-5 py-3 text-slate-600 uppercase">{s.locale}</td>
                  <td className="px-5 py-3 text-slate-500">{formatDate(s.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
