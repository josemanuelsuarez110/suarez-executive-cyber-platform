import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suarez Consultoría | IT, QA, Ciberseguridad, Redes y Telefonía',
  description:
    'Consultoría integral en QA Automation, ciberseguridad, soporte técnico IT, redes empresariales, WiFi y telefonía IP. Cobertura nacional en República Dominicana y soporte remoto internacional.',
  keywords: [
    'QA Automation', 'Ciberseguridad', 'Soporte IT', 'Redes empresariales', 'WiFi empresarial',
    'Telefonía IP', 'VoIP', 'Active Directory', 'Servidores', 'Pentesting', 'ISO 27001',
    'Playwright', 'Selenium', 'API Testing', 'SDET', 'República Dominicana', 'Santo Domingo',
    'Suarez Consultoría', 'JMTechLab', 'Outsourcing IT', 'MSP'
  ],
  authors: [{ name: 'José Manuel Suárez', url: 'https://consultoria.jmtechlab.do' }],
  creator: 'José Manuel Suárez',
  publisher: 'Suarez Consultoría',
  metadataBase: new URL('https://consultoria.jmtechlab.do'),
  openGraph: {
    title: 'Suarez Consultoría | IT, QA, Ciberseguridad, Redes y Telefonía',
    description:
      'Servicios integrales de IT: QA Automation, ciberseguridad, soporte técnico, redes, WiFi empresarial y telefonía IP.',
    url: 'https://consultoria.jmtechlab.do',
    siteName: 'Suarez Consultoría',
    locale: 'es_DO',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suarez Consultoría | IT, QA, Ciberseguridad, Redes y Telefonía',
    description: 'Servicios integrales de IT, QA, ciberseguridad, redes y telefonía IP.'
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={outfit.variable}>
      <body className={outfit.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
