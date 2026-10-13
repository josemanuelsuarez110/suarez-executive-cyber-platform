'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const education = [
  {
    degree: {
      en: 'B.Sc. in Information Systems Engineering',
      es: 'Ingeniería en Sistemas de la Información'
    },
    institution: {
      en: 'Universidad APEC (UNAPEC)',
      es: 'Universidad APEC (UNAPEC)'
    },
    location: {
      en: 'Santo Domingo, Dominican Republic',
      es: 'Santo Domingo, República Dominicana'
    },
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    degree: {
      en: 'B.A. in Accounting',
      es: 'Licenciatura en Contabilidad'
    },
    institution: {
      en: 'Universidad Federico Henríquez y Carvajal (UFHEC)',
      es: 'Universidad Federico Henríquez y Carvajal (UFHEC)'
    },
    location: {
      en: 'Dominican Republic',
      es: 'República Dominicana'
    },
    icon: <Award className="w-6 h-6" />
  }
]

const t = {
  en: {
    label: 'Education',
    title1: 'Academic',
    title2: 'Background',
    subtitle: 'Dual degree in Engineering and Accounting, combining technical and financial vision.'
  },
  es: {
    label: 'Formación',
    title1: 'Formación',
    title2: 'Académica',
    subtitle: 'Doble titulación en Ingeniería y Contabilidad, combinando visión técnica y financiera.'
  }
}

export default function Education() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="educacion" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-accent">{tr.title2}</span>
          </h3>
          <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto font-medium">
            {tr.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all"
            >
              <div className="text-accent bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                {edu.icon}
              </div>
              <h4 className="text-xl font-black mb-2 leading-tight">{edu.degree[lang]}</h4>
              <p className="text-emerald-100/70 font-bold mb-2">{edu.institution[lang]}</p>
              <p className="text-xs text-emerald-100/40 font-medium uppercase tracking-widest">{edu.location[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
