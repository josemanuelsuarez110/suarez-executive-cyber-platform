import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'José Manuel Suárez | QA Automation Engineer / SDET & Security Tester',
  description:
    'QA Automation Engineer / SDET con 3+ años de experiencia en test automation, API testing, E2E testing, regression testing e integration testing. Especialista en Playwright, Selenium, Postman, SQL, PostgreSQL, JavaScript, TypeScript, Python, CI/CD y GitHub Actions. Certificado eWPTX, eCPPT, eJPT, eSOC, eIAMA, CCNP y CompTIA AutoOps+.',
  keywords: [
    'QA Automation Engineer',
    'SDET',
    'API Testing',
    'End-to-End Testing',
    'Automated Testing',
    'TypeScript',
    'JavaScript',
    'Python',
    'CI/CD',
    'GitHub Actions',
    'Software Testing',
    'Regression Testing',
    'Integration Testing',
    'PostgreSQL',
    'SQL',
    'Git',
    'Linux',
    'FastAPI',
    'Next.js',
    'Security Testing',
    'OWASP',
    'Playwright',
    'Selenium',
    'Postman',
    'José Manuel Suárez',
    'JMTechLab',
    'República Dominicana',
    'Remote QA Engineer'
  ],
  authors: [{ name: 'José Manuel Suárez', url: 'https://jmtechlab.do' }],
  creator: 'José Manuel Suárez',
  publisher: 'JMTechLab',
  metadataBase: new URL('https://consultoria.jmtechlab.do'),
  openGraph: {
    title: 'José Manuel Suárez | QA Automation Engineer / SDET',
    description:
      'QA Automation Engineer / SDET especializado en Playwright, Selenium, API Testing, SQL, CI/CD y Security Testing. 3+ años de experiencia, 19+ certificaciones.',
    url: 'https://consultoria.jmtechlab.do',
    siteName: 'JMTechLab',
    locale: 'es_DO',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Manuel Suárez | QA Automation Engineer / SDET',
    description:
      'QA Automation Engineer / SDET especializado en Playwright, Selenium, API Testing, SQL, CI/CD y Security Testing.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
