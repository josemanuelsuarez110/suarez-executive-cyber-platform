'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bug, Lock, GitBranch, Database, Terminal, ShieldCheck,
  Server, Network, Wifi, Printer, Users, Monitor, Cloud, HardDrive,
  Phone, Cable, Router, Headphones, Settings, Shield, Activity,
  Cpu, Wrench, CheckCircle2, ChevronRight, MessageCircle, Award
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const categories = {
  qa_security: {
    en: { title: 'QA & Cybersecurity', desc: 'Automation, security testing and regulatory compliance for critical applications.', icon: <ShieldCheck className="w-6 h-6" /> },
    es: { title: 'QA & Ciberseguridad', desc: 'Automatización, pruebas de seguridad y cumplimiento normativo para aplicaciones críticas.', icon: <ShieldCheck className="w-6 h-6" /> }
  },
  it_support: {
    en: { title: 'IT Support & Infrastructure', desc: 'Comprehensive technical support, servers, Active Directory and equipment management.', icon: <Server className="w-6 h-6" /> },
    es: { title: 'Soporte IT & Infraestructura', desc: 'Soporte técnico integral, servidores, Active Directory y gestión de equipos.', icon: <Server className="w-6 h-6" /> }
  },
  networks_telephony: {
    en: { title: 'Networks & IP Telephony', desc: 'Enterprise networking, WiFi, IP and analog phone systems for any organization.', icon: <Network className="w-6 h-6" /> },
    es: { title: 'Redes & Telefonía IP', desc: 'Redes empresariales, WiFi, centrales telefónicas IP y analógicas para cualquier organización.', icon: <Network className="w-6 h-6" /> }
  }
}

const services = {
  qa_security: [
    {
      icon: <Bug className="w-6 h-6" />,
      title: { en: 'QA Automation', es: 'QA Automation' },
      desc: { en: 'End-to-end, regression and integration test automation with Playwright, Selenium, Jest and Postman.', es: 'Automatización de pruebas end-to-end, regresión e integración con Playwright, Selenium, Jest y Postman.' },
      features: { en: ['Playwright & Selenium', 'E2E & regression', 'Reports & metrics', 'Reduced manual effort'], es: ['Playwright & Selenium', 'E2E y regresión', 'Reportes y métricas', 'Reducción de esfuerzo manual'] }
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: { en: 'API Testing & Validation', es: 'API Testing & Validación' },
      desc: { en: 'REST and GraphQL API testing with Postman and automated suites. Functional, security and performance validation.', es: 'Testing de APIs REST y GraphQL con Postman y suites automatizadas. Validación funcional, de seguridad y rendimiento.' },
      features: { en: ['REST & GraphQL', 'Postman & Newman', 'AuthN/AuthZ tests', 'Fuzzing & edge cases'], es: ['REST & GraphQL', 'Postman & Newman', 'Pruebas AuthN/AuthZ', 'Fuzzing y casos borde'] }
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: { en: 'Web Application Pentesting', es: 'Pentesting de Aplicaciones Web' },
      desc: { en: 'Authorized penetration testing on web applications. OWASP Top 10 coverage with actionable remediation plan.', es: 'Pruebas de penetración autorizadas en aplicaciones web. Cobertura OWASP Top 10 con plan de remediación accionable.' },
      features: { en: ['OWASP Top 10', 'Auth & session tests', 'Privilege escalation', 'Remediation plan'], es: ['OWASP Top 10', 'Pruebas de auth y sesión', 'Escalada de privilegios', 'Plan de remediación'] }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: { en: 'API Security Testing', es: 'API Security Testing' },
      desc: { en: 'Security assessment of APIs: OWASP API Top 10, authentication, authorization and rate limiting.', es: 'Evaluación de seguridad de APIs: OWASP API Top 10, autenticación, autorización y rate limiting.' },
      features: { en: ['OWASP API Top 10', 'JWT & OAuth review', 'RBAC validation', 'Rate limiting tests'], es: ['OWASP API Top 10', 'Revisión JWT & OAuth', 'Validación RBAC', 'Pruebas de rate limiting'] }
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: { en: 'CI/CD Testing Integration', es: 'Integración de Testing en CI/CD' },
      desc: { en: 'Automated test pipelines with GitHub Actions and Docker. Quality gates and reliable deployments.', es: 'Pipelines de pruebas automatizadas con GitHub Actions y Docker. Quality gates y despliegues confiables.' },
      features: { en: ['GitHub Actions', 'Docker & containers', 'Quality gates', 'Secret scanning'], es: ['GitHub Actions', 'Docker y contenedores', 'Quality gates', 'Escaneo de secretos'] }
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: { en: 'Data Integrity & SQL Validation', es: 'Integridad de Datos & Validación SQL' },
      desc: { en: 'Data integrity validation with SQL and PostgreSQL, including Row-Level Security and auditability.', es: 'Validación de integridad de datos con SQL y PostgreSQL, incluyendo Row-Level Security y auditabilidad.' },
      features: { en: ['SQL validation', 'PostgreSQL RLS', 'Data auditing', 'Transactional consistency'], es: ['Validación SQL', 'PostgreSQL RLS', 'Auditoría de datos', 'Consistencia transaccional'] }
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: { en: 'ISO 27001 Audit & Compliance', es: 'Auditoría y Cumplimiento ISO 27001' },
      desc: { en: 'Gap analysis, implementation guidance and internal audits aligned with ISO 27001.', es: 'Análisis de brechas, guía de implementación y auditorías internas alineadas con ISO 27001.' },
      features: { en: ['Gap analysis', 'Risk assessment', 'Internal audit', 'Compliance roadmap'], es: ['Análisis de brechas', 'Evaluación de riesgos', 'Auditoría interna', 'Hoja de ruta de cumplimiento'] }
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: { en: 'QA Strategy & Consulting', es: 'Estrategia y Consultoría QA' },
      desc: { en: 'Test strategy design, test pyramid, quality metrics and best practices adoption for development teams.', es: 'Diseño de estrategias de testing, pirámide de pruebas, métricas de calidad y adopción de buenas prácticas para equipos de desarrollo.' },
      features: { en: ['Test strategy', 'Testing pyramid', 'Quality KPIs', 'Team enablement'], es: ['Estrategia de testing', 'Pirámide de testing', 'KPIs de calidad', 'Capacitación de equipos'] }
    }
  ],
  it_support: [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: { en: 'Remote Technical Support', es: 'Soporte Técnico Remoto' },
      desc: { en: 'Fast remote support for users, equipment and software through secure remote sessions.', es: 'Soporte remoto rápido para usuarios, equipos y software mediante sesiones remotas seguras.' },
      features: { en: ['Help Desk', 'Remote desktop', 'Ticket tracking', 'SLA-based response'], es: ['Mesa de ayuda', 'Escritorio remoto', 'Seguimiento de tickets', 'Respuesta con SLA'] }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: { en: 'On-site Technical Support', es: 'Soporte Técnico Presencial' },
      desc: { en: 'On-site support for installations, configurations and equipment maintenance.', es: 'Soporte presencial para instalaciones, configuraciones y mantenimiento de equipos.' },
      features: { en: ['Installations', 'Maintenance', 'Equipment setup', 'On-site diagnostics'], es: ['Instalaciones', 'Mantenimiento', 'Configuración de equipos', 'Diagnóstico presencial'] }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: { en: 'Active Directory Administration', es: 'Administración de Active Directory' },
      desc: { en: 'User, group and policy management in Active Directory and Microsoft 365 environments.', es: 'Gestión de usuarios, grupos y políticas en entornos Active Directory y Microsoft 365.' },
      features: { en: ['Users & groups', 'Group Policy (GPO)', 'Microsoft 365', 'Access control'], es: ['Usuarios y grupos', 'Directivas de grupo (GPO)', 'Microsoft 365', 'Control de acceso'] }
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: { en: 'Server Administration', es: 'Administración de Servidores' },
      desc: { en: 'Windows Server and Linux administration: installation, hardening, monitoring and maintenance.', es: 'Administración de Windows Server y Linux: instalación, hardening, monitoreo y mantenimiento.' },
      features: { en: ['Windows Server', 'Linux (Ubuntu, Debian)', 'Hardening', 'Monitoring & backup'], es: ['Windows Server', 'Linux (Ubuntu, Debian)', 'Hardening', 'Monitoreo y backup'] }
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: { en: 'Computers & Laptops Support', es: 'Soporte de Computadoras y Laptops' },
      desc: { en: 'Diagnostics, repair, upgrades and preventive maintenance for desktops and laptops.', es: 'Diagnóstico, reparación, mejoras y mantenimiento preventivo para computadoras de escritorio y laptops.' },
      features: { en: ['Diagnostics & repair', 'Upgrades (RAM, SSD)', 'OS installation', 'Preventive maintenance'], es: ['Diagnóstico y reparación', 'Mejoras (RAM, SSD)', 'Instalación de SO', 'Mantenimiento preventivo'] }
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: { en: 'Printers & Peripherals', es: 'Impresoras y Periféricos' },
      desc: { en: 'Installation, configuration and maintenance of printers, scanners and peripherals.', es: 'Instalación, configuración y mantenimiento de impresoras, escáneres y periféricos.' },
      features: { en: ['Printer installation', 'Network printers', 'Toner & supplies', 'Peripheral setup'], es: ['Instalación de impresoras', 'Impresoras en red', 'Tóner y suministros', 'Configuración de periféricos'] }
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: { en: 'Backup & Disaster Recovery', es: 'Backup y Recuperación ante Desastres' },
      desc: { en: 'Backup strategies and disaster recovery plans for critical business data.', es: 'Estrategias de respaldo y planes de recuperación ante desastres para datos críticos del negocio.' },
      features: { en: ['Backup strategy', 'Cloud & local backup', 'Recovery drills', 'Ransomware protection'], es: ['Estrategia de respaldo', 'Backup local y en nube', 'Simulacros de recuperación', 'Protección antiransomware'] }
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: { en: 'Cloud & Microsoft 365', es: 'Cloud y Microsoft 365' },
      desc: { en: 'Migration, administration and support for Microsoft 365, Google Workspace and cloud services.', es: 'Migración, administración y soporte de Microsoft 365, Google Workspace y servicios en la nube.' },
      features: { en: ['Microsoft 365', 'Google Workspace', 'Email migration', 'Cloud storage'], es: ['Microsoft 365', 'Google Workspace', 'Migración de correo', 'Almacenamiento en nube'] }
    }
  ],
  networks_telephony: [
    {
      icon: <Network className="w-6 h-6" />,
      title: { en: 'Enterprise Networking', es: 'Redes Empresariales' },
      desc: { en: 'LAN/WAN design, installation and configuration with enterprise-grade equipment.', es: 'Diseño, instalación y configuración de LAN/WAN con equipos empresariales.' },
      features: { en: ['LAN/WAN design', 'Switches & routers', 'VLANs & segmentation', 'Network monitoring'], es: ['Diseño LAN/WAN', 'Switches y routers', 'VLANs y segmentación', 'Monitoreo de red'] }
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: { en: 'Enterprise WiFi', es: 'WiFi Empresarial' },
      desc: { en: 'WiFi design and deployment with Ubiquiti, Cisco and TP-Link Omada for full coverage.', es: 'Diseño y despliegue de WiFi con Ubiquiti, Cisco y TP-Link Omada para cobertura total.' },
      features: { en: ['Site survey', 'Ubiquiti / Cisco / TP-Link', 'Guest networks', 'Roaming & coverage'], es: ['Site survey', 'Ubiquiti / Cisco / TP-Link', 'Redes de invitados', 'Roaming y cobertura'] }
    },
    {
      icon: <Cable className="w-6 h-6" />,
      title: { en: 'Structured Cabling', es: 'Cableado Estructurado' },
      desc: { en: 'Design and installation of structured cabling (Cat5e, Cat6, Cat6a, fiber) for offices and data centers.', es: 'Diseño e instalación de cableado estructurado (Cat5e, Cat6, Cat6a, fibra) para oficinas y data centers.' },
      features: { en: ['Cat5e / Cat6 / Cat6a', 'Fiber optic', 'Patch panels', 'Certification & labeling'], es: ['Cat5e / Cat6 / Cat6a', 'Fibra óptica', 'Patch panels', 'Certificación y etiquetado'] }
    },
    {
      icon: <Router className="w-6 h-6" />,
      title: { en: 'Firewall & VPN', es: 'Firewall y VPN' },
      desc: { en: 'Firewall configuration, VPN setup and network security for remote and branch offices.', es: 'Configuración de firewall, VPN y seguridad de red para oficinas remotas y sucursales.' },
      features: { en: ['Firewall config', 'Site-to-site VPN', 'Remote access VPN', 'Traffic rules'], es: ['Configuración de firewall', 'VPN site-to-site', 'VPN de acceso remoto', 'Reglas de tráfico'] }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: { en: 'IP Telephony (VoIP)', es: 'Telefonía IP (VoIP)' },
      desc: { en: 'Design and deployment of IP PBX systems: Asterisk, FreePBX, 3CX and cloud telephony.', es: 'Diseño y despliegue de centrales IP: Asterisk, FreePBX, 3CX y telefonía en la nube.' },
      features: { en: ['Asterisk / FreePBX / 3CX', 'SIP trunking', 'IP phones setup', 'Call routing & IVR'], es: ['Asterisk / FreePBX / 3CX', 'SIP trunking', 'Configuración de teléfonos IP', 'Enrutamiento y IVR'] }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: { en: 'Analog Phone Systems', es: 'Centrales Telefónicas Analógicas' },
      desc: { en: 'Installation, configuration and maintenance of analog PBX and hybrid phone systems.', es: 'Instalación, configuración y mantenimiento de centrales analógicas e híbridas.' },
      features: { en: ['Analog PBX', 'Hybrid systems', 'Extension wiring', 'Maintenance & repair'], es: ['Central analógica', 'Sistemas híbridos', 'Cableado de extensiones', 'Mantenimiento y reparación'] }
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: { en: 'Network Monitoring & Maintenance', es: 'Monitoreo y Mantenimiento de Red' },
      desc: { en: 'Proactive monitoring of network devices, alerts and periodic maintenance to avoid downtime.', es: 'Monitoreo proactivo de dispositivos de red, alertas y mantenimiento periódico para evitar caídas.' },
      features: { en: ['SNMP monitoring', 'Alerts & reports', 'Firmware updates', 'Preventive maintenance'], es: ['Monitoreo SNMP', 'Alertas y reportes', 'Actualizaciones de firmware', 'Mantenimiento preventivo'] }
    }
  ]
}

const t = {
  en: {
    label: 'Services',
    title1: 'Comprehensive IT,',
    title2: 'QA & Security Services',
    subtitle: 'From QA automation and cybersecurity to networks, IP telephony and full IT support. One partner for your entire technology stack.',
    requestQuote: 'Request Quote',
    talkWhatsApp: 'Talk on WhatsApp',
    learnMore: 'Learn more'
  },
  es: {
    label: 'Servicios',
    title1: 'Servicios Integrales de IT,',
    title2: 'QA & Seguridad',
    subtitle: 'Desde QA automation y ciberseguridad hasta redes, telefonía IP y soporte IT completo. Un solo aliado para todo su stack tecnológico.',
    requestQuote: 'Solicitar Cotización',
    talkWhatsApp: 'Hablar por WhatsApp',
    learnMore: 'Ver más'
  }
}

const WHATSAPP_URL = 'https://wa.me/18095135535?text=' + encodeURIComponent('Hola José, me interesa cotizar un servicio de Suarez Consultoría.')

export default function Services() {
  const { lang } = useLanguage()
  const tr = t[lang]

  const renderCategory = (key: keyof typeof categories, items: typeof services.qa_security) => {
    const cat = categories[key][lang]
    return (
      <div key={key} className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="text-accent-gold bg-accent-gold/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent-gold/30">
            {cat.icon}
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight">{cat.title}</h4>
            <p className="text-slate-400 font-medium text-sm md:text-base mt-1">{cat.desc}</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass-card p-7 hover:shadow-[0_30px_80px_rgba(201,162,39,0.15)] hover:border-accent-gold/40 transition-all flex flex-col"
            >
              <div className="text-accent-gold bg-accent-gold/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent-gold group-hover:text-slate-950 transition-all flex-shrink-0 border border-accent-gold/20">
                {s.icon}
              </div>
              <h5 className="text-lg font-bold text-white mb-2 tracking-tight leading-tight">{s.title[lang]}</h5>
              <p className="text-slate-400 font-medium text-sm mb-5 leading-relaxed flex-1">{s.desc[lang]}</p>
              <ul className="space-y-2 mb-6">
                {s.features[lang].map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs font-bold text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-gold hover:gap-3 transition-all"
              >
                {tr.requestQuote}
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="servicios" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blue/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-corporate-blue/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent-gold font-black tracking-[0.2em] uppercase text-xs mb-4">{tr.label}</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
            {tr.title1} <span className="text-gradient-gold">{tr.title2}</span>
          </h3>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            {tr.subtitle}
          </p>
        </motion.div>

        {renderCategory('qa_security', services.qa_security)}
        {renderCategory('it_support', services.it_support)}
        {renderCategory('networks_telephony', services.networks_telephony)}

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center glass-card p-10 md:p-12"
        >
          <h4 className="text-2xl md:text-3xl font-black text-white mb-3">
            {lang === 'en' ? 'Need something specific?' : '¿Necesitas algo específico?'}
          </h4>
          <p className="text-slate-400 font-medium mb-8 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Every business is different. Let\'s discuss your needs and build a custom proposal.'
              : 'Cada negocio es diferente. Conversemos sobre tus necesidades y armamos una propuesta personalizada.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold text-slate-950 px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all shadow-2xl shadow-accent-gold/30"
            >
              <MessageCircle className="w-5 h-5" />
              {tr.talkWhatsApp}
            </a>
            <a
              href="mailto:josemanuelsuarez110@gmail.com"
              className="glass-card text-white px-8 py-4 rounded-xl font-black hover:bg-white/10 transition-all flex items-center justify-center"
            >
              josemanuelsuarez110@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
