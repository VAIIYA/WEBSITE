type PlayButtonProps = {
  href: string
  size?: 'md' | 'lg'
  tone?: 'dark' | 'light'
  label?: string
}

const playIcon = (
  <svg className="h-[1.6em] w-[1.6em] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
  </svg>
)

/** "Get it on Google Play" button linking to a Play Store listing. */
export default function PlayButton({ href, size = 'md', tone = 'dark', label = 'Get it on' }: PlayButtonProps) {
  const colors =
    tone === 'dark'
      ? 'bg-ink text-ivory hover:bg-[#3D3D3A]'
      : 'bg-ivory text-ink hover:bg-[#E8E6DC] border border-[#D1CFC5]'
  const sizing = size === 'lg' ? 'gap-3.5 px-6 py-3.5 text-[1.05rem]' : 'gap-3 px-4 py-2.5 text-[0.95rem]'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-xl transition-colors duration-200 ${colors} ${sizing}`}
    >
      {playIcon}
      <span className="flex flex-col text-left leading-none">
        <span className="text-[0.62em] font-medium uppercase tracking-[0.12em] opacity-75">{label}</span>
        <span className="mt-1 font-semibold">Google Play</span>
      </span>
    </a>
  )
}
