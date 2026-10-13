'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'josemanuelsuarez110@gmail.com',
    href: 'mailto:josemanuelsuarez110@gmail.com'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Teléfono',
    value: '+1 829-461-3778',
    href: 'tel:+18294613778'
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: 'WhatsApp',
    value: '+1 809-513-5535',
    href: 'https://wa.me/18095135535'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Ubicación',
    value: 'Azua, República Dominicana',
    href: '#'
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'josemanuelsuarez2110',
    href: 'https://linkedin.com/in/josemanuelsuarez2110'
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    value: 'josemanuelsuarez2110',
    href: 'https://github.com/josemanuelsuarez2110'
  },
]

export default function Contact() {
  const { lang } = useLanguage()
  const tr = (en: string, es: string) => lang === 'en' ? en : es
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
            {tr('Let\'s talk about ', 'Hablemos de ')}<span className="text-accent">{tr('your project', 'su proyecto')}</span>
          </h3>
          <p className="text-emerald-100/60 text-xl max-w-2xl mx-auto font-medium">
            {tr('Need QA Automation, API pentesting or security auditing? Let\'s talk.', '¿Necesita QA Automation, pentesting de APIs o auditoría de seguridad? Conversemos.')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-accent/40 transition-all group"
              >
                <div className="text-accent bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-0.5">{info.label}</p>
                  <p className="font-bold text-white text-sm truncate">{info.value}</p>
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
                <h4 className="text-2xl font-black">{tr('Message sent!', '¡Mensaje enviado!')}</h4>
                <p className="text-emerald-100/60 font-medium">{tr('I will reply as soon as possible.', 'Le responderé a la brevedad posible.')}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-bold text-sm hover:underline"
                >
                  {tr('Send another message', 'Enviar otro mensaje')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2 block">{tr('Name', 'Nombre')}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-emerald-100/30 focus:outline-none focus:border-accent transition-colors"
                    placeholder={tr('Your full name', 'Su nombre completo')}
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
                  <label className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2 block">{tr('Message', 'Mensaje')}</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-emerald-100/30 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder={tr('Tell me about your project…', 'Cuénteme sobre su proyecto…')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {loading ? tr('Sending…', 'Enviando…') : (
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
