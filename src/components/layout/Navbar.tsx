'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const navLinks = {
  en: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#nosotros' },
    { name: 'Experience', href: '#experiencia' },
    { name: 'Education', href: '#educacion' },
    { name: 'Services', href: '#servicios' },
    { name: 'Certifications', href: '#certificaciones' },
    { name: 'Contact', href: '#contacto' },
  ],
  es: [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Contacto', href: '#contacto' },
  ]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLanguage()
  const links = navLinks[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6', scrolled ? 'backdrop-blur-xl bg-slate-950/80 shadow-2xl py-4 border-b border-white/10' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-accent-gold rounded-xl flex items-center justify-center shadow-lg shadow-accent-gold/20 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            SUAREZ <span className="text-accent-gold underline decoration-accent-gold/30 decoration-4 underline-offset-4">CONSULTORÍA</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-xs font-bold tracking-widest uppercase transition-all hover:text-accent-gold relative group text-slate-200/90">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-gold transition-all group-hover:w-full" />
            </Link>
          ))}

          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
            <button
              onClick={() => setLang('en')}
              className={cn('px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded transition-all', lang === 'en' ? 'bg-accent-gold text-slate-950' : 'text-emerald-100/60 hover:text-white')}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={cn('px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded transition-all', lang === 'es' ? 'bg-accent-gold text-slate-950' : 'text-emerald-100/60 hover:text-white')}
            >
              ES
            </button>
          </div>

          <button className="bg-accent-gold text-slate-950 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-[0_10px_20px_rgba(201,162,39,0.2)] active:scale-95">
            {lang === 'en' ? 'Book Now' : 'Reservar Cita'}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
            <button
              onClick={() => setLang('en')}
              className={cn('px-2 py-1 text-[10px] font-black rounded', lang === 'en' ? 'bg-accent-gold text-slate-950' : 'text-emerald-100/60')}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={cn('px-2 py-1 text-[10px] font-black rounded', lang === 'es' ? 'bg-accent-gold text-slate-950' : 'text-emerald-100/60')}
            >
              ES
            </button>
          </div>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 shadow-2xl border-t border-white/10 p-8 flex flex-col space-y-5"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-200 hover:text-accent-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-accent-gold text-slate-950 px-5 py-4 rounded-xl text-center font-black uppercase tracking-widest">
              {lang === 'en' ? 'Request Consultation' : 'Solicitar Asesoría'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
