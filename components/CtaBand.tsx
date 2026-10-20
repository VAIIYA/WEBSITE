import type { ReactNode } from 'react'

export default function CtaBand({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-site px-4 py-24 text-center sm:px-6 lg:px-10 lg:py-32">
      <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3D3D3A]">{text}</p>}
      <div className="mt-10 flex flex-wrap justify-center gap-3">{children}</div>
    </section>
  )
}
