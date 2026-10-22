import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About',
  description: 'VAIIYA is a digital studio building Android apps, mobile games and websites.',
}

const principles = [
  {
    title: 'Performance',
    text: 'Native apps deliver smooth interactions and full access to device capabilities, so the product feels as good as it looks.',
  },
  {
    title: 'Long-term value',
    text: 'One clear vision, maintained with care. Scalable architecture that grows with your product instead of fighting it.',
  },
  {
    title: 'Reach',
    text: 'Google Play connects your app to billions of Android users around the world.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-ivory text-ink">
      <PageHero
        eyebrow="About VAIIYA"
        title="A studio for Android apps, games and websites."
        description="We don’t just write code. We craft experiences that feel great to use."
      >
        <Link href="/portfolio" className="btn btn-dark">View portfolio</Link>
      </PageHero>

      <section className="border-y border-[#E8E6DC]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <p className="eyebrow lg:col-span-3">How we build</p>
          <div className="space-y-8 lg:col-span-9">
            <p className="font-serif text-3xl leading-[1.2] sm:text-[40px]">
              Every project starts with one question: what should this feel like to use?
            </p>
            <div className="grid grid-cols-1 gap-8 text-[17px] leading-relaxed text-[#3D3D3A] md:grid-cols-2">
              <p>
                From there we design, build and ship — Android apps, games and websites — with the same
                attention to detail.
              </p>
              <p>
                We use modern tooling, including AI-assisted workflows, to move fast without cutting corners. But the
                tools are just tools. What ships is judged on craft: does it feel fast, does it feel right, would we
                use it ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 className="mb-12 font-serif text-4xl leading-tight sm:text-5xl">Why native?</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title} className="rounded-2xl bg-[#F0EEE6] p-7">
              <span className="font-mono text-xs text-[#87867F]">0{i + 1}</span>
              <h3 className="mb-3 mt-8 font-serif text-2xl">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#3D3D3A]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="eyebrow !text-[#B0AEA5]">Our vision</p>
          <p className="mt-6 font-serif text-3xl leading-[1.25] sm:text-4xl">
            We believe the future of software isn’t just about utility, but about how it makes you feel. Meticulous
            engineering and strong product intuition make apps, games and websites that feel like magic.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-24 text-center sm:px-6 lg:px-10 lg:py-32">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Want to build something together?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3D3D3A]">
          Explore our portfolio or get in touch to see how we can bring your idea to life.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-dark">Contact us</Link>
          <a href="https://x.com/VAIIYA_MEDIA" target="_blank" rel="noopener noreferrer" className="btn btn-light">
            Follow @VAIIYA_MEDIA
          </a>
        </div>
      </section>
    </main>
  )
}
