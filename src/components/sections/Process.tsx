'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, ClipboardList, Rocket, CheckCircle2, Headphones } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const steps = [
  { icon: <Search className="w-7 h-7" />, num: '01', title: { en: 'Discovery', es: 'Descubrimiento' }, desc: { en: 'We analyze your current infrastructure, needs and pain points to understand the full picture.', es: 'Analizamos su infraestructura actual, necesidades y puntos de dolor para entender el panorama completo.' } },
  { icon: <ClipboardList className="w-7 h-7" />, num: '02', title: { en: 'Proposal', es: 'Propuesta' }, desc: { en: 'You receive a detailed proposal with scope, timelines and pricing. No surprises.', es: 'Recibe una propuesta detallada con alcance, tiempos y precios. Sin sorpresas.' } },
  { icon: <Rocket className="w-7 h-7" />, num: '03', title: { en: 'Implementation', es: 'Implementación' }, desc: { en: 'We deploy the solution, configure systems and migrate data with minimal disruption.', es: 'Desplegamos la solución, configuramos sistemas y migramos datos con mínima interrupción.' } },
  { icon: <CheckCircle2 className="w-7 h-7" />, num: '04', title: { en: 'Validation', es: 'Validación' }, desc: { en: 'Every delivery goes through rigorous testing: functionality, performance and security.', es: 'Cada entrega pasa por pruebas rigurosas: funcionalidad, rendimiento y seguridad.' } },
  { icon: <Headphones className="w-7 h-7" />, num: '05', title: { en: 'Support', es: 'Soporte' }, desc: { en: 'Continuous support, monitoring and maintenance to keep everything running smoothly.', es: 'Soporte continuo, monitoreo y mantenimiento para mantener todo funcionando sin problemas.' } }
]

const t = {
  en: { label: 'How We Work', title1: 'A Proven', title2: 'Methodology', subtitle: 'From first contact to ongoing support, a clear process designed to minimize risk and maximize results.' },
  es: { label: 'Cómo Trabajamos', title1: 'Una Metodología', title2: 'Probada', subtitle: 'Desde el primer contacto hasta el soporte continuo, un proceso claro diseñado para minimizar riesgos y maximizar resultados.' }
}

export default function Process() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-emerald-500">{tr.title2}</span>
          </h3>
          <p className="text-emerald-950/60 text-lg max-w-3xl mx-auto font-medium leading-relaxed">{tr.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
              )}
              <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center text-white shadow-xl shadow-accent/30 mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-white">
                  {step.num}
                </span>
              </div>
              <h4 className="text-lg font-black text-primary mb-2 tracking-tight">{step.title[lang]}</h4>
              <p className="text-emerald-950/60 font-medium text-sm leading-relaxed">{step.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
