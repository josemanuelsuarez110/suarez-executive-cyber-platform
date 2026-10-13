'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Award, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const Leadership = () => {
  return (
    <section id="liderazgo" className="py-24 relative overflow-hidden bg-[#020808]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#10b981] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#059669] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute -inset-4 border border-[#10b981]/20 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500" />
              <div className="absolute -inset-8 border border-[#10b981]/10 rounded-2xl scale-90 group-hover:scale-110 transition-transform duration-700 delay-75" />
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#051515] border border-[#10b981]/20 shadow-2xl shadow-[#10b981]/5">
                <Image 
                  src="/images/founder.png" 
                  alt="Fundador - Suarez Consultoría"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020808] via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl border border-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-1">Fundador & CEO</h3>
                  <p className="text-[#10b981] font-medium tracking-wide">Experticia en Ciberseguridad e ISO 27001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm font-semibold mb-4">
                VISIÓN Y LIDERAZGO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Liderando la <span className="gradient-text">Seguridad y Estrategia</span> de Próxima Generación
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Con más de una década de experiencia en el sector tecnológico y administrativo, hemos consolidado una visión donde la ciberseguridad no es solo un escudo, sino el motor de crecimiento para las organizaciones modernas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Shield, text: 'Seguridad Integral' },
                { icon: Target, text: 'Enfoque Estratégico' },
                { icon: Award, text: 'Excelencia Certificada' },
                { icon: CheckCircle2, text: 'Cumplimiento Normativo' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-gold/40 transition-colors">
                  <div className="p-2 rounded-lg bg-[#10b981]/10">
                    <item.icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#10b981] pl-6 py-2 italic text-gray-300 text-xl">
              "Mi misión es transformar la complejidad técnica en claridad estratégica para su empresa."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
