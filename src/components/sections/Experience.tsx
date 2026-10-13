'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, ExternalLink, Award } from 'lucide-react'

const experiences = [
  {
    role: 'QA Automation Engineer / SDET',
    company: 'JMTechLab · Profesional independiente',
    period: 'Nov 2025 — Presente',
    location: 'Remoto',
    current: true,
    summary: 'Building production-grade QA automation and software engineering projects focused on test automation, API validation, CI/CD and secure software development.',
    bullets: [
      'Built QA Sentinel, a full-stack SDET platform demonstrating Playwright E2E automation, API testing and CI/CD quality gates.',
      'Developed automated testing and RBAC validation for an enterprise audit and risk-management platform.',
      'Built QAForge AI, combining QA automation workflows, Playwright, FastAPI, Python and AI-assisted engineering.',
      'Implemented and verified a Zero Trust financial API using JWT authentication, PostgreSQL Row-Level Security and automated authorization testing.',
      'Integrated GitHub Actions quality gates, dependency auditing, secret scanning and production verification into engineering workflows.'
    ],
    tech: ['Playwright', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'Next.js', 'React', 'PostgreSQL', 'Supabase', 'Neon', 'Express', 'Jest', 'GitHub Actions', 'Linux', 'SDET', 'API Testing', 'E2E Testing', 'CI/CD', 'Security Testing', 'OWASP']
  },
  {
    role: 'QA Analyst',
    company: 'SIMELER INTERNATIONAL',
    period: 'Nov 2022 — Dic 2025',
    location: 'Santo Domingo, RD · Remoto',
    current: false,
    summary: 'Manual and automated software testing across web applications and APIs within Agile/Scrum development environments.',
    bullets: [
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
    tech: ['Playwright', 'Selenium', 'Postman', 'JavaScript', 'Python', 'SQL', 'Git', 'Jira', 'CI/CD', 'Agile/Scrum', 'API Testing', 'Regression Testing', 'Integration Testing', 'E2E Testing', 'Functional Testing']
  },
  {
    role: 'Administrador Tesorero',
    company: 'Liga Municipal Dominicana',
    period: 'Abr 2020 — Ago 2026',
    location: 'República Dominicana',
    current: false,
    summary: 'Gestión administrativa y de tesorería en institución pública, con énfasis en controles internos, auditoría y sistemas de información financiera.',
    bullets: [
      'Gestión administrativa y de tesorería en institución pública con foco en controles internos y trazabilidad.',
      'Administración de sistemas de información financiera y validación de integridad de datos.',
      'Coordinación de reportes para auditoría y cumplimiento normativo.',
      'Colaboración con equipos multidisciplinarios en digitalización y mejora de procesos.'
    ],
    tech: ['SQL', 'Excel Avanzado', 'ERP', 'Auditoría', 'Contabilidad', 'Controles Internos', 'Tesorería']
  },
  {
    role: 'Gerente de Área',
    company: 'Empresas P & aB',
    period: 'Oct 2014 — Feb 2019',
    location: 'República Dominicana',
    current: false,
    summary: 'Gestión de área operativa con enfoque en procesos administrativos, control de recursos y liderazgo de equipos.',
    bullets: [
      'Gestión y supervisión de operaciones del área asignada.',
      'Control de recursos, presupuestos y reportes de gestión.',
      'Liderazgo de equipos y coordinación de procesos administrativos.',
      'Implementación de mejoras operativas y seguimiento de indicadores.'
    ],
    tech: ['Gestión de Equipos', 'Administración', 'Presupuestos', 'Reportes', 'Excel Avanzado']
  }
]

export default function Experience() {
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
          <h2 className="text-accent font-black tracking-[0.2em] uppercase text-xs mb-4">Trayectoria</h2>
          <h3 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            Experiencia <span className="text-emerald-500">Profesional</span>
          </h3>
          <p className="text-emerald-950/60 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            Más de 10 años de trayectoria profesional combinando QA Automation, ingeniería de software,
            administración y gestión en entornos públicos y privados.
          </p>
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
                          <TrendingUp className="w-3 h-3" /> Rol actual
                        </span>
                      )}
                      <h4 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                        {exp.role}
                      </h4>
                      <p className="text-accent font-bold mt-1 text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm font-bold text-emerald-900/60 flex-shrink-0">
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {exp.period}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {exp.location}</span>
                    </div>
                  </div>

                  <p className="text-emerald-950/70 font-medium mb-6 leading-relaxed">{exp.summary}</p>

                  <ul className="space-y-3 mb-8">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-emerald-950/75 font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-emerald-100">
                    <p className="text-[10px] font-black text-emerald-900/40 uppercase tracking-[0.2em] mb-3">
                      Tecnologías y herramientas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, k) => (
                        <span key={k} className="text-xs font-bold bg-emerald-50 border border-emerald-100 text-emerald-900/70 px-3 py-1.5 rounded-lg">
                          {t}
                        </span>
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
                <p className="font-black text-primary text-lg">Portafolio de ingeniería</p>
                <p className="text-emerald-900/60 text-sm font-medium">
                  QA Sentinel · QAForge AI · Zero Trust API · Enterprise Audit Platform
                </p>
              </div>
              <a
                href="https://jmtechlab.do"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-emerald-600 transition-all whitespace-nowrap"
              >
                Visitar JMTechLab
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
