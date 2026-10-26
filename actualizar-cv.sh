#!/bin/bash
# ============================================================
# Script de actualización del sitio web Suarez Consultoría
# Actualiza el CV a perfil QA Automation & Security Testing
# ============================================================

set -e  # Detener si hay cualquier error

PROJECT="/home/jose/Escritorio/suarez-consultoria/suarez-executive-cyber-platform"
BACKUP="/home/jose/Escritorio/suarez-consultoria-respaldo-$(date +%Y%m%d-%H%M%S)"

echo "════════════════════════════════════════════════════"
echo "  ACTUALIZACIÓN DE CV - SUAREZ CONSULTORÍA"
echo "════════════════════════════════════════════════════"

# ─── 1. RESPALDO ─────────────────────────────────────────────
echo ""
echo "[1/7] Creando respaldo en: $BACKUP"
cp -r "$PROJECT" "$BACKUP"
echo "✅ Respaldo creado."

# ─── 2. VERIFICAR GIT ────────────────────────────────────────
echo ""
echo "[2/7] Verificando estado de Git..."
cd "$PROJECT"
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️  Hay cambios sin commitear. Guardándolos temporalmente..."
  git stash
  STASHED=1
fi
echo "✅ Git limpio."

# ─── 3. HERO.TSX ─────────────────────────────────────────────
echo ""
echo "[3/7] Escribiendo Hero.tsx..."
cat > src/components/sections/Hero.tsx << 'EOF'
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ShieldCheck, Bug, Terminal, GitBranch, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#022c22]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Cybersecurity Backdrop"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022c22] via-[#022c22]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full mb-8 text-accent text-sm font-bold backdrop-blur-md">
            <ShieldCheck className="w-5 h-5" />
            <span className="tracking-tight uppercase">QA Automation &amp; Security Testing</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            SUAREZ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              SERVICIOS Y ASESORÍA
            </span>
          </h1>
          <p className="text-xl text-emerald-50/80 mb-6 max-w-xl leading-relaxed">
            Consultoría de Élite en <strong className="text-accent">QA Automation</strong>, <strong className="text-accent">Web &amp; API Security Testing</strong>,
            validación SQL e integración CI/CD. Aseguramos la calidad y la seguridad de sus aplicaciones
            con estándares de clase mundial.
          </p>
          <p className="text-sm text-emerald-100/40 mb-10 font-medium uppercase tracking-widest">
            Por José Manuel Suárez — QA Automation Engineer
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contacto"
              className="bg-accent text-white px-10 py-5 rounded-xl font-black flex items-center justify-center hover:bg-emerald-600 transition-all group shadow-2xl shadow-accent/40"
            >
              Solicitar Asesoría
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="glass-dark text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all text-center border-white/20"
            >
              Ver Servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass-dark p-10 rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Bug />, label: 'QA Automation' },
                { icon: <Terminal />, label: 'API Testing' },
                { icon: <Lock />, label: 'Security Testing' },
                { icon: <GitBranch />, label: 'CI/CD Pipeline' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#064e3b]/30 backdrop-blur-xl p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center space-y-4 hover:border-accent/40 transition-colors group">
                  <div className="text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-emerald-50 font-bold text-xs uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute -top-6 -right-6 bg-accent p-6 rounded-[1.5rem] shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-bounce text-white">
              <ShieldCheck className="w-10 h-10" />
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  )
}
EOF
echo "✅ Hero.tsx actualizado."

# ─── 4. ABOUT.TSX ────────────────────────────────────────────
echo ""
echo "[4/7] Escribiendo About.tsx..."
cat > src/components/sections/About.tsx << 'EOF'
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
                src="/images/about-workspace.png"
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
EOF
echo "✅ About.tsx actualizado."

# ─── 5. EXPERIENCE.TSX (NUEVO) ───────────────────────────────
echo ""
echo "[5/7] Creando Experience.tsx..."
cat > src/components/sections/Experience.tsx << 'EOF'
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
EOF
echo "✅ Experience.tsx creado."

# ─── 6. EDUCATION.TSX (NUEVO) ────────────────────────────────
echo ""
echo "[6/7] Creando Education.tsx..."
cat > src/components/sections/Education.tsx << 'EOF'
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
EOF
echo "✅ Education.tsx creado."

# ─── 7. ACTUALIZAR PAGE.TSX ──────────────────────────────────
echo ""
echo "[7/7] Actualizando page.tsx..."
cat > src/app/page.tsx << 'EOF'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Services from '@/components/sections/Services'
import Certifications from '@/components/sections/Certifications'
import Methodology from '@/components/sections/Methodology'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import Leadership from '@/components/sections/Leadership'
import ChatAgent from '@/components/ui/ChatAgent'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Experience />
      <Education />
      <Services />
      <Certifications />
      <Methodology />
      <Blog />
      <Contact />
      <ChatAgent />
      <Footer />
    </main>
  )
}
EOF
echo "✅ page.tsx actualizado."

# ─── 8. ACTUALIZAR NAVBAR.TSX ────────────────────────────────
echo ""
echo "[8/9] Actualizando Navbar.tsx..."
cat > src/components/layout/Navbar.tsx << 'EOF'
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Educación', href: '#educacion' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Certificaciones', href: '#certificaciones' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6',
        scrolled ? 'backdrop-blur-xl bg-[#064e3b]/80 shadow-2xl py-4 border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            SUAREZ <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">CONSULTORÍA</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase transition-all hover:text-accent relative group text-emerald-50/90"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <button className="bg-accent text-white px-7 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-accent/40 active:scale-95">
            Reservar Cita
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#064e3b] shadow-2xl border-t border-white/5 p-8 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-emerald-50 hover:text-accent transition-colors py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-accent text-white px-5 py-4 rounded-xl text-center font-black uppercase tracking-widest">
              Solicitar Asesoría
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
EOF
echo "✅ Navbar.tsx actualizado."

# ─── 9. ACTUALIZAR FOOTER.TSX ────────────────────────────────
echo ""
echo "[9/9] Actualizando Footer.tsx..."
cat > src/components/layout/Footer.tsx << 'EOF'
import React from 'react'
import Link from 'next/link'
import { Shield, Linkedin, Mail, ArrowUpRight, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#011d17] text-emerald-100/60 py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                SUAREZ <span className="text-accent">CONSULTORÍA</span>
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-10 text-emerald-100/40">
              Firma boutique especializada en QA Automation, Web &amp; API Security Testing, validación SQL e integración CI/CD.
            </p>
            <div className="flex space-x-5">
              <Link href="https://linkedin.com/in/josemanuelsuarez2110" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 group shadow-lg">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://github.com/josemanuelsuarez2110" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 group shadow-lg">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="mailto:josemanuelsuarez110@gmail.com" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 group shadow-lg">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Servicios</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['QA Automation', 'API Security', 'Web Pentesting', 'CI/CD Testing'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#servicios" className="hover:text-accent transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-3 group-hover:w-3 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Compañía</h4>
            <ul className="space-y-5 text-sm font-bold">
              {[
                { label: 'Sobre Nosotros', href: '#nosotros' },
                { label: 'Experiencia', href: '#experiencia' },
                { label: 'Educación', href: '#educacion' },
                { label: 'Certificaciones', href: '#certificaciones' },
                { label: 'Contacto', href: '#contacto' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-accent transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-3 group-hover:w-3 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Soporte Senior</h4>
            <p className="text-sm font-medium mb-8 text-emerald-100/40">Consultoría estratégica en QA Automation y seguridad de aplicaciones.</p>
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              <p className="text-[10px] uppercase font-black text-accent mb-3 tracking-[0.3em]">Auditoría Express</p>
              <Link href="#contacto" className="text-lg font-black text-white flex items-center group/link">
                Agendar Ahora
                <ArrowUpRight className="ml-3 w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform text-accent" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.4em] font-black text-emerald-100/20">
          <p>© 2026 SUAREZ SERVICIOS Y ASESORÍA. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            {['Privacidad', 'Términos', 'Cookies'].map((item, idx) => (
              <Link key={idx} href="#" className="hover:text-accent transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
EOF
echo "✅ Footer.tsx actualizado."

# ─── VERIFICAR BUILD ─────────────────────────────────────────
echo ""
echo "════════════════════════════════════════════════════"
echo "  VERIFICANDO BUILD"
echo "════════════════════════════════════════════════════"
npm run build
echo "✅ Build exitoso."

# ─── GIT COMMIT & PUSH ───────────────────────────────────────
echo ""
echo "════════════════════════════════════════════════════"
echo "  COMMIT & PUSH A GITHUB"
echo "════════════════════════════════════════════════════"
git add .
git commit -m "Actualización de CV: QA Automation & Security Testing - nuevas secciones Experiencia y Educación"
git push origin master

echo ""
echo "════════════════════════════════════════════════════"
echo "  ✅ ACTUALIZACIÓN COMPLETADA"
echo "════════════════════════════════════════════════════"
echo ""
echo "Vercel desplegará automáticamente en ~2 minutos."
echo "URL: https://suarez-consultoria-premium-5rffsdhun.vercel.app"
echo ""
echo "Respaldo guardado en: $BACKUP"
