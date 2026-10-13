'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Calendar, ArrowRight, ShieldAlert, Newspaper, Cpu, Globe } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'IA Autónoma en 2026: El Nuevo Paradigma de Defensa Proactiva',
    date: '13 MAR, 2026',
    category: 'Inteligencia Artificial',
    excerpt: 'Análisis de cómo los agentes de IA autónomos están detectando y neutralizando amenazas antes de que ocurran en las infraestructuras críticas.',
    image: '/images/blog-ai-1.png'
  },
  {
    id: 2,
    title: 'Criptografía Post-Cuántica y Redes Neuronales en 2026',
    date: '10 MAR, 2026',
    category: 'Tecnología 2026',
    excerpt: 'La integración de modelos de lenguaje avanzados con sistemas de cifrado cuántico está protegiendo las bases de datos globales de forma inédita.',
    image: '/images/blog-ai-2.png'
  },
  {
    id: 3,
    title: 'Ciudades Inteligentes e IA: Aplicaciones Prácticas y Seguridad',
    date: '05 MAR, 2026',
    category: 'Innovación',
    excerpt: 'Cómo las aplicaciones de IA en 2026 están gestionando desde el tráfico urbano hasta la estabilidad de la red eléctrica con seguridad integrada.',
    image: '/images/blog-ai-3.png'
  }
]

export default function Blog() {
  const { lang } = useLanguage()
  return (
    <section id="blog" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 w-[1000px] h-[600px] bg-accent-gold/10/50 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent-gold/10 px-4 py-2 rounded-full text-accent-gold text-sm font-black mb-6"
          >
            <Cpu className="w-4 h-4" />
            <span className="uppercase tracking-[0.2em]">IA y Noticias 2026</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Noticias de <span className="text-gradient-gold">IA y Seguridad</span> en 2026
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400/50 text-xl max-w-2xl mx-auto font-medium"
          >
            Exploramos el futuro de la tecnología hoy: avances revolucionarios en inteligencia artificial y sus aplicaciones prácticas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-2xl border border-white/10/50">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-accent-gold px-4 py-2 rounded-xl text-slate-950 font-black text-xs uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-emerald-950/40 text-xs font-black uppercase tracking-widest mb-4">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-emerald-200 rounded-full" />
                <span className="flex items-center space-x-1">
                   <ShieldAlert className="w-4 h-4 text-emerald-300" />
                   <span>Verificado por IA</span>
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 leading-tight tracking-tight group-hover:text-accent-gold transition-colors">
                {post.title}
              </h3>

              <p className="text-slate-400/60 font-medium leading-relaxed mb-8 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center text-accent-gold font-black text-sm uppercase tracking-widest group/link">
                <span>Explorar Tendencias</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-[#022c22] to-[#011d17] relative overflow-hidden text-center shadow-[0_40px_80px_rgba(6,78,59,0.2)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          <h3 className="text-4xl font-black text-white mb-6 relative z-10 tracking-tight">
            Sea el primero en conocer el Futuro
          </h3>
          <p className="text-slate-400 mb-10 text-lg font-medium relative z-10 max-w-xl mx-auto">
            Suscríbase para recibir actualizaciones semanales sobre aplicaciones de IA y auditoría continua en 2026.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="boletin@2026.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-accent outline-none transition-all"
            />
            <button className="bg-accent-gold text-slate-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-accent/20">
              Suscripción Pro
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
