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
