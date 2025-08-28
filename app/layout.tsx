import type { Metadata } from 'next'
import './globals.css'
import LenisScroll from './components/LenisScroll'

export const metadata: Metadata = {
  title: 'TideTech.ai - AI Agents & Automation',
  description:
    'Transform your business with custom AI agents and automation. Fast, intelligent, and seamlessly integrated.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Reddit+Sans:ital,wght@0,200..900;1,200..900&family=Bitter:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <LenisScroll />
        {children}
      </body>
    </html>
  )
}
