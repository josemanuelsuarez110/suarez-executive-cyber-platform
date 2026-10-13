'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, HeartPulse, Landmark, GraduationCap, Factory, Briefcase, Home } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const sectors = [
  { icon: <Building2 className="w-8 h-8" />, name: { en: 'Banking & Finance', es: 'Banca y Finanzas' } },
  { icon: <ShoppingCart className="w-8 h-8" />, name: { en: 'Retail & Commerce', es: 'Retail y Comercio' } },
  { icon: <HeartPulse className="w-8 h-8" />, name: { en: 'Healthcare', es: 'Salud' } },
  { icon: <Landmark className="w-8 h-8" />, name: { en: 'Government', es: 'Gobierno' } },
  { icon: <GraduationCap className="w-8 h-8" />, name: { en: 'Education', es: 'Educación' } },
  { icon: <Factory className="w-8 h-8" />, name: { en: 'Manufacturing', es: 'Manufactura' } },
  { icon: <Briefcase className="w-8 h-8" />, name: { en: 'Professional Services', es: 'Servicios Profesionales' } },
  { icon: <Home className="w-8 h-8" />, name: { en: 'SMBs & Startups', es: 'Pymes y Startups' } }
]

const t = {
  en: { label: 'Sectors', title1: 'Trusted Across', title2: 'Multiple Industries', subtitle: 'From banking to healthcare, we adapt our services to the specific compliance and operational needs of each sector.' },
  es: { label: 'Sectores', title1: 'Confianza en', title2: 'Múltiples Industrias', subtitle: 'Desde banca hasta salud, adaptamos nuestros servicios a las necesidades específicas de cumplimiento y operación de cada sector.' }
}

export default function Sectors() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="sectores" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-accent-gold font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-gradient-gold">{tr.title2}</span>
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto font-medium leading-relaxed">{tr.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-6 text-center hover:border-accent-gold hover:shadow-[0_20px_60px_rgba(201,162,39,0.15)] hover:-translate-y-1 transition-all group"
            >
              <div className="text-accent-gold bg-accent-gold/10 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent-gold group-hover:text-slate-950 transition-all border border-accent-gold/20">
                {sector.icon}
              </div>
              <p className="font-bold text-white text-sm md:text-base leading-tight">{sector.name[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
