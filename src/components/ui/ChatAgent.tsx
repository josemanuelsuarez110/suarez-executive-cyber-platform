'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: 'Estimado visitante, es un honor recibirle en SUAREZ SERVICIOS Y ASESORÍA. Soy su asistente virtual y estoy aquí para brindarle orientación técnica y estratégica inmediata. ¿En qué área de ciberseguridad, redes o cumplimiento normativo ISO 27001 podemos apoyarle hoy?'
}

const PHONE_NUMBER = "+58 4XX-XXXXXXX" // Reemplazar con el número real

const FAQ_RESPONSES: Record<string, string> = {
  'iso 27001': 'Contamos con una amplia trayectoria en la implementación y auditoría de la norma ISO 27001. Nuestra metodología le garantiza no solo el cumplimiento, sino un fortalecimiento real de su Sistema de Gestión de Seguridad de la Información (SGSI). ¿Desea que un consultor le llame directamente para profundizar en este tema?',
  'hacking': 'Nuestros servicios de Ethical Hacking y Red Teaming se ejecutan bajo los más estrictos estándares de ética y profesionalismo. Identificamos vulnerabilidades críticas antes de que representen un riesgo real para su operación. ¿Le gustaría recibir una propuesta técnica detallada?',
  'redes': 'Diseñamos y optimizamos infraestructuras WAN/LAN con un enfoque prioritario en seguridad perimetral y segmentación lógica. Aseguramos que su red sea resiliente y de alto rendimiento. ¿Prefiere hablar con un especialista en redes por teléfono?',
  'contacto': `Será un placer atenderle de manera personalizada. Puede completar nuestro formulario de contacto o, si lo prefiere, llamarnos directamente al ${PHONE_NUMBER} para una atención inmediata.`,
  'precio': 'En nuestra consultoría valoramos la precisión. Cada presupuesto se ajusta a la escala y complejidad de su infraestructura. Si gusta, podemos agendar una breve llamada de diagnóstico sin costo para brindarle una estimación exacta.',
  'llamar': `Por supuesto, valoramos mucho la comunicación directa. Puede comunicarse con nosotros al número ${PHONE_NUMBER}. ¿Le gustaría que agendemos una llamada en este momento o prefiere marcar usted directamente?`,
  'telefono': `Nuestro canal oficial de atención telefónica es ${PHONE_NUMBER}. Estamos a su entera disposición para resolver cualquier duda técnica de manera inmediata.`
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Automated Response Logic
    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let responseContent = 'Le agradecemos mucho su consulta. Para brindarle la mejor asistencia técnica, nuestro equipo de consultores sénior revisará su inquietud a la brevedad. Mientras tanto, ¿le gustaría saber más sobre nuestros servicios de Pentesting, ISO 27001 o tal vez prefiere una comunicación telefónica directa?'

      for (const key in FAQ_RESPONSES) {
        if (lowerInput.includes(key)) {
          responseContent = FAQ_RESPONSES[key]
          break
        }
      }

      // Special check for interest in calling
      if ((lowerInput.includes('si') || lowerInput.includes('quiero') || lowerInput.includes('llamada')) && 
          (messages[messages.length - 1].content.includes('llame') || messages[messages.length - 1].content.includes('hablar'))) {
        responseContent = `Excelente decisión. Puede llamarnos directamente al ${PHONE_NUMBER}. ¡Será un gusto atenderle personalmente!`
      }

      const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: responseContent }
      setMessages(prev => [...prev, assistantMsg])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 mb-4"
          >
            {/* Header */}
            <div className="bg-slate-950 p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-none">Asistente Virtual</p>
                  <p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">Suarez Consultoría</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-accent-gold transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={cn('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}>
                  <div className={cn(
                    'max-w-[80%] rounded-2xl p-3 text-sm shadow-sm',
                    msg.role === 'user' ? 'bg-accent-gold text-white rounded-tr-none' : 'bg-white text-primary border border-slate-200 rounded-tl-none'
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center space-x-1 text-slate-400">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escriba su consulta..."
                  className="w-full bg-slate-100 rounded-full px-4 py-3 text-sm text-primary outline-none focus:ring-2 focus:ring-accent transition-all pr-12"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-accent-gold rounded-full shadow-2xl flex items-center justify-center text-white relative"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        {!isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />}
      </motion.button>
    </div>
  )
}
