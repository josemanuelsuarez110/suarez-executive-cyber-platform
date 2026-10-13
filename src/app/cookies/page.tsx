'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cookie, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const t = {
  en: {
    title: 'Cookie Policy',
    updated: 'Last updated: January 2026',
    back: 'Back to home',
    sections: [
      { h: '1. What are cookies?', p: 'Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.' },
      { h: '2. Cookies we use', p: 'We only use essential cookies necessary for the site to function: (a) Language preference (to remember if you chose English or Spanish), (b) Cookie consent (to remember your choice). We do not use tracking, advertising, or third-party analytics cookies at this time.' },
      { h: '3. Essential cookies', p: 'These cookies are necessary for the website to function and cannot be disabled. They do not store personally identifiable information.' },
      { h: '4. How to manage cookies', p: 'You can delete or block cookies through your browser settings. However, disabling essential cookies may affect the functionality of the site. Instructions: Chrome, Firefox, Safari, Edge.' },
      { h: '5. Third-party cookies', p: 'We do not currently use third-party cookies. If we add analytics or advertising services in the future, we will update this policy and request your consent.' },
      { h: '6. Updates', p: 'We may update this Cookie Policy from time to time. The latest version will always be available on this page.' },
      { h: '7. Contact', p: 'If you have questions about our use of cookies, contact us at josemanuelsuarez110@gmail.com' }
    ]
  },
  es: {
    title: 'Política de Cookies',
    updated: 'Última actualización: Enero 2026',
    back: 'Volver al inicio',
    sections: [
      { h: '1. ¿Qué son las cookies?', p: 'Las cookies son pequeños archivos de texto almacenados en su dispositivo al visitar un sitio web. Ayudan al sitio a recordar sus preferencias y mejorar su experiencia.' },
      { h: '2. Cookies que utilizamos', p: 'Solo utilizamos cookies esenciales necesarias para el funcionamiento del sitio: (a) Preferencia de idioma (para recordar si eligió inglés o español), (b) Consentimiento de cookies (para recordar su elección). Actualmente no utilizamos cookies de seguimiento, publicidad o análisis de terceros.' },
      { h: '3. Cookies esenciales', p: 'Estas cookies son necesarias para el funcionamiento del sitio y no pueden desactivarse. No almacenan información personal identificable.' },
      { h: '4. Cómo gestionar las cookies', p: 'Puede eliminar o bloquear cookies desde la configuración de su navegador. Sin embargo, desactivar cookies esenciales puede afectar la funcionalidad del sitio. Instrucciones: Chrome, Firefox, Safari, Edge.' },
      { h: '5. Cookies de terceros', p: 'Actualmente no utilizamos cookies de terceros. Si añadimos servicios de análisis o publicidad en el futuro, actualizaremos esta política y solicitaremos su consentimiento.' },
      { h: '6. Actualizaciones', p: 'Podemos actualizar esta Política de Cookies ocasionalmente. La versión más reciente estará siempre disponible en esta página.' },
      { h: '7. Contacto', p: 'Si tiene preguntas sobre nuestro uso de cookies, contáctenos en josemanuelsuarez110@gmail.com' }
    ]
  }
}

export default function Cookies() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-gold hover:text-yellow-400 transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {tr.back}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent-gold/10 border border-accent-gold/30 w-14 h-14 rounded-2xl flex items-center justify-center text-accent-gold">
              <Cookie className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">{tr.title}</h1>
              <p className="text-slate-400 text-sm mt-1">{tr.updated}</p>
            </div>
          </div>

          <div className="space-y-8 mt-12">
            {tr.sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-accent-gold mb-3">{s.h}</h2>
                <p className="text-slate-300 leading-relaxed">{s.p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
