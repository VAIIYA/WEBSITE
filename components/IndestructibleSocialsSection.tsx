'use client'

import React, { useState } from 'react'
import { socialLinks } from '@/lib/socialLinks'

const EMAIL = 'vaiiya@googlegroups.com'

export default function IndestructibleSocialsSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="socials" className="mx-auto max-w-site px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <div className="mb-4 flex flex-col gap-4 rounded-2xl bg-ink p-7 text-ivory sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div>
          <p className="text-sm text-[#B0AEA5]">Email</p>
          <a href={`mailto:${EMAIL}`} className="font-serif text-3xl sm:text-4xl">{EMAIL}</a>
        </div>
        <button onClick={handleCopyEmail} className="btn bg-ivory text-ink hover:bg-[#E8E6DC]">
          {copiedEmail ? 'Copied' : 'Copy address'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl bg-[#F0EEE6] p-6 transition-colors hover:bg-[#E8E6DC]"
          >
            <div className="mb-10 flex items-center justify-between text-ink">
              {social.icon}
              <span aria-hidden="true" className="text-[#87867F] transition-colors group-hover:text-ink">&#8599;</span>
            </div>
            <div>
              <h3 className="font-serif text-2xl">{social.name}</h3>
              <p className="mt-1 truncate text-sm text-[#5E5D59]">{social.url.replace('https://', '')}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
