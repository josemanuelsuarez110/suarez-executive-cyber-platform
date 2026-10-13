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
    <section id="sectores" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-emerald-500">{tr.title2}</span>
          </h3>
          <p className="text-emerald-950/60 text-lg max-w-3xl mx-auto font-medium leading-relaxed">{tr.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-emerald-100 rounded-2xl p-6 text-center hover:border-accent hover:shadow-[0_20px_60px_rgba(6,78,59,0.12)] hover:-translate-y-1 transition-all group"
            >
              <div className="text-accent bg-emerald-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                {sector.icon}
              </div>
              <p className="font-black text-primary text-sm md:text-base leading-tight">{sector.name[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
