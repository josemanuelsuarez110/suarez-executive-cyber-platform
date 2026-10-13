'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Bug, Lock, GitBranch, Database } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const t = {
  en: {
    label: 'About Us',
    title1: 'One partner for',
    title2: 'all your technology',
    title3: 'needs.',
    desc: 'Suarez Consultoría is led by José Manuel Suárez, Information Systems Engineer and QA Automation Engineer with over 10 years of professional experience across IT support, networking, IP telephony, QA automation and cybersecurity. We bring enterprise-grade solutions to businesses of all sizes, from SMBs to critical infrastructure.',
    features: [
      { title: 'QA & Cybersecurity', desc: 'Automated testing, penetration testing, API security and ISO 27001 compliance.' },
      { title: 'IT Support & Infrastructure', desc: 'Servers, Active Directory, remote & on-site support, backup and cloud services.' },
      { title: 'Networks & Telephony', desc: 'Enterprise LAN/WAN, WiFi, structured cabling, VoIP and analog phone systems.' },
      { title: 'Data Integrity & Compliance', desc: 'SQL validation, PostgreSQL, auditability and regulatory compliance.' }
    ],
    badge: 'Certifications',
    badgeText: '19+ Certifications'
  },
  es: {
    label: 'Nosotros',
    title1: 'Un solo aliado para',
    title2: 'toda su tecnología',
    title3: '.',
    desc: 'Suarez Consultoría es liderada por José Manuel Suárez, Ingeniero en Sistemas de la Información y QA Automation Engineer con más de 10 años de experiencia profesional en soporte IT, redes, telefonía IP, QA automation y ciberseguridad. Llevamos soluciones de nivel empresarial a negocios de todos los tamaños, desde pymes hasta infraestructura crítica.',
    features: [
      { title: 'QA & Ciberseguridad', desc: 'Testing automatizado, pentesting, seguridad de APIs y cumplimiento ISO 27001.' },
      { title: 'Soporte IT & Infraestructura', desc: 'Servidores, Active Directory, soporte remoto y presencial, backup y servicios cloud.' },
      { title: 'Redes & Telefonía', desc: 'LAN/WAN empresarial, WiFi, cableado estructurado, VoIP y centrales analógicas.' },
      { title: 'Integridad de Datos & Cumplimiento', desc: 'Validación SQL, PostgreSQL, auditabilidad y cumplimiento normativo.' }
    ],
    badge: 'Certificaciones',
    badgeText: '19+ Certificaciones'
  }
}

const FEATURE_ICONS = [
  <Bug key="0" className="w-6 h-6" />,
  <Lock key="1" className="w-6 h-6" />,
  <GitBranch key="2" className="w-6 h-6" />,
  <Database key="3" className="w-6 h-6" />
]

export default function About() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="nosotros" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-corporate-blue/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">{tr.label}</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
              {tr.title1} <span className="text-gradient-gold">{tr.title2}</span>{tr.title3}
            </h3>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed font-medium">{tr.desc}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {tr.features.map((f, i) => (
                <div key={i} className="flex space-x-4 group cursor-default">
                  <div className="text-accent-gold bg-accent-gold/10 p-3 rounded-2xl group-hover:bg-accent-gold group-hover:text-slate-950 transition-all duration-300 border border-accent-gold/20">
                    {FEATURE_ICONS[i]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1 tracking-tight">{f.title}</h4>
                    <p className="text-sm font-medium text-slate-400 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group">
              <img src="/images/jose-suarez.jpg" alt="José Manuel Suárez" className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="backdrop-blur-2xl bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-accent-gold uppercase tracking-[0.2em] mb-1">{tr.badge}</p>
                    <p className="text-white font-black text-xl tracking-tight">{tr.badgeText}</p>
                  </div>
                  <div className="bg-accent-gold p-3 rounded-xl text-slate-950">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent-gold/20 blur-[100px] rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
