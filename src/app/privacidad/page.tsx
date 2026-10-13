'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const t = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: January 2026',
    back: 'Back to home',
    sections: [
      { h: '1. Data Controller', p: 'Suarez Consultoría, led by José Manuel Suárez, with address in Azua, Dominican Republic, is the data controller responsible for the personal data collected through this website and our services. Contact: josemanuelsuarez110@gmail.com' },
      { h: '2. Data We Collect', p: 'We collect personal data you voluntarily provide: name, email, phone number, company name, and any information included in your messages or service requests. We also collect technical data such as IP address, browser type, and pages visited through essential cookies.' },
      { h: '3. Purpose of Processing', p: 'We use your data to: respond to inquiries, prepare quotes, provide IT, QA, cybersecurity, networking and telephony services, send service-related communications, comply with legal obligations, and improve our services.' },
      { h: '4. Legal Basis', p: 'The legal basis for processing is your consent (when you contact us), the performance of a contract (when you hire our services), compliance with legal obligations, and our legitimate interest in improving our services.' },
      { h: '5. Data Retention', p: 'We retain your data as long as necessary to fulfill the purposes described and to comply with legal obligations. Contact data is retained for up to 3 years after the last interaction, unless a longer period is required by law.' },
      { h: '6. Data Sharing', p: 'We do not sell your data. We may share it with service providers (hosting, email, payment processors) that help us operate, always under confidentiality agreements, and with authorities when legally required.' },
      { h: '7. Your Rights', p: 'You have the right to access, rectify, delete, restrict, or object to the processing of your data, as well as the right to data portability. You can exercise these rights by writing to josemanuelsuarez110@gmail.com. You also have the right to file a complaint with the competent supervisory authority.' },
      { h: '8. Security', p: 'We implement technical and organizational measures to protect your data against unauthorized access, loss, or alteration, including encryption, access controls, and secure servers.' },
      { h: '9. International Transfers', p: 'Your data may be transferred to and processed in countries outside the Dominican Republic (e.g., USA, EU) when using service providers. We ensure adequate safeguards are in place.' },
      { h: '10. Changes', p: 'We may update this policy from time to time. The latest version will always be available on this page, with the date of the last update.' },
      { h: '11. Jurisdiction', p: 'This policy is governed by the laws of the Dominican Republic (Law 172-13 on Personal Data Protection) and, where applicable, by the GDPR for users in the European Union.' }
    ]
  },
  es: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: Enero 2026',
    back: 'Volver al inicio',
    sections: [
      { h: '1. Responsable del Tratamiento', p: 'Suarez Consultoría, liderada por José Manuel Suárez, con domicilio en Azua, República Dominicana, es el responsable del tratamiento de los datos personales recopilados a través de este sitio web y nuestros servicios. Contacto: josemanuelsuarez110@gmail.com' },
      { h: '2. Datos que Recopilamos', p: 'Recopilamos los datos personales que nos proporciona voluntariamente: nombre, correo electrónico, teléfono, nombre de la empresa y cualquier información incluida en sus mensajes o solicitudes de servicio. También recopilamos datos técnicos como dirección IP, tipo de navegador y páginas visitadas mediante cookies esenciales.' },
      { h: '3. Finalidad del Tratamiento', p: 'Utilizamos sus datos para: responder consultas, elaborar cotizaciones, prestar servicios de IT, QA, ciberseguridad, redes y telefonía, enviar comunicaciones relacionadas con el servicio, cumplir obligaciones legales y mejorar nuestros servicios.' },
      { h: '4. Base Legal', p: 'La base legal para el tratamiento es su consentimiento (al contactarnos), la ejecución de un contrato (al contratar nuestros servicios), el cumplimiento de obligaciones legales y nuestro interés legítimo en mejorar nuestros servicios.' },
      { h: '5. Conservación de Datos', p: 'Conservamos sus datos durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales. Los datos de contacto se conservan hasta 3 años después de la última interacción, salvo que la ley exija un plazo mayor.' },
      { h: '6. Compartición de Datos', p: 'No vendemos sus datos. Podemos compartirlos con proveedores de servicios (hosting, correo, procesadores de pago) que nos ayudan a operar, siempre bajo acuerdos de confidencialidad, y con autoridades cuando la ley lo exija.' },
      { h: '7. Sus Derechos', p: 'Tiene derecho a acceder, rectificar, eliminar, limitar u oponerse al tratamiento de sus datos, así como a la portabilidad de los mismos. Puede ejercer estos derechos escribiendo a josemanuelsuarez110@gmail.com. También tiene derecho a presentar una reclamación ante la autoridad de control competente.' },
      { h: '8. Seguridad', p: 'Implementamos medidas técnicas y organizativas para proteger sus datos contra accesos no autorizados, pérdida o alteración, incluyendo cifrado, controles de acceso y servidores seguros.' },
      { h: '9. Transferencias Internacionales', p: 'Sus datos pueden transferirse y procesarse en países fuera de la República Dominicana (ej. EE.UU., UE) al utilizar proveedores de servicios. Garantizamos que existan salvaguardas adecuadas.' },
      { h: '10. Cambios', p: 'Podemos actualizar esta política ocasionalmente. La versión más reciente estará siempre disponible en esta página, con la fecha de la última actualización.' },
      { h: '11. Jurisdicción', p: 'Esta política se rige por las leyes de la República Dominicana (Ley 172-13 sobre Protección de Datos Personales) y, cuando aplique, por el GDPR para usuarios de la Unión Europea.' }
    ]
  }
}

export default function Privacidad() {
  const { lang } = useLanguage()
  const tr = t[lang]

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-gold hover:text-yellow-400 transition-colors mb-8 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" />
          {tr.back}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent-gold/10 border border-accent-gold/30 w-14 h-14 rounded-2xl flex items-center justify-center text-accent-gold">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">{tr.title}</h1>
              <p className="text-slate-400 text-sm mt-1">{tr.updated}</p>
            </div>
          </div>

          <div className="space-y-8 mt-12">
            {tr.sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-accent-gold mb-3">{s.h}</h2>
                <p className="text-slate-300 leading-relaxed">{s.p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
