import type { DescriptionBlock } from '@/lib/portfolio'

/** Renders paragraphs, sub-headings and bullet lists from a title's description blocks. */
export default function DescriptionBlocks({ blocks }: { blocks: DescriptionBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.t === 'h') {
          return (
            <h3 key={i} className="!mt-10 font-serif text-2xl text-ink first:!mt-0">
              {b.text}
            </h3>
          )
        }
        if (b.t === 'ul') {
          return (
            <ul key={i} className="border-t border-[#D1CFC5]">
              {b.items.map((item) => (
                <li key={item} className="border-b border-[#D1CFC5] py-3 text-[16px] leading-relaxed text-[#3D3D3A]">
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="text-[17px] leading-relaxed text-[#3D3D3A]">
            {b.text}
          </p>
        )
      })}
    </div>
  )
}
