import Link from 'next/link'
import PodcastVideo from '@/components/PodcastVideo'

const pillars = [
  {
    href: '/early-access',
    emoji: '🚀',
    title: 'Early Access',
    description: 'Join our Google Group tester community to play closed betas before anyone else.',
    accent: 'text-emerald-600',
    tag: 'Community',
  },
  {
    href: '/android',
    emoji: '🤖',
    title: 'Android Native',
    description: 'Kotlin & Jetpack Compose apps live on Google Play tuned for peak performance.',
    accent: 'text-emerald-700',
    tag: 'Flagship',
  },
  {
    href: '/ios',
    emoji: '🍎',
    title: 'iOS & Apple',
    description: 'Swift & SwiftUI engineering roadmap bringing titles to the App Store.',
    accent: 'text-blue-600',
    tag: 'In Progress',
  },
  {
    href: '/games',
    emoji: '🕹️',
    title: 'Unity & Games',
    description: 'Cross-engine mobile games, custom physics, and 60+ FPS arcade gameplay.',
    accent: 'text-violet-600',
    tag: 'Unity Powered',
  },
  {
    href: '/websites',
    emoji: '🌐',
    title: 'Web Platforms',
    description: 'High-impact Next.js web apps, interactive PWAs, and digital studio products.',
    accent: 'text-[#E25A3C]',
    tag: 'Next.js',
  },
]

const stats = [
  { value: 'Android & iOS', label: 'Cross-Platform Focus' },
  { value: 'Unity & Native', label: 'High-FPS Engines' },
  { value: 'Google Play', label: 'Verified Developer' },
  { value: 'Closed Beta', label: 'Active Community' },
]

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-cream text-ink selection:bg-[#E25A3C] selection:text-white">
      {/* Hero: Westworld x Arc Raiders Outpost */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid border-b border-[#D8CEBA]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Tactical Status Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-xl bg-[#EAE3D2] border border-[#D8CEBA] text-xs font-mono font-bold text-[#1A1815] shadow-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D9532F] animate-pulse" />
            <span className="text-[#D9532F] tracking-wider">[ DELOS HOST // PROTOCOL 2026 ]</span>
            <span className="text-[#D8CEBA]">&bull;</span>
            <span className="text-[#5A6855] tracking-wider">AI AGENTS: CLAUDE CODE &times; ANTIGRAVITY</span>
            <span className="text-[#D8CEBA]">&bull;</span>
            <span className="text-[#E59B27] tracking-wider">SEC: ANDROID &bull; iOS &bull; UNITY</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-serif mb-6 text-[#1A1815]">
            Synthetic Craft. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9532F] via-[#E59B27] to-[#5A6855] italic">
              Uncaged Mechanics.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#1A1815]/75 max-w-3xl mx-auto leading-relaxed font-normal mb-10 font-sans">
            VAIIYA operates at the intersection of retro-futuristic arcade design and autonomous AI systems. Powered by <strong className="text-[#1A1815] font-semibold">Claude Code</strong> and <strong className="text-[#1A1815] font-semibold">Antigravity</strong>, we build high-precision 60+ FPS games with Unity, native Android software, and next-gen iOS builds.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5 mb-14">
            <Link href="/early-access" className="btn-metamask btn-orange text-sm shadow-md">
              [ ⚡ ENTER CLOSED BETA ]
            </Link>
            <a
              href="https://play.google.com/store/apps/dev?id=7804895561285369781"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metamask btn-outline-dark text-sm"
            >
              [ GOOGLE PLAY STORE &rarr; ]
            </a>
            <Link href="/ios" className="btn-metamask bg-[#EAE3D2] text-[#1A1815] hover:bg-[#D8CEBA] border border-[#D8CEBA] text-sm font-mono">
              [ 🍎 iOS MANIFEST ]
            </Link>
            <Link href="/games" className="btn-metamask bg-[#5A6855] text-white hover:bg-[#3D473A] border border-[#3D473A] text-sm font-mono">
              [ 🕹️ UNITY VAULT ]
            </Link>
          </div>

          {/* Telemetry Stats Grid with Tactical Corners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s, idx) => (
              <div key={s.label} className="tactical-box p-4 rounded-xl text-center shadow-xs">
                <div className="text-[10px] font-mono font-bold text-[#D9532F] tracking-widest uppercase mb-1">
                  SYS.0{idx + 1}
                </div>
                <div className="text-lg sm:text-xl font-black text-[#1A1815] font-mono">{s.value}</div>
                <div className="text-[10px] font-mono font-semibold text-[#1A1815]/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access & Closed Beta Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border bg-gradient-to-b from-white to-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-bold uppercase tracking-widest">
                🚀 Closed Tester Community
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
                Test Our Android Apps <br />
                <span className="text-emerald-700 italic">Before They Hit Google Play</span>
              </h2>
              <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
                Google Play requires closed beta testing before public launch. Join our official Google Group to get exclusive early access, shape upcoming mechanics, and test our latest releases directly on your Android device.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metamask bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-bold shadow-md text-center"
              >
                Join Tester Google Group &rarr;
              </a>
              <Link
                href="/early-access"
                className="btn-metamask btn-outline-dark text-sm font-bold text-center"
              >
                Early Access Hub
              </Link>
            </div>
          </div>

          {/* 3-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 font-bold font-serif flex items-center justify-center text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Join Our Google Group</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Join <strong className="text-ink font-semibold">groups.google.com/g/vaiiya</strong> using the exact same Google account associated with your Android device.
              </p>
              <a
                href="https://groups.google.com/g/vaiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                Open Google Group &rarr;
              </a>
            </div>

            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 font-bold font-serif flex items-center justify-center text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Opt-in on Google Play</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Open the Google Play testing link. Google will verify your group membership and unlock the closed beta track for your account.
              </p>
              <a
                href="https://play.google.com/apps/testing/com.hexmoji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
              >
                Google Play Testing Link &rarr;
              </a>
            </div>

            <div className="bg-white border border-card-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-800 font-bold font-serif flex items-center justify-center text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Download &amp; Play</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Install the game directly from the Google Play Store app on your Android phone or tablet. Receive automatic test updates as we patch!
              </p>
              <span className="text-xs font-semibold text-ink/50">
                Seamless Play Store updates &bull; No APK side-loading
              </span>
            </div>
          </div>

          {/* Spotlight: HEXMOJI Live Tactical Card */}
          <div className="bg-[#1A1815] crt-overlay text-[#F4EFE6] rounded-2xl p-8 sm:p-10 shadow-2xl border-2 border-[#D8CEBA]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9532F]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D9532F]/20 border border-[#D9532F]/50 text-[#E59B27] text-xs font-mono font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#E59B27] animate-pulse" />
                  <span>UNIT DEPLOYED // ANDROID &bull; GOOGLE PLAY</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-[#F4EFE6]">
                  HEXMOJI : ACTIVE DEPLOYMENT 🚀
                </h3>
                <p className="text-[#D8CEBA] text-sm sm:text-base leading-relaxed font-sans">
                  Hexxagon tactical grid combat. Convert enemy nodes, clone bio-mechanical emoji units, and calculate counter-heuristics against adaptive CPU logic. Shipped live on Google Play.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D8CEBA]/80 pt-1">
                  <span className="px-2 py-0.5 bg-[#2A2621] border border-[#3D3831] rounded">[ VER: 1.4.2 ]</span>
                  <span className="px-2 py-0.5 bg-[#2A2621] border border-[#3D3831] rounded">[ OFFLINE PROTOCOL: READY ]</span>
                  <span className="px-2 py-0.5 bg-[#2A2621] border border-[#3D3831] rounded">[ TACTICAL ADAPTIVE AI ]</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0 font-mono">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hexmoji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metamask btn-orange text-center font-bold text-xs shadow-md"
                >
                  [ ACQUIRE ON GOOGLE PLAY ]
                </a>
                <a
                  href="https://groups.google.com/g/vaiiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metamask bg-[#EAE3D2] text-[#1A1815] hover:bg-white text-center font-bold text-xs shadow-xs"
                >
                  [ ENLIST IN SQUAD TEST ]
                </a>
                <div className="flex flex-col items-center gap-1.5 pt-1">
                  <Link
                    href="/games/hexmoji"
                    className="text-xs text-[#E59B27] hover:text-white underline underline-offset-4 font-mono font-semibold"
                  >
                    View Unit Schematics &rarr;
                  </Link>
                  <a
                    href="https://groups.google.com/g/vaiiya/c/FoPlDsHz-CY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#D8CEBA]/60 hover:text-[#E59B27] font-mono"
                  >
                    💬 [ DELOS FREQUENCY // FORUM LOG ] &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-card-border bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet-200 text-violet-800 text-[10px] font-bold uppercase tracking-widest">
              🎙️ The VAIIYA Podcast
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif">The Future of AI &amp; Robotics</h2>
            <p className="text-ink/70 text-base leading-relaxed">
              Groundbreaking technologies and the people shaping them — explained simply. New episodes on YouTube and
              every podcast app.
            </p>
          </div>

          <PodcastVideo />

          <div className="mt-8 text-center">
            <Link href="/podcast" className="btn-metamask btn-outline-dark text-base">
              All episodes &amp; players &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Platform & Unity Showcase: Westworld x Arc Raiders Engineering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D8CEBA] bg-[#EAE3D2]/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A1815] text-[#F4EFE6] text-xs font-mono font-bold uppercase tracking-widest border border-[#3D3831]">
              🕹️ ARC DEPLOYMENT MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-[#1A1815]">
              Android Native. iOS Host. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9532F] via-[#E59B27] to-[#5A6855] italic">
                Unity Physics Engine.
              </span>
            </h2>
            <p className="text-[#1A1815]/75 text-base sm:text-lg leading-relaxed font-sans">
              We leverage the power of the Unity engine for deterministic simulation and tactical 60+ FPS physics, coupled with low-level Kotlin and Swift bindings for device-native speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Android Card */}
            <div className="tactical-box rounded-2xl p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#5A6855]/20 border border-[#5A6855]/40 flex items-center justify-center text-2xl mb-6 shadow-xs">
                  🤖
                </div>
                <div className="inline-block px-2 py-0.5 rounded font-mono bg-[#5A6855]/20 text-[#3D473A] text-[10px] font-bold uppercase tracking-wider mb-3">
                  STATION 01 // ANDROID NATIVE
                </div>
                <h3 className="text-2xl font-black font-serif mb-3 text-[#1A1815]">Android Core</h3>
                <p className="text-[#1A1815]/70 text-sm leading-relaxed mb-6 font-sans">
                  Deeply tuned with idiomatic Kotlin, Jetpack Compose, and Material 3. Shipped to Google Play with early closed beta validation via Google Groups.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8CEBA]">
                <Link href="/android" className="text-xs font-mono font-bold text-[#D9532F] hover:text-[#BF4120] inline-flex items-center gap-1.5">
                  [ INSPECT ANDROID CORE &rarr; ]
                </Link>
              </div>
            </div>

            {/* Unity Engine Card */}
            <div className="bg-[#1A1815] crt-overlay text-[#F4EFE6] border-2 border-[#D9532F]/60 rounded-2xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#D9532F]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#2A2621] border border-[#D9532F]/50 flex items-center justify-center text-2xl mb-6 shadow-xs">
                  🕹️
                </div>
                <div className="inline-block px-2 py-0.5 rounded font-mono bg-[#D9532F]/30 border border-[#D9532F]/50 text-[#E59B27] text-[10px] font-bold uppercase tracking-wider mb-3">
                  PHYSICS CORE // UNITY ENGINE
                </div>
                <h3 className="text-2xl font-black font-serif mb-3 text-[#F4EFE6]">Unity 3D / 2D</h3>
                <p className="text-[#D8CEBA] text-sm leading-relaxed mb-6 font-sans">
                  Deterministic arcade simulation and modular game states. Custom shaders, responsive multi-touch loops, and silky 60fps+ frame rates across form factors.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3D3831] relative z-10">
                <Link href="/games" className="text-xs font-mono font-bold text-[#E59B27] hover:text-white inline-flex items-center gap-1.5">
                  [ LAUNCH UNITY ARSENAL &rarr; ]
                </Link>
              </div>
            </div>

            {/* iOS Apple Card */}
            <div className="tactical-box rounded-2xl p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E59B27]/20 border border-[#E59B27]/40 flex items-center justify-center text-2xl mb-6 shadow-xs">
                  🍎
                </div>
                <div className="inline-block px-2 py-0.5 rounded font-mono bg-[#E59B27]/20 text-[#C77D14] text-[10px] font-bold uppercase tracking-wider mb-3">
                  STATION 02 // APPLE PROTOCOL
                </div>
                <h3 className="text-2xl font-black font-serif mb-3 text-[#1A1815]">Apple iOS Host</h3>
                <p className="text-[#1A1815]/70 text-sm leading-relaxed mb-6 font-sans">
                  Swift, SwiftUI, and GameKit ports underway. Bringing Android battletested titles to the Apple App Store with native ProMotion 120Hz support.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8CEBA]">
                <Link href="/ios" className="text-xs font-mono font-bold text-[#D9532F] hover:text-[#BF4120] inline-flex items-center gap-1.5">
                  [ ACCESS iOS ROADMAP &rarr; ]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — Delos / Arc Raiders Disciplines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D8CEBA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest bg-[#EAE3D2] border border-[#D8CEBA] text-[#1A1815]">
              {'//'} STUDIO CORE DIVISIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-serif text-[#1A1815]">
              Explore VAIIYA
            </h2>
            <p className="text-[#1A1815]/70 text-base leading-relaxed font-sans">
              Five studio disciplines, one unified vision. Inspect our engineering stack, deployed units, and field telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p, idx) => (
              <Link
                key={p.href}
                href={p.href}
                className="group tactical-box rounded-xl p-5 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EAE3D2] text-[#1A1815]/80 border border-[#D8CEBA]">
                      0{idx + 1} {'//'} {p.tag}
                    </span>
                  </div>
                  <h3 className={`text-base font-black font-mono mb-2 ${p.accent}`}>{p.title}</h3>
                  <p className="text-[#1A1815]/70 text-xs leading-relaxed font-sans">{p.description}</p>
                </div>
                <span className={`mt-5 text-[11px] font-mono font-bold ${p.accent} group-hover:underline inline-flex items-center gap-1`}>
                  [ EXPLORE &rarr; ]
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
