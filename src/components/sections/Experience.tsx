'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'QA Automation Engineer',
    company: 'Proyectos independientes & clientes',
    period: '2023 — Presente',
    location: 'República Dominicana',
    bullets: [
      'Diseño y ejecuto pruebas automatizadas para aplicaciones web y APIs usando Playwright, Selenium y Postman.',
      'Implemento validaciones SQL y pruebas de regresión para garantizar integridad de datos.',
      'Colaboro con equipos de desarrollo en CI/CD (GitHub Actions, Docker) para integrar pruebas en el pipeline.',
      'Realizo pruebas de seguridad en APIs y aplicaciones web (autenticación, autorización basada en roles).'
    ]
  },
  {
    role: 'Analista de Sistemas / Tesorería',
    company: 'Institución financiera',
    period: '2020 — 2023',
    location: 'República Dominicana',
    bullets: [
      'Gestioné sistemas de información institucional con foco en controles de acceso y auditoría.',
      'Apliqué conocimientos contables y de tesorería para validar integridad de datos financieros.',
      'Coordiné la implementación de controles internos y reportes para auditoría.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">Trayectoria</h2>
          <h3 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
            Experiencia <span className="text-emerald-500">Profesional</span>
          </h3>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-white border border-emerald-100 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(6,78,59,0.08)] hover:shadow-[0_30px_80px_rgba(6,78,59,0.15)] transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                  <h4 className="text-2xl font-black text-primary tracking-tight flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-accent" />
                    {exp.role}
                  </h4>
                  <p className="text-accent font-bold mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm font-bold text-emerald-900/60">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {exp.period}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {exp.location}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-emerald-950/70 font-medium">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
