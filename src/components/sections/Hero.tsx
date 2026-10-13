'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight, ShieldCheck, Bug, Terminal, GitBranch, Lock,
  Award, Linkedin, Github, Mail, MapPin, Briefcase, Code, Database, Cpu, Phone, MessageCircle, Server, Network
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const STACK_TAGS = [
  'SDET', 'API Testing', 'Playwright', 'Selenium', 'Python', 'TypeScript',
  'CI/CD', 'GitHub Actions', 'PostgreSQL', 'SQL', 'Docker', 'Linux',
  'FastAPI', 'Next.js', 'Security Testing', 'OWASP', 'Networking', 'IP Telephony'
]

const t = {
  en: {
    badge: 'IT Consulting · QA · Cybersecurity · Networks',
    role: 'IT & Security Consulting Firm',
    location: 'Dominican Republic · Remote Worldwide',
    role2: 'QA Automation, Cybersecurity,',
    role3: 'IT Support & Networks',
    desc: 'Comprehensive IT services: QA automation, web & API security testing, technical support, Active Directory, servers, enterprise networking, WiFi and IP/analog telephony. One partner for your entire technology stack.',
    years: 'Years Exp.',
    certs: 'Certifications',
    services: 'Services',
    contact: 'Request Quote',
    experience: 'View Services',
    stackLabel: 'Tech Stack',
    certLabel: 'Certifications',
    expertise: 'Core Services',
    expertiseSub: '23+ services available',
    online: 'Available now',
    s1: 'QA & Security', s1Sub: 'Automation · Pentesting',
    s2: 'IT Support', s2Sub: 'Servers · Active Directory',
    s3: 'Networks', s3Sub: 'LAN/WAN · WiFi · VPN',
    s4: 'IP Telephony', s4Sub: 'VoIP · Asterisk · 3CX'
  },
  es: {
    badge: 'Consultoría IT · QA · Ciberseguridad · Redes',
    role: 'Firma de Consultoría IT y Seguridad',
    location: 'República Dominicana · Remoto Internacional',
    role2: 'QA Automation, Ciberseguridad,',
    role3: 'Soporte IT y Redes',
    desc: 'Servicios integrales de IT: QA automation, pruebas de seguridad web y API, soporte técnico, Active Directory, servidores, redes empresariales, WiFi y telefonía IP/analógica. Un solo aliado para todo su stack tecnológico.',
    years: 'Años Exp.',
    certs: 'Certificaciones',
    services: 'Servicios',
    contact: 'Solicitar Cotización',
    experience: 'Ver Servicios',
    stackLabel: 'Stack Técnico',
    certLabel: 'Certificaciones',
    expertise: 'Servicios Principales',
    expertiseSub: '23+ servicios disponibles',
    online: 'Disponible ahora',
    s1: 'QA & Seguridad', s1Sub: 'Automation · Pentesting',
    s2: 'Soporte IT', s2Sub: 'Servidores · Active Directory',
    s3: 'Redes', s3Sub: 'LAN/WAN · WiFi · VPN',
    s4: 'Telefonía IP', s4Sub: 'VoIP · Asterisk · 3CX'
  }
}

export default function Hero() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-corporate-blue/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-accent-gold/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,95,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center z-10 w-full relative">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent-gold/10 border border-accent-gold/30 px-4 py-2 rounded-full mb-6 text-accent-gold text-xs font-bold backdrop-blur-md uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>{tr.badge}</span>
          </div>

          {/* Avatar + role */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-accent-gold/40 shadow-2xl shadow-accent-gold/20 flex-shrink-0">
              <img src="/images/jose-suarez.jpg" alt="José Manuel Suárez" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-accent-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{tr.role}</p>
              <p className="text-slate-400 text-xs md:text-sm flex items-center gap-1.5 mt-1">
                <MapPin className="w-3 h-3" /> {tr.location}
              </p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
            {tr.role2} <br />
            <span className="text-gradient-gold">{tr.role3}</span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">{tr.desc}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
            <div className="glass-card p-4 text-center">
              <p className="text-3xl font-black text-accent-gold">10+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{tr.years}</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl font-black text-accent-gold">19+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{tr.certs}</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl font-black text-accent-gold">23+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{tr.services}</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="#contacto" className="bg-accent-gold text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-yellow-500 transition-all group shadow-2xl shadow-accent-gold/30">
              {tr.contact}
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicios" className="glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center">
              {tr.experience}
            </a>
            <div className="flex gap-2">
              <a href="https://linkedin.com/in/josemanuelsuarez2110" target="_blank" rel="noopener noreferrer" className="glass-card text-slate-300 p-4 rounded-xl hover:bg-accent-gold hover:text-slate-950 transition-all flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/josemanuelsuarez2110" target="_blank" rel="noopener noreferrer" className="glass-card text-slate-300 p-4 rounded-xl hover:bg-accent-gold hover:text-slate-950 transition-all flex items-center justify-center" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:josemanuelsuarez110@gmail.com" className="glass-card text-slate-300 p-4 rounded-xl hover:bg-accent-gold hover:text-slate-950 transition-all flex items-center justify-center" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/18095135535" target="_blank" rel="noopener noreferrer" className="glass-card text-slate-300 p-4 rounded-xl hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
            <a href="tel:+18294613778" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <Phone className="w-4 h-4 text-accent-gold" /> +1 829-461-3778
            </a>
            <a href="https://wa.me/18095135535" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <MessageCircle className="w-4 h-4 text-emerald-400" /> +1 809-513-5535
            </a>
            <a href="mailto:josemanuelsuarez110@gmail.com" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <Mail className="w-4 h-4 text-accent-gold" /> josemanuelsuarez110@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block lg:col-span-5">
          <div className="relative z-10 glass-card p-8 rounded-3xl glow-blue">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-corporate-blue/40 flex items-center justify-center text-accent-gold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{tr.expertise}</p>
                  <p className="text-slate-400 text-xs">{tr.expertiseSub}</p>
                </div>
              </div>
              <div className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">{tr.online}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: <Bug />, label: tr.s1, sub: tr.s1Sub },
                { icon: <Server />, label: tr.s2, sub: tr.s2Sub },
                { icon: <Network />, label: tr.s3, sub: tr.s3Sub },
                { icon: <Phone />, label: tr.s4, sub: tr.s4Sub },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 backdrop-blur-xl p-4 rounded-2xl border border-white/5 flex flex-col space-y-2 hover:border-accent-gold/40 transition-colors group">
                  <div className="text-accent-gold group-hover:scale-110 transition-transform w-fit">{item.icon}</div>
                  <div>
                    <p className="text-white font-bold text-[11px] uppercase tracking-wider leading-tight">{item.label}</p>
                    <p className="text-slate-500 text-[10px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-accent-gold" />
                <p className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em]">{tr.stackLabel}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {STACK_TAGS.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold bg-corporate-blue/20 border border-corporate-blue/40 text-blue-300 px-2.5 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-accent-gold" />
                <p className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em]">{tr.certLabel}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['eWPTX', 'eCPPT', 'eJPT', 'eSOC', 'eIAMA', 'CCNP', 'CompTIA+'].map((c) => (
                  <span key={c} className="text-[10px] font-bold bg-accent-gold/10 border border-accent-gold/30 text-accent-gold px-2.5 py-1 rounded-md">{c}</span>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-accent-gold p-4 rounded-2xl shadow-[0_0_30px_rgba(201,162,39,0.5)] animate-bounce text-slate-950">
              <Cpu className="w-7 h-7" />
            </div>
          </div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-corporate-blue/40 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-gold/20 blur-[100px] rounded-full animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  )
}
