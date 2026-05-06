'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaGithub, FaTiktok, FaEnvelope } from 'react-icons/fa'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-[#0d0f14] text-white overflow-hidden flex items-center grid-pattern"
    >
      {/* IDE Background Lines */}
      <div className="absolute inset-0 line-numbers opacity-20 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute inset-y-0 left-[60px] w-[1px] bg-white/5 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-24 pb-12">
        
        {/* Left Side: Name and Role */}
        <div className="lg:col-span-4 z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-16 h-[1px] bg-white/20 mb-8 lg:mb-12" />
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 lg:mb-8 font-code">
              <span className="code-keyword">const</span> <span className="text-white">name</span> = <br />
              <span className="code-string text-2xl md:text-5xl lg:text-7xl">&quot;Aril Saputra&quot;</span><span className="text-white">;</span> <br />
              <span className="text-sm md:text-base text-gray-500 block mt-4 font-mono">// Fullstack Mobile Developer</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 lg:mb-12 font-code leading-relaxed">
              <span className="code-comment">/* 
               * Building high-performance apps 
               * with a focus on seamless UX 
               * and robust architecture.
               */</span>
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block mt-12"
            >
              <a 
                href="#about"
                className="w-16 h-16 rounded-full bg-[#0061FF] flex items-center justify-center hover:bg-[#0052db] transition-colors shadow-lg shadow-[#0061FF]/20"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Center: Profile Image (Order changed for mobile) */}
        <div className="lg:col-span-5 relative flex justify-center items-center w-full order-first lg:order-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="ide-card w-full max-w-[320px] md:max-w-[450px] aspect-[4/5] z-10"
            style={{
              transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`
            }}
          >
            {/* Window Header */}
            <div className="ide-header">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-3 text-[9px] font-mono text-gray-500 uppercase tracking-widest">profile.png</span>
            </div>
            
            <div className="relative w-full h-full bg-[#161b22]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent z-20" />
              <Image
                src="/aril.png"
                alt="Aril Saputra"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Sidebar Info */}
        <div className="lg:col-span-3 z-20 space-y-8 lg:space-y-16 w-full">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-code"
          >
            <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-500 mb-3 lg:mb-4 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              About.me
            </h3>
            <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed mb-4 lg:mb-6">
              <span className="code-keyword">import</span> <span className="code-variable">Founder</span> <span className="code-keyword">from</span> <span className="code-string">&apos;@/koding-yuk&apos;</span>; <br />
              Fullstack Developer passionate about building innovative mobile experiences.
            </p>
            <a href="#about" className="group flex items-center text-[9px] font-bold tracking-[0.1em] uppercase hover:text-indigo-400 transition-colors">
              <span className="code-function">readMore</span>() 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          <div className="w-full h-[1px] bg-white/5 lg:bg-white/10" />

          {/* My Work Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-code"
          >
            <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-500 mb-3 lg:mb-4 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              My.work
            </h3>
            <p className="text-gray-400 text-[11px] lg:text-xs leading-relaxed mb-4 lg:mb-6">
              <span className="code-comment">// Journey from startups to enterprise</span> <br />
              Engineering digital solutions at Tunas Rent and managing KodingYuk!.
            </p>
            <a href="#projects" className="group flex items-center text-[9px] font-bold tracking-[0.1em] uppercase hover:text-indigo-400 transition-colors">
              <span className="code-function">openPortfolio</span>()
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          <div className="w-full h-[1px] bg-white/5 lg:bg-white/10" />

          {/* Follow Me Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-4 lg:mb-6 uppercase">Follow Me</h3>
            <div className="flex gap-5 lg:gap-6">
              <a href="https://github.com/arilsaputra854" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub"><FaGithub size={18} /></a>
              <a href="https://linkedin.com/in/arilsaputra854/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn"><FaLinkedinIn size={18} /></a>
              <a href="https://instagram.com/arilsaputra854" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram"><FaInstagram size={18} /></a>
              <a href="https://tiktok.com/@arilsaputra854" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="TikTok"><FaTiktok size={18} /></a>
              <a href="mailto:arilsaputra854@gmail.com" className="text-gray-400 hover:text-white transition-colors" title="Email"><FaEnvelope size={18} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
