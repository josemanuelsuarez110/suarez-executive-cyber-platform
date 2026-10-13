'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad',
    period: 'Graduado',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    degree: 'Formación continua en Ciberseguridad',
    institution: 'INE Security · Cisco Networking Academy · Seguridad CERO',
    period: 'Actualidad',
    icon: <Award className="w-6 h-6" />
  }
]

export default function Education() {
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
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">Formación</h2>
          <h3 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter">
            Educación &amp; <span className="text-accent">Especialización</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <h4 className="text-xl font-black mb-2">{edu.degree}</h4>
              <p className="text-emerald-100/60 font-medium mb-4">{edu.institution}</p>
              <p className="text-xs font-black text-accent uppercase tracking-widest">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
