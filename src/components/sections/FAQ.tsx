'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const faqs = [
  {
    q: { en: 'What areas do you cover?', es: '¿Qué zonas cubren?' },
    a: { en: 'We cover the entire Dominican Republic for on-site services and provide remote support internationally. Remote services have no geographic limitation.', es: 'Cubrimos toda la República Dominicana para servicios presenciales y brindamos soporte remoto a nivel internacional. Los servicios remotos no tienen limitación geográfica.' }
  },
  {
    q: { en: 'How fast is your response time?', es: '¿Qué tan rápido responden?' },
    a: { en: 'Response times depend on your plan: 8 business hours (Essential), 4 business hours (Professional) and 1 hour (Enterprise). Emergency support is available 24/7 on Enterprise plans.', es: 'Los tiempos de respuesta dependen del plan: 8 horas laborables (Esencial), 4 horas laborables (Profesional) y 1 hora (Empresarial). El soporte de emergencia 24/7 está disponible en planes Empresariales.' }
  },
  {
    q: { en: 'Do you work with small businesses?', es: '¿Trabajan con pequeñas empresas?' },
    a: { en: 'Absolutely. Our Essential plan is designed for small businesses with up to 10 devices. We scale as you grow.', es: 'Por supuesto. Nuestro plan Esencial está diseñado para pequeñas empresas con hasta 10 dispositivos. Escalamos a medida que creces.' }
  },
  {
    q: { en: 'Can you handle both QA and IT infrastructure?', es: '¿Pueden manejar tanto QA como infraestructura IT?' },
    a: { en: 'Yes. We are one of the few providers that combines software QA, cybersecurity testing, IT support, networking and IP telephony under one roof.', es: 'Sí. Somos uno de los pocos proveedores que combina QA de software, pruebas de ciberseguridad, soporte IT, redes y telefonía IP bajo un mismo techo.' }
  },
  {
    q: { en: 'Do you provide emergency support?', es: '¿Ofrecen soporte de emergencia?' },
    a: { en: 'Yes, on Enterprise plans we offer 24/7 emergency support. For other plans, emergency support is available at an additional hourly rate.', es: 'Sí, en planes Empresariales ofrecemos soporte de emergencia 24/7. Para otros planes, el soporte de emergencia está disponible a una tarifa por hora adicional.' }
  },
  {
    q: { en: 'Do you sign NDAs and service contracts?', es: '¿Firman NDAs y contratos de servicio?' },
    a: { en: 'Yes. We sign NDAs before any engagement and provide formal service contracts with clear SLAs and deliverables.', es: 'Sí. Firmamos NDAs antes de cualquier trabajo y proporcionamos contratos de servicio formales con SLAs claros y entregables definidos.' }
  },
  {
    q: { en: 'What payment methods do you accept?', es: '¿Qué métodos de pago aceptan?' },
    a: { en: 'Bank transfer, credit card and PayPal. Monthly plans are billed at the beginning of each month.', es: 'Transferencia bancaria, tarjeta de crédito y PayPal. Los planes mensuales se facturan al inicio de cada mes.' }
  },
  {
    q: { en: 'Can you migrate our current infrastructure?', es: '¿Pueden migrar nuestra infraestructura actual?' },
    a: { en: 'Yes. We handle migrations from legacy systems to modern infrastructure (on-premise, hybrid or cloud) with minimal downtime.', es: 'Sí. Manejamos migraciones desde sistemas legacy a infraestructura moderna (on-premise, híbrida o en la nube) con mínimo downtime.' }
  }
]

const t = {
  en: { label: 'FAQ', title1: 'Frequently Asked', title2: 'Questions', subtitle: 'Everything you need to know before working with us.', ctaTitle: 'Still have questions?', ctaDesc: 'Reach out and we will get back to you within one business day.', ctaBtn: 'Ask on WhatsApp' },
  es: { label: 'FAQ', title1: 'Preguntas', title2: 'Frecuentes', subtitle: 'Todo lo que necesita saber antes de trabajar con nosotros.', ctaTitle: '¿Aún tiene preguntas?', ctaDesc: 'Contáctenos y le responderemos en un día laborable.', ctaBtn: 'Preguntar por WhatsApp' }
}

const WHATSAPP_URL = 'https://wa.me/18095135535?text=' + encodeURIComponent('Hola José, tengo una pregunta sobre sus servicios.')

export default function FAQ() {
  const { lang } = useLanguage()
  const tr = t[lang]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blue/20 blur-[120px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-accent-gold font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-gradient-gold">{tr.title2}</span>
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium">{tr.subtitle}</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card overflow-hidden hover:border-accent-gold/40 transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-bold text-white text-base md:text-lg leading-tight">{faq.q[lang]}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${open === i ? 'bg-accent-gold text-slate-950 rotate-180' : 'bg-accent-gold/10 text-accent-gold'}`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-300 font-medium leading-relaxed">{faq.a[lang]}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center glass-card p-10"
        >
          <h4 className="text-2xl font-black text-white mb-2">{tr.ctaTitle}</h4>
          <p className="text-slate-400 font-medium mb-6">{tr.ctaDesc}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-gold text-slate-950 px-8 py-4 rounded-xl font-black hover:bg-yellow-500 transition-all shadow-2xl shadow-accent-gold/30"
          >
            <MessageCircle className="w-5 h-5" />
            {tr.ctaBtn}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
