import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioApps } from '@/lib/portfolio';

function PlatformBadge({ platform }: { platform: string }) {
  const styles: Record<string, string> = {
    android: 'bg-green-50 text-green-700 border-green-100',
    ios: 'bg-gray-100 text-gray-700 border-gray-200',
    web: 'bg-blue-50 text-blue-700 border-blue-100',
  };
  const labels: Record<string, string> = {
    android: 'Android',
    ios: 'iOS',
    web: 'Web',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles[platform] || ''}`}>
      {labels[platform] || platform}
    </span>
  );
}

export default function Portfolio() {
  const t = useTranslations('Portfolio');

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-metamask-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif mb-6">
            {t('title')} <span className="text-metamask-orange">{t('titleColored')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioApps.map((app) => (
            <div key={app.id} className="group card-vibe overflow-hidden !p-0 flex flex-col">
              {/* App Visual */}
              <div className={`relative aspect-square bg-gradient-to-br ${app.gradient} overflow-hidden`}>
                {app.image ? (
                  <Image
                    src={app.image}
                    alt={t(`${app.id}.name`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-[28px] bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <span className="text-4xl font-serif text-white">{app.id.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {app.comingSoon && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-metamask-purple">
                    {t('comingSoon')}
                  </div>
                )}

                <div className="absolute bottom-4 left-4 flex gap-2">
                  {app.platforms.map((platform) => (
                    <PlatformBadge key={platform} platform={platform} />
                  ))}
                </div>
              </div>

              {/* App Info */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif mb-3 text-gray-900 group-hover:text-metamask-orange transition-colors">
                  {t(`${app.id}.name`)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {t(`${app.id}.description`)}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-metamask-purple text-white text-sm font-semibold hover:bg-metamask-purple/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-metamask-purple/20"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                      </svg>
                      Google Play
                    </a>
                  )}
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-gray-900/20"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>
                  )}
                  {app.projectUrl && (
                    <Link
                      href={app.projectUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-metamask-gray-100 text-metamask-purple text-sm font-semibold hover:bg-metamask-purple/5 transition-all hover:scale-[1.02] active:scale-95"
                    >
                      {t('viewProject')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
