'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X, Check } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const t = {
  en: {
    text: 'We use cookies to enhance your experience. By continuing, you accept our',
    policy: 'Cookie Policy',
    accept: 'Accept',
    reject: 'Reject'
  },
  es: {
    text: 'Usamos cookies para mejorar su experiencia. Al continuar, acepta nuestra',
    policy: 'Política de Cookies',
    accept: 'Aceptar',
    reject: 'Rechazar'
  }
}

export default function CookieBanner() {
  const { lang } = useLanguage()
  const tr = t[lang]
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[90]"
        >
          <div className="glass-card p-5 md:p-6 shadow-2xl shadow-black/50 border-accent-gold/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-accent-gold/10 border border-accent-gold/30 w-10 h-10 rounded-xl flex items-center justify-center text-accent-gold flex-shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {tr.text}{' '}
                <Link href="/cookies" className="text-accent-gold underline hover:text-yellow-400">
                  {tr.policy}
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={reject}
                className="flex-1 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
              >
                {tr.reject}
              </button>
              <button
                onClick={accept}
                className="flex-1 bg-accent-gold hover:bg-yellow-500 text-slate-950 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                {tr.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
