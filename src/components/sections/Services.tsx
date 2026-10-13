'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bug, Lock, GitBranch, Database, Terminal, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const t = {
  en: {
    label: 'Services',
    title1: 'Quality &', title2: 'Security Solutions',
    subtitle: 'Specialized services to ensure the quality, security and reliability of your web applications and APIs.',
    services: [
      { title: 'QA Automation', description: 'End-to-end, regression and integration test automation with Playwright, Selenium, Jest and Postman. Reduced testing time and increased coverage.', features: ['Playwright & Selenium', 'End-to-end tests', 'Automated regression', 'Reports & metrics'] },
      { title: 'API Security Testing', description: 'Security assessment of REST and GraphQL APIs. Detection of OWASP API Top 10 vulnerabilities, authentication and role-based authorization.', features: ['OWASP API Top 10', 'AuthN & AuthZ', 'Endpoint fuzzing', 'Findings reports'] },
      { title: 'Web Pentesting', description: 'Web application penetration testing. Vulnerability identification, control validation and remediation recommendations.', features: ['OWASP Top 10', 'Authentication tests', 'Session analysis', 'Remediation plan'] },
      { title: 'CI/CD Testing Integration', description: 'Integration of automated tests into GitHub Actions and Docker pipelines. Quality gates, smoke tests and reliable deployments.', features: ['GitHub Actions', 'Docker & containers', 'Quality gates', 'Smoke & regression tests'] },
      { title: 'Data Integrity & SQL Validation', description: 'Data integrity validation with SQL and PostgreSQL. Data auditing, access control and transactional consistency.', features: ['SQL validation', 'Data auditing', 'Access control', 'Transactional consistency'] },
      { title: 'QA Consulting & Strategy', description: 'Testing strategy design, test pyramid, quality metrics and adoption of best practices in development teams.', features: ['Test strategy', 'Testing pyramid', 'Quality metrics', 'Team training'] }
    ]
  },
  es: {
    label: 'Servicios',
    title1: 'Soluciones de', title2: 'Calidad & Seguridad',
    subtitle: 'Servicios especializados para asegurar la calidad, la seguridad y la confiabilidad de sus aplicaciones web y APIs.',
    services: [
      { title: 'QA Automation', description: 'Automatización de pruebas end-to-end, regresión e integración con Playwright, Selenium, Jest y Postman. Reducción de tiempo de testing y aumento de cobertura.', features: ['Playwright & Selenium', 'Pruebas end-to-end', 'Regresión automatizada', 'Reportes y métricas'] },
      { title: 'API Security Testing', description: 'Evaluación de seguridad en APIs REST y GraphQL. Detección de vulnerabilidades OWASP API Top 10, autenticación y autorización basada en roles.', features: ['OWASP API Top 10', 'Autenticación & AuthZ', 'Fuzzing de endpoints', 'Reportes de hallazgos'] },
      { title: 'Web Pentesting', description: 'Pruebas de penetración en aplicaciones web. Identificación de vulnerabilidades, validación de controles y recomendaciones de remediación.', features: ['OWASP Top 10', 'Pruebas de autenticación', 'Análisis de sesiones', 'Plan de remediación'] },
      { title: 'CI/CD Testing Integration', description: 'Integración de pruebas automatizadas en pipelines de GitHub Actions y Docker. Quality gates, smoke tests y despliegues confiables.', features: ['GitHub Actions', 'Docker & contenedores', 'Quality gates', 'Smoke & regression tests'] },
      { title: 'Data Integrity & SQL Validation', description: 'Validación de integridad de datos con SQL y PostgreSQL. Auditoría de datos, control de acceso y consistencia transaccional.', features: ['Validación SQL', 'Auditoría de datos', 'Control de acceso', 'Consistencia transaccional'] },
      { title: 'Consultoría QA & Estrategia', description: 'Diseño de estrategias de testing, pirámide de pruebas, métricas de calidad y adopción de buenas prácticas en equipos de desarrollo.', features: ['Test strategy', 'Pirámide de testing', 'Métricas de calidad', 'Capacitación de equipos'] }
    ]
  }
}

const SERVICE_ICONS = [
  <Bug key="0" className="w-8 h-8" />,
  <Lock key="1" className="w-8 h-8" />,
  <ShieldCheck key="2" className="w-8 h-8" />,
  <GitBranch key="3" className="w-8 h-8" />,
  <Database key="4" className="w-8 h-8" />,
  <Terminal key="5" className="w-8 h-8" />
]

export default function Services() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-emerald-500">{tr.title2}</span>
          </h3>
          <p className="text-emerald-950/60 text-xl max-w-3xl mx-auto font-medium">{tr.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tr.services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white border border-emerald-100 rounded-3xl p-8 hover:shadow-[0_30px_80px_rgba(6,78,59,0.15)] hover:border-accent/40 transition-all">
              <div className="text-accent bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                {SERVICE_ICONS[i]}
              </div>
              <h4 className="text-xl font-black text-primary mb-3 tracking-tight">{service.title}</h4>
              <p className="text-emerald-950/60 font-medium text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-emerald-900/70">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {f}
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
