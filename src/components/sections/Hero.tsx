'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight, ShieldCheck, Bug, Terminal, GitBranch, Lock,
  Award, Linkedin, Github, Mail, MapPin, Briefcase, Code, Database, Cpu, Phone, MessageCircle
} from 'lucide-react'

const STACK_TAGS = [
  'SDET', 'API Testing', 'E2E Testing', 'Automated Testing',
  'TypeScript', 'JavaScript', 'Python', 'CI/CD', 'GitHub Actions',
  'Software Testing', 'Regression Testing', 'Integration Testing',
  'PostgreSQL', 'SQL', 'Git', 'Linux', 'FastAPI', 'Next.js',
  'Security Testing', 'OWASP'
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#022c22]">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg.png" alt="Cybersecurity Backdrop" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022c22] via-[#022c22]/95 to-[#022c22]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center z-10 w-full">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full mb-6 text-accent text-xs font-black backdrop-blur-md uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>QA Automation Engineer / SDET</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-accent/50 shadow-2xl shadow-accent/40 flex-shrink-0">
              <img
                src="/images/jose-suarez.jpg"
                alt="José Manuel Suárez"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Information Systems Engineer</p>
              <p className="text-emerald-100/60 text-xs md:text-sm flex items-center gap-1.5 mt-1">
                <MapPin className="w-3 h-3" /> Azua, República Dominicana · Remoto
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.05] tracking-tighter">
            José Manuel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Suárez</span>
          </h1>

          <p className="text-lg md:text-xl text-emerald-50/90 font-bold mb-6">
            QA Automation Engineer / SDET &amp; <span className="text-accent">Information Systems Engineer</span>
          </p>

          <p className="text-base md:text-lg text-emerald-100/75 mb-8 max-w-2xl leading-relaxed">
            Más de <strong className="text-accent">3 años de experiencia profesional en QA</strong> abarcando
            automatización, pruebas web y de API, regresión, integración y validación end-to-end. Diseño y
            mantengo escenarios automatizados con <strong className="text-white">Playwright</strong>,
            <strong className="text-white"> Selenium</strong> y <strong className="text-white">Postman</strong>,
            valido REST APIs, ejecuto verificación a nivel de base de datos con SQL y colaboro con equipos
            de desarrollo para reproducir y resolver defectos.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-accent">3+</p>
              <p className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest mt-1">Años QA</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-accent">19+</p>
              <p className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest mt-1">Certificaciones</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-3xl font-black text-accent">20+</p>
              <p className="text-[10px] font-bold text-emerald-100/50 uppercase tracking-widest mt-1">Skills</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="#contacto" className="bg-accent text-white px-8 py-4 rounded-xl font-black flex items-center justify-center hover:bg-emerald-600 transition-all group shadow-2xl shadow-accent/40">
              Contactar
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#experiencia" className="glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center border border-white/20">
              Ver Experiencia
            </a>
            <div className="flex gap-2">
              <a href="https://linkedin.com/in/josemanuelsuarez2110" target="_blank" rel="noopener noreferrer" className="glass-dark text-white p-4 rounded-xl hover:bg-accent transition-all border border-white/20 flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/josemanuelsuarez2110" target="_blank" rel="noopener noreferrer" className="glass-dark text-white p-4 rounded-xl hover:bg-accent transition-all border border-white/20 flex items-center justify-center" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:josemanuelsuarez110@gmail.com" className="glass-dark text-white p-4 rounded-xl hover:bg-accent transition-all border border-white/20 flex items-center justify-center" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/18095135535" target="_blank" rel="noopener noreferrer" className="glass-dark text-white p-4 rounded-xl hover:bg-emerald-500 transition-all border border-white/20 flex items-center justify-center" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Teléfonos debajo */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-emerald-100/60 font-medium">
            <a href="tel:+18294613778" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" /> +1 829-461-3778
            </a>
            <a href="https://wa.me/18095135535" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <MessageCircle className="w-4 h-4 text-emerald-400" /> +1 809-513-5535 <span className="text-[10px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">WhatsApp</span>
            </a>
            <a href="mailto:josemanuelsuarez110@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" /> josemanuelsuarez110@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block lg:col-span-5">
          <div className="relative z-10 glass-dark p-8 rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Core Expertise</p>
                  <p className="text-emerald-100/50 text-xs">20+ skills técnicas</p>
                </div>
              </div>
              <div className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Open to remote</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: <Bug />, label: 'QA Automation', sub: 'SDET mindset' },
                { icon: <Terminal />, label: 'API Testing', sub: 'Postman · REST' },
                { icon: <Database />, label: 'SQL & DB Validation', sub: 'PostgreSQL · RLS' },
                { icon: <Lock />, label: 'Security Testing', sub: 'OWASP · RBAC' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#064e3b]/40 backdrop-blur-xl p-4 rounded-2xl border border-white/5 flex flex-col space-y-2 hover:border-accent/40 transition-colors group">
                  <div className="text-accent group-hover:scale-110 transition-transform w-fit">{item.icon}</div>
                  <div>
                    <p className="text-emerald-50 font-bold text-[11px] uppercase tracking-wider leading-tight">{item.label}</p>
                    <p className="text-emerald-100/40 text-[10px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-accent" />
                <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Stack técnico</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {STACK_TAGS.map((t) => (
                  <span key={t} className="text-[10px] font-bold bg-accent/10 border border-accent/30 text-accent px-2.5 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-accent" />
                <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Certificaciones</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['eWPTX', 'eCPPT', 'eJPT', 'eSOC', 'eIAMA', 'CCNP', 'CompTIA+'].map((c) => (
                  <span key={c} className="text-[10px] font-black bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-md">{c}</span>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-accent p-4 rounded-[1.5rem] shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-bounce text-white">
              <Cpu className="w-7 h-7" />
            </div>
          </div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  )
}
