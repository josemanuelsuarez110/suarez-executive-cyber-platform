'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award, ShieldCheck, Code, Network, Globe, Terminal,
  Activity, Layers, Lock, Bug, X, Eye, ExternalLink
} from 'lucide-react'

type Cert = {
  name: string
  provider: string
  icon: React.ReactNode
  url: string
  proof: string
  date?: string
}

const certs: Cert[] = [
  // ─── INE SECURITY ───
  { name: 'eWPTX — Web Application Penetration Tester eXtreme', provider: 'INE Security', icon: <Lock />, url: 'https://ine.com/', proof: '/images/certs/ine-ewptx.jpg', date: 'Feb 2026' },
  { name: 'eCPPT — Certified Professional Penetration Tester', provider: 'INE Security', icon: <Bug />, url: 'https://ine.com/', proof: '/images/certs/ine-ecppt.jpg', date: '2026' },
  { name: 'eJPT — Junior Penetration Tester', provider: 'INE Security', icon: <Bug />, url: 'https://ine.com/', proof: '/images/certs/ine-ejpt.jpg', date: 'Sep 2026' },
  { name: 'eSOC — Security Operations Certified', provider: 'INE Security', icon: <ShieldCheck />, url: 'https://ine.com/', proof: '/images/certs/ine-esoc.jpg', date: 'Jul 2026' },
  { name: 'eIAMA — Identity & Access Management Associate', provider: 'INE Security', icon: <Lock />, url: 'https://ine.com/', proof: '/images/certs/ine-eiama.jpg', date: 'Oct 2026' },

  // ─── CISCO ───
  { name: 'CCNP Enterprise — Cisco Certified Network Professional', provider: 'Cisco', icon: <Network />, url: 'https://www.cisco.com/', proof: '/images/certs/cisco-ccnp-enterprise.jpg', date: 'Mar 2026' },
  { name: 'Hacker Ético', provider: 'Cisco Networking Academy', icon: <Code />, url: 'https://www.netacad.com/', proof: '/images/certs/ethical-hacker.png' },
  { name: 'Endpoint Security', provider: 'Cisco Networking Academy', icon: <Network />, url: 'https://www.netacad.com/', proof: '/images/certs/endpoint-security-cisco.png' },
  { name: 'Networking Devices & Configuration', provider: 'Cisco Networking Academy', icon: <Globe />, url: 'https://www.netacad.com/', proof: '/images/certs/networking-devices.png' },
  { name: 'Python Essentials 1', provider: 'Cisco Networking Academy', icon: <Terminal />, url: 'https://www.netacad.com/', proof: '/images/certs/python-essentials.png' },

  // ─── COMPTIA ───
  { name: 'CompTIA AutoOps+ — Expansion Series', provider: 'CompTIA', icon: <Terminal />, url: 'https://www.comptia.org/', proof: '/images/certs/comptia-autoops.jpg', date: 'Ene 2026' },

  // ─── CERTIPLUS ───
  { name: 'Cybersecurity Certification Expert', provider: 'Certiplus LLC', icon: <ShieldCheck />, url: 'https://certiplus.com/', proof: '/images/certs/certiplus-cybersecurity-expert.jpg', date: 'Sep 2026' },

  // ─── INDOTEL + BID ───
  { name: 'Ciberseguridad — Nivel Avanzado (80h)', provider: 'INDOTEL · BID · Cymetria', icon: <ShieldCheck />, url: 'https://www.indotel.gob.do/', proof: '/images/certs/indotel-ciberseguridad-avanzado.jpg', date: '2026' },
  { name: 'Ciberseguridad — Nivel Intermedio (80h)', provider: 'INDOTEL · BID · Cymetria', icon: <ShieldCheck />, url: 'https://www.indotel.gob.do/', proof: '/images/certs/indotel-ciberseguridad-intermedio.jpg', date: 'Abr 2026' },

  // ─── SEGURIDAD CERO ───
  { name: 'Camino a la Certificación ISO 27001', provider: 'Seguridad CERO', icon: <ShieldCheck />, url: 'https://seguridadcero.com.pe/', proof: '/images/certs/camino-iso27001.jpg' },
  { name: 'Implementación y Auditoría ISO 27001', provider: 'Seguridad CERO', icon: <ShieldCheck />, url: 'https://seguridadcero.com.pe/', proof: '/images/certs/iso-auditor.jpg' },

  // ─── HP LIFE ───
  { name: 'Flujo de Caja', provider: 'HP LIFE Foundation', icon: <Activity />, url: 'https://www.life-global.org/', proof: '/images/certs/cash-flow.jpg' },
  { name: 'Administración del Inventario', provider: 'HP LIFE Foundation', icon: <Layers />, url: 'https://www.life-global.org/', proof: '/images/certs/inventory-management.jpg' },
  { name: 'Aspectos Básicos de Finanzas', provider: 'HP LIFE Foundation', icon: <Award />, url: 'https://www.life-global.org/', proof: '/images/certs/finance-basics.jpg' },
]

export default function Certifications() {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState<Cert | null>(null)

  return (
    <>
      <section className="py-20 bg-slate-950 text-white" id="certifications">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
            <div className="md:w-1/3">
              <h2 className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4">{lang === 'en' ? 'Professional Backing' : 'Respaldo Profesional'}</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">Evidencia Técnica y Certificada</h3>
              <p className="text-slate-300 leading-relaxed">
                Cada servicio que ofrecemos está respaldado por formación continua y certificaciones de líderes mundiales
                en QA, seguridad ofensiva, redes y ciberseguridad. Haga clic en cualquier certificado para ver el comprobante.
              </p>
              <p className="mt-6 text-accent font-black text-3xl">{certs.length}+</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Certificaciones</p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="glass-card p-6 hover:border-accent-gold/50 transition-all flex flex-col items-center text-center space-y-4 group"
                >
                  <div className="text-accent-gold w-12 h-12 flex items-center justify-center bg-accent-gold/10 rounded-full border border-accent-gold/20 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm block leading-tight">{cert.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">{cert.provider}</p>
                    {cert.date && (
                      <p className="text-[10px] text-accent-gold font-bold mt-1">{cert.date}</p>
                    )}
                  </div>

                  <div className="flex gap-2 w-full pt-2">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-[10px] border border-white/20 py-2 rounded-md hover:bg-white/10 hover:border-accent-gold/50 transition-colors text-center"
                    >
                      Ver Entidad
                    </a>
                    <button
                      onClick={() => setSelected(cert)}
                      className="flex-1 text-[10px] bg-accent-gold text-slate-950 py-2 rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      Ver
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h4 className="text-white font-black text-lg md:text-xl">{selected.name}</h4>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mt-1">
                    {selected.provider} {selected.date && `· ${selected.date}`}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-3 transition-all"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Imagen */}
              <div className="bg-white p-4 md:p-8 flex items-center justify-center max-h-[75vh] overflow-auto">
                <img
                  src={selected.proof}
                  alt={selected.name}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl"
                />
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 flex justify-between items-center">
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
                >
                  Verificar en {selected.provider}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={selected.proof}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest"
                >
                  Abrir en pestaña nueva
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
