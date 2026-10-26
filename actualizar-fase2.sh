#!/bin/bash
set -e

PROJECT="/home/jose/Escritorio/suarez-consultoria/suarez-executive-cyber-platform"
BACKUP="/home/jose/Escritorio/suarez-consultoria-respaldo-fase2-$(date +%Y%m%d-%H%M%S)"

echo "════════════════════════════════════════════════════"
echo "  FASE 2: CERTIFICATIONS · SERVICES · CONTACT"
echo "════════════════════════════════════════════════════"

cp -r "$PROJECT" "$BACKUP"
echo "✅ Respaldo en: $BACKUP"

cd "$PROJECT"

# ─── 1. CERTIFICATIONS.TSX ───────────────────────────────────
echo "[1/3] Actualizando Certifications.tsx..."
cat > src/components/sections/Certifications.tsx << 'CERTEOF'
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle, ShieldCheck, Cpu, Code, Network, Globe, Terminal, Activity, Layers, Lock, Bug } from 'lucide-react'

const certs = [
  {
    name: 'Web Application Penetration Tester eXtreme (eWPTX)',
    provider: 'INE Security',
    icon: <Lock />,
    url: 'https://ine.com/',
    proof: '#'
  },
  {
    name: 'Junior Penetration Tester (eJPT)',
    provider: 'INE Security',
    icon: <Bug />,
    url: 'https://ine.com/',
    proof: '#'
  },
  {
    name: 'Security Operations Certified (eSOC)',
    provider: 'INE Security',
    icon: <ShieldCheck />,
    url: 'https://ine.com/',
    proof: '#'
  },
  {
    name: 'Camino a la Certificación ISO 27001',
    provider: 'Seguridad CERO',
    icon: <ShieldCheck />,
    url: 'https://seguridadcero.com.pe/',
    proof: '/images/certs/camino-iso27001.jpg'
  },
  {
    name: 'Hacker Ético',
    provider: 'Cisco Networking Academy',
    icon: <Code />,
    url: 'https://www.netacad.com/',
    proof: '/images/certs/ethical-hacker.png'
  },
  {
    name: 'Endpoint Security',
    provider: 'Cisco Networking Academy',
    icon: <Network />,
    url: 'https://www.netacad.com/',
    proof: '/images/certs/endpoint-security-cisco.png'
  },
  {
    name: 'Conceptos Básicos de Redes',
    provider: 'Cisco Networking Academy',
    icon: <Globe />,
    url: 'https://www.netacad.com/',
    proof: '/images/certs/conceptos-redes.jpg'
  },
  {
    name: 'Networking Devices & Configuration',
    provider: 'Cisco Networking Academy',
    icon: <Cpu />,
    url: 'https://www.netacad.com/',
    proof: '/images/certs/networking-devices.png'
  },
  {
    name: 'Python Essentials 1',
    provider: 'Cisco Networking Academy',
    icon: <Terminal />,
    url: 'https://www.netacad.com/',
    proof: '/images/certs/python-essentials.png'
  },
  {
    name: 'Implementación y Auditoría ISO 27001',
    provider: 'Seguridad CERO',
    icon: <ShieldCheck />,
    url: 'https://seguridadcero.com.pe/',
    proof: '/images/certs/iso-auditor.jpg'
  },
  {
    name: 'Flujo de Caja',
    provider: 'HP LIFE Foundation',
    icon: <Activity />,
    url: 'https://www.life-global.org/',
    proof: '/images/certs/cash-flow.jpg'
  },
  {
    name: 'Administración del Inventario',
    provider: 'HP LIFE Foundation',
    icon: <Layers />,
    url: 'https://www.life-global.org/',
    proof: '/images/certs/inventory-management.jpg'
  },
  {
    name: 'Aspectos Básicos de Finanzas',
    provider: 'HP LIFE Foundation',
    icon: <Award />,
    url: 'https://www.life-global.org/',
    proof: '/images/certs/finance-basics.jpg'
  }
]

export default function Certifications() {
  return (
    <section className="py-20 bg-primary text-white" id="certifications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Respaldo Profesional</h2>
            <h3 className="text-4xl font-bold mb-6">Evidencia Técnica y Certificada</h3>
            <p className="text-slate-400">
              Cada servicio que ofrecemos está respaldado por formación continua y certificaciones de líderes mundiales en QA, seguridad ofensiva, redes y ciberseguridad.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-accent/50 transition-all flex flex-col items-center text-center space-y-4 group"
              >
                <div className="text-accent w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm block leading-tight">{cert.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">{cert.provider}</p>
                </div>

                <div className="flex gap-2 w-full pt-2">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-[10px] border border-white/20 py-2 rounded-md hover:bg-white/10 transition-colors"
                  >
                    Ver Entidad
                  </a>
                  {cert.proof !== '#' && (
                    <a
                      href={cert.proof}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-[10px] bg-accent text-white py-2 rounded-md hover:bg-accent/80 transition-colors"
                    >
                      Ver Comprobante
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
CERTEOF
echo "✅ Certifications.tsx"

# ─── 2. SERVICES.TSX ─────────────────────────────────────────
echo "[2/3] Actualizando Services.tsx..."
cat > src/components/sections/Services.tsx << 'SERVEOF'
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bug, Lock, GitBranch, Database, Terminal, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: <Bug className="w-8 h-8" />,
    title: 'QA Automation',
    description: 'Automatización de pruebas end-to-end, regresión e integración con Playwright, Selenium, Jest y Postman. Reducción de tiempo de testing y aumento de cobertura.',
    features: ['Playwright & Selenium', 'Pruebas end-to-end', 'Regresión automatizada', 'Reportes y métricas']
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'API Security Testing',
    description: 'Evaluación de seguridad en APIs REST y GraphQL. Detección de vulnerabilidades OWASP API Top 10, autenticación y autorización basada en roles.',
    features: ['OWASP API Top 10', 'Autenticación & AuthZ', 'Fuzzing de endpoints', 'Reportes de hallazgos']
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Web Pentesting',
    description: 'Pruebas de penetración en aplicaciones web. Identificación de vulnerabilidades, validación de controles y recomendaciones de remediación.',
    features: ['OWASP Top 10', 'Pruebas de autenticación', 'Análisis de sesiones', 'Plan de remediación']
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'CI/CD Testing Integration',
    description: 'Integración de pruebas automatizadas en pipelines de GitHub Actions y Docker. Quality gates, smoke tests y despliegues confiables.',
    features: ['GitHub Actions', 'Docker & contenedores', 'Quality gates', 'Smoke & regression tests']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Integrity & SQL Validation',
    description: 'Validación de integridad de datos con SQL y PostgreSQL. Auditoría de datos, control de acceso y consistencia transaccional.',
    features: ['Validación SQL', 'Auditoría de datos', 'Control de acceso', 'Consistencia transaccional']
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'Consultoría QA & Estrategia',
    description: 'Diseño de estrategias de testing, pirámide de pruebas, métricas de calidad y adopción de buenas prácticas en equipos de desarrollo.',
    features: ['Test strategy', 'Pirámide de testing', 'Métricas de calidad', 'Capacitación de equipos']
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">Servicios</h2>
          <h3 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            Soluciones de <span className="text-emerald-500">Calidad &amp; Seguridad</span>
          </h3>
          <p className="text-emerald-950/60 text-xl max-w-3xl mx-auto font-medium">
            Servicios especializados para asegurar la calidad, la seguridad y la confiabilidad de sus aplicaciones web y APIs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-emerald-100 rounded-3xl p-8 hover:shadow-[0_30px_80px_rgba(6,78,59,0.15)] hover:border-accent/40 transition-all"
            >
              <div className="text-accent bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-primary mb-3 tracking-tight">{service.title}</h4>
              <p className="text-emerald-950/60 font-medium text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-emerald-900/70">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {f}
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
SERVEOF
echo "✅ Services.tsx"

# ─── 3. CONTACT.TSX ──────────────────────────────────────────
echo "[3/3] Actualizando Contact.tsx..."
cat > src/components/sections/Contact.tsx << 'CONTEOF'
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'josemanuelsuarez110@gmail.com', href: 'mailto:josemanuelsuarez110@gmail.com' },
  { icon: <Phone className="w-6 h-6" />, label: 'Teléfono', value: '+1 829-461-3778', href: 'tel:+18294613778' },
  { icon: <MapPin className="w-6 h-6" />, label: 'Ubicación', value: 'Azua, República Dominicana', href: '#' },
  { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', value: 'josemanuelsuarez2110', href: 'https://linkedin.com/in/josemanuelsuarez2110' },
  { icon: <Github className="w-6 h-6" />, label: 'GitHub', value: 'josemanuelsuarez2110', href: 'https://github.com/josemanuelsuarez2110' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">Contacto</h2>
          <h3 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-6">
            Hablemos de <span className="text-accent">su proyecto</span>
          </h3>
          <p className="text-emerald-100/60 text-xl max-w-2xl mx-auto font-medium">
            ¿Necesita QA Automation, pentesting de APIs o auditoría de seguridad? Conversemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent/40 transition-all group"
              >
                <div className="text-accent bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="font-bold text-white">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-black">¡Mensaje enviado!</h4>
                <p className="text-emerald-100/60 font-medium">Le responderé a la brevedad posible.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-bold text-sm hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2 block">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-emerald-100/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Su nombre completo"
                  />
                </div>
                <div>
                  <label className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-emerald-100/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder="su@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2 block">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-emerald-100/30 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Cuénteme sobre su proyecto…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {loading ? 'Enviando…' : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
CONTEOF
echo "✅ Contact.tsx"

# ─── BUILD, COMMIT Y PUSH ────────────────────────────────────
echo ""
echo "Verificando build..."
npm run build
echo "✅ Build exitoso."

echo ""
echo "Commit & push..."
git add .
git commit -m "Fase 2: Certifications (INE Security), Services QA/Security y Contact actualizado"
git push origin master

echo ""
echo "════════════════════════════════════════════════════"
echo "  ✅ FASE 2 COMPLETADA"
echo "════════════════════════════════════════════════════"
echo "Respaldo: $BACKUP"
