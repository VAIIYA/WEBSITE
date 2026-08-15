import { ImageResponse } from 'next/og'
import { logoDataUri } from '@/lib/logoDataUri'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} width={32} height={32} alt="VAIIYA" />
      </div>
    ),
    { ...size }
  )
}
