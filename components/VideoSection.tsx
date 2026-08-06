'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoSectionProps {
    src: string
    title?: string
    description?: string
}

export default function VideoSection({ src, title, description }: VideoSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const node = containerRef.current
        if (!node) return
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setInView(true)
                        observer.disconnect()
                    }
                }
            },
            { rootMargin: '200px' }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {(title || description) && (
                    <div className="text-center mb-16 space-y-4">
                        {title && (
                            <h2 className="text-4xl sm:text-5xl font-serif">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                <div className="relative">
                    {/* Decorative background blur */}
                    <div className="absolute -inset-4 bg-metamask-orange/5 blur-3xl rounded-[3rem] -z-10"></div>

                    {/* Video Container with Glassmorphism */}
                    <div className="card-vibe p-2 sm:p-4 bg-white/50 backdrop-blur-sm overflow-hidden border border-metamask-gray-100 shadow-2xl">
                        <div ref={containerRef} className="relative w-full aspect-video rounded-2xl overflow-hidden bg-metamask-gray-100 shadow-inner">
                            {inView ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                >
                                    <source src={src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-metamask-purple/10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-metamask-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Overlay for depth */}
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
