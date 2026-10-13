'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Educación', href: '#educacion' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Certificaciones', href: '#certificaciones' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6',
        scrolled ? 'backdrop-blur-xl bg-[#064e3b]/80 shadow-2xl py-4 border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            SUAREZ <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">CONSULTORÍA</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase transition-all hover:text-accent relative group text-emerald-50/90"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <button className="bg-accent text-white px-7 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-accent/40 active:scale-95">
            Reservar Cita
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#064e3b] shadow-2xl border-t border-white/5 p-8 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-emerald-50 hover:text-accent transition-colors py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-accent text-white px-5 py-4 rounded-xl text-center font-black uppercase tracking-widest">
              Solicitar Asesoría
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
