import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VideoSection
        src="/media/VAIIYA_x2000.mp4"
        title="Crafted for Every Platform"
        description="Native mobile apps for Android and iOS, engineered with precision and aesthetic excellence."
      />
      <About />
      <Portfolio />
    </main>
  )
}
