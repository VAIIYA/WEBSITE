type Item = { label: string; detail: string }

/** Numbered, ruled list used for stacks and capabilities. */
export default function FeatureList({ items }: { items: Item[] }) {
  return (
    <ul className="grid grid-cols-1 border-t border-[#D1CFC5] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.label} className="border-b border-[#D1CFC5] py-6">
          <span className="font-mono text-xs text-[#87867F]">0{i + 1}</span>
          <h3 className="mt-6 font-serif text-xl leading-snug">{s.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5E5D59]">{s.detail}</p>
        </li>
      ))}
    </ul>
  )
}
