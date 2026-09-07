import type { Metadata } from 'next'
import VideoSection from '@/components/VideoSection'

export const metadata: Metadata = {
  title: 'Voortgang',
  description: 'Volg de evolutie van VAIIYA. We blijven continu itereren en verbeteren om de best mogelijke apps voor Android en iOS te leveren.',
}

export default function ProgressPage() {
    return (
        <main className="min-h-screen bg-white">

            <div className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium">
                        Bouwen in het Openbaar
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-serif leading-tight">
                        Onze <span className="text-metamask-orange">Voortgang</span>
                        <br />
                        Tot Nu Toe.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Volg de evolutie van VAIIYA. We blijven continu itereren en
                        verbeteren om de best mogelijke ervaring te leveren.
                    </p>
                </div>
            </div>

            <VideoSection
                src="/media/VAIIYA_PROGRESS.mp4"
                title="Ontwikkeling Showcase"
                description="Een diepgaande blik op onze recente mijlpalen en technische prestaties."
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl border border-metamask-gray-100 bg-metamask-gray-50/50">
                        <h3 className="text-xl font-semibold mb-3">Mijlpaal 1</h3>
                        <p className="text-gray-600">Initiële architectuur opgezet en kernfunctionaliteit uitgerold.</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-metamask-gray-100 bg-metamask-gray-50/50">
                        <h3 className="text-xl font-semibold mb-3">Mijlpaal 2</h3>
                        <p className="text-gray-600">UI/UX-designsysteem afgerond met een moderne, verfijnde vormgeving.</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-metamask-gray-100 bg-metamask-gray-50/50">
                        <h3 className="text-xl font-semibold mb-3">Mijlpaal 3</h3>
                        <p className="text-gray-600">Alpha-testfase gelanceerd binnen de community met 100+ actieve deelnemers.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
