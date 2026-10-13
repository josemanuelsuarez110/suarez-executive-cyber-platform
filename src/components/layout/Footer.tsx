import React from 'react'
import Link from 'next/link'
import { Shield, Linkedin, Mail, ArrowUpRight, Github, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#011d17] text-emerald-100/60 py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                SUAREZ <span className="text-accent">CONSULTORÍA</span>
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-8 text-emerald-100/40">
              Firma boutique especializada en QA Automation, Web &amp; API Security Testing, validación SQL e integración CI/CD.
            </p>
            <div className="space-y-3 mb-8">
              <a href="tel:+18294613778" className="flex items-center gap-3 text-sm font-bold text-emerald-100/60 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" /> +1 829-461-3778
              </a>
              <a href="https://wa.me/18095135535" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-emerald-100/60 hover:text-emerald-400 transition-colors">
                <MessageCircle className="w-4 h-4 text-emerald-400" /> +1 809-513-5535
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">WhatsApp</span>
              </a>
            </div>
            <div className="flex space-x-3">
              <Link href="https://linkedin.com/in/josemanuelsuarez2110" target="_blank" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://github.com/josemanuelsuarez2110" target="_blank" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="mailto:josemanuelsuarez110@gmail.com" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Servicios</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['QA Automation', 'API Security', 'Web Pentesting', 'CI/CD Testing'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#servicios" className="hover:text-accent transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-3 group-hover:w-3 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Compañía</h4>
            <ul className="space-y-5 text-sm font-bold">
              {[
                { label: 'Sobre Nosotros', href: '#nosotros' },
                { label: 'Experiencia', href: '#experiencia' },
                { label: 'Educación', href: '#educacion' },
                { label: 'Certificaciones', href: '#certificaciones' },
                { label: 'Contacto', href: '#contacto' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-accent transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-3 group-hover:w-3 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Soporte Senior</h4>
            <p className="text-sm font-medium mb-6 text-emerald-100/40">Consultoría estratégica en QA Automation y seguridad de aplicaciones.</p>
            <div className="backdrop-blur-xl bg-white/5 p-6 rounded-[2rem] border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              <p className="text-[10px] uppercase font-black text-accent mb-3 tracking-[0.3em]">Auditoría Express</p>
              <Link href="#contacto" className="text-lg font-black text-white flex items-center group/link">
                Agendar Ahora
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform text-accent" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.4em] font-black text-emerald-100/20">
          <p>© 2026 SUAREZ SERVICIOS Y ASESORÍA. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            {['Privacidad', 'Términos', 'Cookies'].map((item, idx) => (
              <Link key={idx} href="#" className="hover:text-accent transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
