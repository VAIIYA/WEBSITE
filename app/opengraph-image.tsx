import { ImageResponse } from 'next/og'
import { logoDataUri } from '@/lib/logoDataUri'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'VAIIYA - We. As One.'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f7f9fc 0%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: 9999,
            background: 'rgba(255, 92, 22, 0.10)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -140,
            left: -140,
            width: 400,
            height: 400,
            borderRadius: 9999,
            background: 'rgba(61, 6, 95, 0.10)',
            filter: 'blur(60px)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoDataUri} width={64} height={64} alt="VAIIYA" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 48, fontWeight: 700, fontFamily: 'Georgia, serif', color: '#1F1F1F' }}>
              VAIIYA
            </div>
            <div style={{ fontSize: 20, letterSpacing: 6, color: '#6b7280' }}>WE. AS ONE.</div>
          </div>
        </div>
        <div style={{ fontSize: 42, fontFamily: 'Georgia, serif', color: '#111827', textAlign: 'center', padding: '0 80px' }}>
          Native Apps for Android &amp; iOS.
        </div>
        <div style={{ fontSize: 26, color: '#4b5563', marginTop: 16 }}>
          Agentic Engineering. Crafted with precision.
        </div>
      </div>
    ),
    { ...size }
  )
}
