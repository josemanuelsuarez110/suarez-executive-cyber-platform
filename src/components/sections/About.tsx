'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Bug, Lock, GitBranch, Database } from 'lucide-react'

const features = [
  {
    icon: <Bug className="w-6 h-6" />,
    title: 'QA Automation',
    desc: 'Playwright, Selenium, Jest y Postman. Pruebas end-to-end, regresión e integración.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Web & API Security',
    desc: 'Pentesting de aplicaciones web y APIs. Autenticación, autorización basada en roles y regresión de seguridad.'
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'CI/CD & DevOps',
    desc: 'Git, GitHub Actions, Docker, Linux. Integración de pruebas automatizadas en pipelines.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Integrity',
    desc: 'Validación SQL, PostgreSQL y auditoría de datos con visión de tesorería y contabilidad.'
  }
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-6">Nuestra Esencia</h2>
            <h3 className="text-5xl md:text-6xl font-black text-primary mb-10 leading-[1.1] tracking-tighter">
              Calidad, <span className="text-emerald-500">Seguridad</span> y Automatización.
            </h3>
            <p className="text-emerald-950/60 text-xl mb-12 leading-relaxed font-medium">
              Liderado por <strong>José Manuel Suárez</strong>, Ingeniero en Sistemas y QA Automation Engineer con más de
              3 años de experiencia probando aplicaciones web y APIs. Combinamos automatización de pruebas,
              validación SQL e investigación de defectos con formación en pruebas de penetración web, aportando
              una visión práctica a la seguridad de aplicaciones.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex space-x-4 group cursor-default">
                  <div className="text-accent bg-emerald-50 p-3 rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100/50">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary text-lg mb-1 tracking-tight">{f.title}</h4>
                    <p className="text-sm font-medium text-emerald-900/50 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(6,78,59,0.15)] border border-emerald-100/30 group">
              <img
                src="/images/jose-suarez.jpg"
                alt="Workspace Background"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-2xl bg-white/10 p-8 rounded-[2rem] border border-white/20 flex items-center justify-between shadow-2xl">
                  <div>
                    <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Certificación</p>
                    <p className="text-white font-black text-xl tracking-tight">eWPTX · eJPT · eSOC</p>
                  </div>
                  <div className="bg-accent p-4 rounded-2xl text-white shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 -left-10 w-6 h-6 bg-accent rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
