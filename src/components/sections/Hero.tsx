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
