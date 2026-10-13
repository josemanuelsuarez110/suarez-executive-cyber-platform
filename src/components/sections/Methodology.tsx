'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { ClipboardCheck, Search, Lightbulb, Wrench, CheckCircle, RefreshCcw } from 'lucide-react'

const steps = [
  { icon: <Search />, title: 'Evaluación Inicial', desc: 'Análisis profundo de su estado actual de seguridad y redes.' },
  { icon: <ClipboardCheck />, title: 'Diagnóstico Técnico', desc: 'Identificación de vulnerabilidades y brechas de cumplimiento.' },
  { icon: <Lightbulb />, title: 'Plan de Acción', desc: 'Diseño de una estrategia personalizada y hoja de ruta de remediación.' },
  { icon: <Wrench />, title: 'Implementación', desc: 'Ejecución técnica de controles, hardening y configuraciones.' },
  { icon: <CheckCircle />, title: 'Pruebas y Validación', desc: 'Verificación rigurosa de que cada control funciona como se espera.' },
  { icon: <RefreshCcw />, title: 'Mejora Continua', desc: 'Monitoreo y ajustes para mantener la resiliencia en el tiempo.' }
]

export default function Methodology() {
  const { lang } = useLanguage()
  return (
    <section id="metodologia" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-6"
          >
            Nuestra Ruta
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-primary mb-10 tracking-tighter"
          >
            Metodología de Trabajo Estructurada
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-900/60 max-w-3xl mx-auto text-xl font-medium leading-relaxed"
          >
            Seguimos un proceso riguroso basado en mejores prácticas internacionales para garantizar resultados medibles y un retorno de inversión tangible.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-emerald-100 to-transparent z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-emerald-50 border-4 border-white shadow-[0_10px_30px_rgba(6,78,59,0.05)] flex items-center justify-center text-accent mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-accent/30 active:scale-95">
                  {React.isValidElement(step.icon) ? React.cloneElement(step.icon as React.ReactElement<any>, { className: 'w-8 h-8' }) : step.icon}
                </div>
                <h4 className="font-black text-primary mb-3 text-lg leading-tight tracking-tight uppercase group-hover:text-accent transition-colors">{step.title}</h4>
                <p className="text-sm font-medium text-emerald-900/40 leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="mt-32 grid md:grid-cols-3 gap-10">
           {[
             { title: 'Reducción de Riesgos', desc: 'Minimizamos la superficie de ataque y el impacto de incidentes potenciales con controles proactivos.' },
             { title: 'Cumplimiento Normativo', desc: 'Aseguramos que su empresa cumpla con estándares legales y certificaciones internacionales como ISO.' },
             { title: 'Infraestructura Estable', desc: 'Redes configuradas bajo estándares de alto rendimiento, escalabilidad y resiliencia.' }
           ].map((benefit, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="bg-[#f0fdf4]/50 p-10 rounded-[2.5rem] border-l-[6px] border-accent shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500"
             >
                <h4 className="text-2xl font-black text-primary mb-4 tracking-tight">{benefit.title}</h4>
                <p className="text-emerald-950/60 text-lg font-medium leading-relaxed">{benefit.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
