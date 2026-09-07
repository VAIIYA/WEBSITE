import type { Metadata } from 'next'
import VideoSection from '@/components/VideoSection'

export const metadata: Metadata = {
  title: 'Progress',
  description: 'Follow VAIIYA\'s evolution. We keep iterating and improving to deliver the best possible apps for Android and iOS.',
}

export default function ProgressPageEn() {
    return (
        <main className="min-h-screen bg-white">

            <div className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metamask-orange/10 text-metamask-orange text-sm font-medium">
                        Building In Public
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-serif leading-tight">
                        Our <span className="text-metamask-orange">Progress</span>
                        <br />
                        So Far.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Follow VAIIYA&apos;s evolution. We keep iterating and
                        improving to deliver the best possible experience.
                    </p>
                </div>
            </div>

            <VideoSection
                src="/media/VAIIYA_PROGRESS.mp4"
                title="Development Showcase"
                description="An in-depth look at our recent milestones and technical achievements."
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl border border-metamask-gray-100 bg-metamask-gray-50/50">
                        <h3 className="text-xl font-semibold mb-3">Milestone 1</h3>
                        <p className="text-gray-600">Initial architecture set up and core functionality shipped.</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-metamask-gray-100 bg-metamask-gray-50/50">
                        <h3 className="text-xl font-semibold mb-3">Milestone 2</h3>
                        <p className="text-gray-600">UI/UX design system finished with a modern, refined look.</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-metamask-gray-100 bg-metamask-gray-50/50">
                        <h3 className="text-xl font-semibold mb-3">Milestone 3</h3>
                        <p className="text-gray-600">Alpha testing phase launched within the community with 100+ active participants.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
