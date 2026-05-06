'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'arilsaputra854@gmail.com',
    href: 'mailto:arilsaputra854@gmail.com',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/arilsaputra854',
    href: 'https://linkedin.com/in/arilsaputra854',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/arilsaputra854',
    href: 'https://github.com/arilsaputra854',
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@arilsaputra854',
    href: 'https://instagram.com/arilsaputra854',
    color: 'from-pink-500 to-orange-500',
  },
  {
    icon: '🎵',
    label: 'TikTok',
    value: '@arilsaputra854',
    href: 'https://tiktok.com/@arilsaputra854',
    color: 'from-black to-gray-800',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSending(false)
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0d0f14] grid-pattern">
      <div className="absolute inset-0 line-numbers opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-code"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 text-gray-500 text-xs mb-6 uppercase tracking-[0.3em]">
            network/connection.ssh
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            <span className="code-keyword">await</span> <span className="code-function">connectTo</span><span className="text-white">(</span><span className="code-variable">aril_saputra</span><span className="text-white">);</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: API Endpoints */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="ide-card h-full">
              <div className="ide-header">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="ml-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">GET /api/endpoints</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold dark:text-white text-slate-800 mb-6 font-code">
                  <span className="code-comment">// Remote Endpoints</span>
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group font-code"
                    >
                      <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="code-keyword text-[10px] uppercase tracking-wider mb-1">{info.label}</p>
                        <p className="dark:text-white text-slate-800 text-sm font-medium">
                          {info.value}
                        </p>
                      </div>
                      <div className="code-comment text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        HTTP/1.1 200 OK
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    <span className="dark:text-emerald-400 text-emerald-700 font-code text-xs uppercase tracking-widest">System Online: Ping 12ms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: API Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="ide-card">
              <div className="ide-header">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="ml-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">POST /api/message</span>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="font-code">
                    <label className="block text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2">payload.sender_name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0f14] border border-white/10 text-white placeholder-gray-700 focus:outline-none focus:border-indigo-500 transition-all font-mono text-sm"
                      placeholder='const name = "John Doe";'
                    />
                  </div>

                  <div className="font-code">
                    <label className="block text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2">payload.sender_email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0f14] border border-white/10 text-white placeholder-gray-700 focus:outline-none focus:border-indigo-500 transition-all font-mono text-sm"
                      placeholder='const email = "john@example.com";'
                    />
                  </div>

                  <div className="font-code">
                    <label className="block text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2">payload.message_body</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0f14] border border-white/10 text-white placeholder-gray-700 focus:outline-none focus:border-indigo-500 transition-all font-mono text-sm resize-none"
                      placeholder='/* Your message here... */'
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending || sent}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-4 font-code text-sm uppercase tracking-widest transition-all disabled:opacity-50"
                  >
                    {sent ? (
                      <span className="text-emerald-500">{'>>'} REQUEST_SUCCESS_200</span>
                    ) : sending ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                        SENDING_PAYLOAD...
                      </span>
                    ) : (
                      <span className="group-hover:text-indigo-400">{'>>'} EXECUTE_POST_REQUEST</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
