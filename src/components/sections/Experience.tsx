'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, ExternalLink, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const experiences = [
  {
    role: { en: 'QA Automation Engineer / SDET', es: 'QA Automation Engineer / SDET' },
    company: { en: 'JMTechLab · Independent Professional', es: 'JMTechLab · Profesional independiente' },
    period: { en: 'Nov 2025 — Present', es: 'Nov 2025 — Presente' },
    location: { en: 'Remote', es: 'Remoto' },
    current: true,
    summary: {
      en: 'Building production-grade QA automation and software engineering projects focused on test automation, API validation, CI/CD and secure software development.',
      es: 'Construyendo proyectos de QA automation e ingeniería de software enfocados en automatización, validación de APIs, CI/CD y desarrollo seguro.'
    },
    bullets: {
      en: [
        'Built QA Sentinel, a full-stack SDET platform demonstrating Playwright E2E automation, API testing and CI/CD quality gates.',
        'Developed automated testing and RBAC validation for an enterprise audit and risk-management platform.',
        'Built QAForge AI, combining QA automation workflows, Playwright, FastAPI, Python and AI-assisted engineering.',
        'Implemented and verified a Zero Trust financial API using JWT authentication, PostgreSQL Row-Level Security and automated authorization testing.',
        'Integrated GitHub Actions quality gates, dependency auditing, secret scanning and production verification into engineering workflows.'
      ],
      es: [
        'Construí QA Sentinel, una plataforma SDET full-stack que demuestra automatización E2E con Playwright, API testing y quality gates en CI/CD.',
        'Desarrollé testing automatizado y validación RBAC para una plataforma empresarial de auditoría y gestión de riesgos.',
        'Construí QAForge AI, combinando flujos de QA automation, Playwright, FastAPI, Python e ingeniería asistida por IA.',
        'Implementé y verifiqué una API financiera Zero Trust con autenticación JWT, Row-Level Security en PostgreSQL y testing automatizado de autorización.',
        'Integré quality gates de GitHub Actions, auditoría de dependencias, escaneo de secretos y verificación en producción en los flujos de ingeniería.'
      ]
    },
    tech: ['Playwright', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'Next.js', 'React', 'PostgreSQL', 'Supabase', 'Neon', 'Express', 'Jest', 'GitHub Actions', 'Linux']
  },
  {
    role: { en: 'QA Analyst', es: 'QA Analyst' },
    company: { en: 'SIMELER INTERNATIONAL', es: 'SIMELER INTERNATIONAL' },
    period: { en: 'Nov 2022 — Dec 2025', es: 'Nov 2022 — Dic 2025' },
    location: { en: 'Santo Domingo, DR · Remote', es: 'Santo Domingo, RD · Remoto' },
    current: false,
    summary: {
      en: 'Manual and automated software testing across web applications and APIs within Agile/Scrum development environments.',
      es: 'Testing manual y automatizado en aplicaciones web y APIs dentro de entornos de desarrollo Agile/Scrum.'
    },
    bullets: {
      en: [
        'Performed manual and automated software testing across web applications and APIs within Agile/Scrum development environments.',
        'Designed, developed and maintained automated test scenarios using Playwright and Selenium.',
        'Executed REST API testing and validation using Postman.',
        'Performed functional, regression, integration and end-to-end testing throughout the software development lifecycle.',
        'Used SQL to validate application data and investigate discrepancies between frontend, API and database behavior.',
        'Worked with JavaScript and Python in test automation and supporting QA workflows.',
        'Participated in CI/CD-based quality processes and used Git for version control and collaborative development.',
        'Tracked defects, test activities and development workflows using Jira.',
        'Collaborated with developers and other team members to reproduce defects, validate fixes and improve software quality.'
      ],
      es: [
        'Ejecuté testing manual y automatizado en aplicaciones web y APIs dentro de entornos Agile/Scrum.',
        'Diseñé, desarrollé y mantuve escenarios de prueba automatizados con Playwright y Selenium.',
        'Ejecuté pruebas y validación de REST APIs con Postman.',
        'Realicé pruebas funcionales, de regresión, integración y end-to-end durante todo el ciclo de vida del software.',
        'Usé SQL para validar datos de aplicación e investigar discrepancias entre frontend, API y base de datos.',
        'Trabajé con JavaScript y Python en automatización de pruebas y flujos de QA.',
        'Participé en procesos de calidad basados en CI/CD y usé Git para control de versiones y desarrollo colaborativo.',
        'Gestioné defectos, actividades de testing y flujos de desarrollo con Jira.',
        'Colaboré con desarrolladores y otros miembros del equipo para reproducir defectos, validar fixes y mejorar la calidad del software.'
      ]
    },
    tech: ['Playwright', 'Selenium', 'Postman', 'JavaScript', 'Python', 'SQL', 'Git', 'Jira', 'CI/CD', 'Agile/Scrum']
  },
  {
    role: { en: 'Treasury Administrator', es: 'Administrador Tesorero' },
    company: { en: 'Liga Municipal Dominicana', es: 'Liga Municipal Dominicana' },
    period: { en: 'Apr 2020 — Aug 2026', es: 'Abr 2020 — Ago 2026' },
    location: { en: 'Dominican Republic', es: 'República Dominicana' },
    current: false,
    summary: {
      en: 'Administrative and treasury management in a public institution, with emphasis on internal controls, auditing and financial information systems.',
      es: 'Gestión administrativa y de tesorería en institución pública, con énfasis en controles internos, auditoría y sistemas de información financiera.'
    },
    bullets: {
      en: [
        'Administrative and treasury management in a public institution focused on internal controls and traceability.',
        'Management of financial information systems and data integrity validation.',
        'Coordination of audit reports and regulatory compliance.',
        'Collaboration with multidisciplinary teams in digitalization and process improvement.'
      ],
      es: [
        'Gestión administrativa y de tesorería en institución pública con foco en controles internos y trazabilidad.',
        'Administración de sistemas de información financiera y validación de integridad de datos.',
        'Coordinación de reportes para auditoría y cumplimiento normativo.',
        'Colaboración con equipos multidisciplinarios en digitalización y mejora de procesos.'
      ]
    },
    tech: ['SQL', 'Excel', 'ERP', 'Auditoría', 'Contabilidad', 'Controles Internos', 'Tesorería']
  },
  {
    role: { en: 'Area Manager', es: 'Gerente de Área' },
    company: { en: 'Empresas P & aB', es: 'Empresas P & aB' },
    period: { en: 'Oct 2014 — Feb 2019', es: 'Oct 2014 — Feb 2019' },
    location: { en: 'Dominican Republic', es: 'República Dominicana' },
    current: false,
    summary: {
      en: 'Operational area management focused on administrative processes, resource control and team leadership.',
      es: 'Gestión de área operativa con enfoque en procesos administrativos, control de recursos y liderazgo de equipos.'
    },
    bullets: {
      en: [
        'Management and supervision of assigned area operations.',
        'Resource, budget and management report control.',
        'Team leadership and coordination of administrative processes.',
        'Implementation of operational improvements and KPI tracking.'
      ],
      es: [
        'Gestión y supervisión de operaciones del área asignada.',
        'Control de recursos, presupuestos y reportes de gestión.',
        'Liderazgo de equipos y coordinación de procesos administrativos.',
        'Implementación de mejoras operativas y seguimiento de indicadores.'
      ]
    },
    tech: ['Gestión de Equipos', 'Administración', 'Presupuestos', 'Reportes', 'Excel']
  }
]

const t = {
  en: {
    label: 'Career',
    title1: 'Professional',
    title2: 'Experience',
    subtitle: 'Over 10 years of professional experience combining QA Automation, software engineering, administration and management in public and private environments.',
    currentLabel: 'Current role',
    techLabel: 'Technologies & tools',
    ctaTitle: 'Engineering portfolio',
    ctaDesc: 'QA Sentinel · QAForge AI · Zero Trust API · Enterprise Audit Platform',
    ctaBtn: 'Visit JMTechLab'
  },
  es: {
    label: 'Trayectoria',
    title1: 'Experiencia',
    title2: 'Profesional',
    subtitle: 'Más de 10 años de trayectoria profesional combinando QA Automation, ingeniería de software, administración y gestión en entornos públicos y privados.',
    currentLabel: 'Rol actual',
    techLabel: 'Tecnologías y herramientas',
    ctaTitle: 'Portafolio de ingeniería',
    ctaDesc: 'QA Sentinel · QAForge AI · Zero Trust API · Enterprise Audit Platform',
    ctaBtn: 'Visitar JMTechLab'
  }
}

export default function Experience() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <section id="experiencia" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-emerald-500">{tr.title2}</span>
          </h3>
          <p className="text-emerald-950/60 text-lg max-w-3xl mx-auto font-medium leading-relaxed">{tr.subtitle}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                <div className={`hidden md:flex absolute left-0 top-2 w-12 h-12 rounded-2xl items-center justify-center border-4 border-white shadow-xl ${exp.current ? 'bg-accent' : 'bg-emerald-700'}`}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>

                <div className="bg-white border border-emerald-100 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(6,78,59,0.08)] hover:shadow-[0_30px_80px_rgba(6,78,59,0.15)] transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div className="flex-1">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full mb-3">
                          <TrendingUp className="w-3 h-3" /> {tr.currentLabel}
                        </span>
                      )}
                      <h4 className="text-2xl md:text-3xl font-black text-primary tracking-tight">{exp.role[lang]}</h4>
                      <p className="text-accent font-bold mt-1 text-lg">{exp.company[lang]}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm font-bold text-emerald-900/60 flex-shrink-0">
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {exp.period[lang]}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {exp.location[lang]}</span>
                    </div>
                  </div>

                  <p className="text-emerald-950/70 font-medium mb-6 leading-relaxed">{exp.summary[lang]}</p>

                  <ul className="space-y-3 mb-8">
                    {exp.bullets[lang].map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-emerald-950/75 font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-emerald-100">
                    <p className="text-[10px] font-black text-emerald-900/40 uppercase tracking-[0.2em] mb-3">{tr.techLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, k) => (
                        <span key={k} className="text-xs font-bold bg-emerald-50 border border-emerald-100 text-emerald-900/70 px-3 py-1.5 rounded-lg">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6">
              <Award className="w-8 h-8 text-accent" />
              <div className="text-center md:text-left">
                <p className="font-black text-primary text-lg">{tr.ctaTitle}</p>
                <p className="text-emerald-900/60 text-sm font-medium">{tr.ctaDesc}</p>
              </div>
              <a href="https://jmtechlab.do" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-6 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-emerald-600 transition-all whitespace-nowrap">
                {tr.ctaBtn}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
