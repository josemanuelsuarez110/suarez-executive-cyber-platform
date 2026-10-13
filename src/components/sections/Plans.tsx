'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, MessageCircle, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const WHATSAPP_URL = 'https://wa.me/18095135535?text=' + encodeURIComponent('Hola José, me interesa cotizar un plan mensual de Suarez Consultoría.')

const plans = [
  {
    id: 'basic',
    icon: <Zap className="w-8 h-8" />,
    name: { en: 'Essential', es: 'Esencial' },
    tagline: { en: 'For small businesses', es: 'Para pequeñas empresas' },
    featured: false,
    features: {
      en: [
        'Remote IT support (business hours)',
        'Email & phone support',
        'Monthly preventive maintenance',
        'Antivirus & updates management',
        'Basic network monitoring',
        'Up to 10 devices',
        'Response time: 8 business hours'
      ],
      es: [
        'Soporte IT remoto (horario laboral)',
        'Soporte por email y teléfono',
        'Mantenimiento preventivo mensual',
        'Gestión de antivirus y actualizaciones',
        'Monitoreo básico de red',
        'Hasta 10 dispositivos',
        'Tiempo de respuesta: 8 horas laborables'
      ]
    }
  },
  {
    id: 'pro',
    icon: <Star className="w-8 h-8" />,
    name: { en: 'Professional', es: 'Profesional' },
    tagline: { en: 'Most popular', es: 'Más popular' },
    featured: true,
    features: {
      en: [
        'Everything in Essential',
        'Priority remote support',
        'On-site support (2 visits/month)',
        'Active Directory administration',
        'Server monitoring & maintenance',
        'Backup management',
        'WiFi & network management',
        'Up to 30 devices',
        'Response time: 4 business hours'
      ],
      es: [
        'Todo lo del plan Esencial',
        'Soporte remoto prioritario',
        'Soporte presencial (2 visitas/mes)',
        'Administración de Active Directory',
        'Monitoreo y mantenimiento de servidores',
        'Gestión de backups',
        'Gestión de WiFi y red',
        'Hasta 30 dispositivos',
        'Tiempo de respuesta: 4 horas laborables'
      ]
    }
  },
  {
    id: 'enterprise',
    icon: <Crown className="w-8 h-8" />,
    name: { en: 'Enterprise', es: 'Empresarial' },
    tagline: { en: 'For critical operations', es: 'Para operaciones críticas' },
    featured: false,
    features: {
      en: [
        'Everything in Professional',
        '24/7 emergency support',
        'Unlimited on-site visits',
        'IP telephony management',
        'Advanced network & firewall',
        'Disaster recovery plan',
        'Cybersecurity monitoring',
        'QA & security testing hours',
        'Unlimited devices',
        'Response time: 1 hour'
      ],
      es: [
        'Todo lo del plan Profesional',
        'Soporte de emergencia 24/7',
        'Visitas presenciales ilimitadas',
        'Gestión de telefonía IP',
        'Redes avanzadas y firewall',
        'Plan de recuperación ante desastres',
        'Monitoreo de ciberseguridad',
        'Horas de QA y pruebas de seguridad',
        'Dispositivos ilimitados',
        'Tiempo de respuesta: 1 hora'
      ]
    }
  }
]

const t = {
  en: {
    label: 'Monthly Plans',
    title1: 'Managed IT',
    title2: 'Service Plans',
    subtitle: 'Predictable monthly pricing for ongoing IT, network and security support. No surprises, no hidden fees.',
    mostPopular: 'Most Popular',
    requestQuote: 'Request Quote',
    customTitle: 'Need a custom plan?',
    customDesc: 'We build tailored solutions for enterprises with specific requirements.',
    customBtn: 'Request Custom Plan'
  },
  es: {
    label: 'Planes Mensuales',
    title1: 'Planes de',
    title2: 'Servicio IT Gestionado',
    subtitle: 'Precio mensual predecible para soporte continuo de IT, redes y seguridad. Sin sorpresas, sin costos ocultos.',
    mostPopular: 'Más Popular',
    requestQuote: 'Solicitar Cotización',
    customTitle: '¿Necesitas un plan personalizado?',
    customDesc: 'Diseñamos soluciones a medida para empresas con requerimientos específicos.',
    customBtn: 'Solicitar Plan Personalizado'
  }
}

export default function Plans() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="planes" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent-gold font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-gradient-gold">{tr.title2}</span>
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            {tr.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border ${
                plan.featured
                  ? 'bg-gradient-to-b from-accent-gold/20 to-white/5 border-accent-gold shadow-[0_0_60px_rgba(201,162,39,0.3)] md:-translate-y-4'
                  : 'glass-card hover:border-accent-gold/40'
              } transition-all`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-slate-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {tr.mostPopular}
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.featured ? 'bg-accent-gold text-slate-950' : 'bg-accent-gold/10 text-accent-gold'
              }`}>
                {plan.icon}
              </div>

              <h4 className="text-2xl font-black mb-1">{plan.name[lang]}</h4>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">{plan.tagline[lang]}</p>

              <ul className="space-y-3 mb-8">
                {plan.features[lang].map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                    <Check className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.featured
                    ? 'bg-accent-gold text-slate-950 hover:bg-yellow-500 shadow-lg shadow-accent-gold/30'
                    : 'bg-white/5 text-white hover:bg-accent-gold hover:text-slate-950'
                }`}
              >
                {tr.requestQuote}
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA custom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center glass-card p-10"
        >
          <h4 className="text-2xl md:text-3xl font-black mb-3">{tr.customTitle}</h4>
          <p className="text-slate-400 font-medium mb-8 max-w-2xl mx-auto">{tr.customDesc}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-gold text-slate-950 px-8 py-4 rounded-xl font-black hover:bg-yellow-500 transition-all shadow-2xl shadow-accent-gold/30"
          >
            <MessageCircle className="w-5 h-5" />
            {tr.customBtn}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
