'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const t = {
  en: {
    title: 'Terms & Conditions',
    updated: 'Last updated: January 2026',
    back: 'Back to home',
    sections: [
      { h: '1. Acceptance', p: 'By accessing this website or hiring our services, you accept these Terms & Conditions. If you do not agree, please do not use our services.' },
      { h: '2. Services', p: 'Suarez Consultoría provides IT consulting services including QA automation, cybersecurity testing, IT support, network and IP telephony services, as described in our Services section. The exact scope is defined in each individual proposal.' },
      { h: '3. Quotes & Contracts', p: 'All services are quoted in writing. A service is considered hired when the client accepts the quote in writing (email or signed contract) and pays the agreed deposit, if applicable.' },
      { h: '4. Pricing & Payment', p: 'Prices are quoted in USD or DOP, as agreed. Payment terms: 50% upfront, 50% on delivery for projects; monthly plans are billed at the beginning of each month. Accepted methods: bank transfer, credit card, PayPal.' },
      { h: '5. Delivery & Timelines', p: 'Timelines are estimates based on the scope. Delays caused by the client (missing information, access, or approvals) may extend the delivery date. Emergency support is subject to availability and additional fees.' },
      { h: '6. Warranties', p: 'We warrant our work for 30 days after delivery for defects directly attributable to our services. This warranty excludes issues caused by third-party changes, misuse, or unauthorized modifications.' },
      { h: '7. Client Responsibilities', p: 'The client agrees to provide accurate information, timely access to systems, and necessary authorizations for security testing. For penetration testing, the client must sign an authorization before any testing begins.' },
      { h: '8. Intellectual Property', p: 'All deliverables (reports, scripts, documentation) become the property of the client upon full payment, unless otherwise agreed. Our internal tools and frameworks remain our property.' },
      { h: '9. Confidentiality', p: 'Both parties agree to keep confidential any non-public information shared during the engagement. We sign NDAs upon request before any sensitive project.' },
      { h: '10. Cancellations & Refunds', p: 'For monthly plans, cancellation requires 30 days notice. For projects, cancellation after work has started is subject to payment for work completed. Deposits are non-refundable once work has begun.' },
      { h: '11. Limitation of Liability', p: 'Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages, including data loss or business interruption beyond our control.' },
      { h: '12. Governing Law', p: 'These Terms are governed by the laws of the Dominican Republic. Any dispute will be resolved in the courts of Azua or Santo Domingo, Dominican Republic.' }
    ]
  },
  es: {
    title: 'Términos y Condiciones',
    updated: 'Última actualización: Enero 2026',
    back: 'Volver al inicio',
    sections: [
      { h: '1. Aceptación', p: 'Al acceder a este sitio web o contratar nuestros servicios, usted acepta estos Términos y Condiciones. Si no está de acuerdo, por favor no utilice nuestros servicios.' },
      { h: '2. Servicios', p: 'Suarez Consultoría presta servicios de consultoría IT incluyendo QA automation, pruebas de ciberseguridad, soporte IT, redes y telefonía IP, según se describe en nuestra sección de Servicios. El alcance exacto se define en cada propuesta individual.' },
      { h: '3. Cotizaciones y Contratos', p: 'Todos los servicios se cotizan por escrito. Un servicio se considera contratado cuando el cliente acepta la cotización por escrito (email o contrato firmado) y paga el anticipo acordado, si aplica.' },
      { h: '4. Precios y Pagos', p: 'Los precios se cotizan en USD o DOP, según se acuerde. Formas de pago: 50% por adelantado, 50% a la entrega para proyectos; los planes mensuales se facturan al inicio de cada mes. Métodos aceptados: transferencia bancaria, tarjeta de crédito, PayPal.' },
      { h: '5. Entrega y Plazos', p: 'Los plazos son estimados en función del alcance. Los retrasos causados por el cliente (información, accesos o aprobaciones pendientes) pueden extender la fecha de entrega. El soporte de emergencia está sujeto a disponibilidad y tarifas adicionales.' },
      { h: '6. Garantías', p: 'Garantizamos nuestro trabajo durante 30 días después de la entrega por defectos directamente atribuibles a nuestros servicios. Esta garantía excluye problemas causados por cambios de terceros, mal uso o modificaciones no autorizadas.' },
      { h: '7. Responsabilidades del Cliente', p: 'El cliente se compromete a proporcionar información precisa, acceso oportuno a los sistemas y autorizaciones necesarias para las pruebas de seguridad. Para pentesting, el cliente debe firmar una autorización antes de comenzar cualquier prueba.' },
      { h: '8. Propiedad Intelectual', p: 'Todos los entregables (informes, scripts, documentación) pasan a ser propiedad del cliente tras el pago completo, salvo acuerdo distinto. Nuestras herramientas y frameworks internos permanecen como propiedad nuestra.' },
      { h: '9. Confidencialidad', p: 'Ambas partes se comprometen a mantener confidencial cualquier información no pública compartida durante el proyecto. Firmamos NDAs a solicitud antes de cualquier proyecto sensible.' },
      { h: '10. Cancelaciones y Reembolsos', p: 'Para planes mensuales, la cancelación requiere 30 días de aviso. Para proyectos, la cancelación después de iniciado el trabajo está sujeta al pago del trabajo completado. Los anticipos no son reembolsables una vez iniciado el trabajo.' },
      { h: '11. Limitación de Responsabilidad', p: 'Nuestra responsabilidad se limita al monto pagado por el servicio específico. No somos responsables por daños indirectos, incidentales o consecuentes, incluyendo pérdida de datos o interrupción del negocio fuera de nuestro control.' },
      { h: '12. Ley Aplicable', p: 'Estos Términos se rigen por las leyes de la República Dominicana. Cualquier disputa se resolverá en los tribunales de Azua o Santo Domingo, República Dominicana.' }
    ]
  }
}

export default function Terminos() {
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
              <FileText className="w-7 h-7" />
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
