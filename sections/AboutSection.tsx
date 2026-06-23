'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const highlights = [
  { icon: '📱', label: 'Mobile Developer', desc: 'Flutter & Kotlin Specialist' },
  { icon: '🚀', label: 'Founding Experience', desc: 'Founder of KodingYuk!' },
  { icon: '💻', label: 'Fullstack Development', desc: 'Next.js, Node.js & Firebase' },
  { icon: '🏗️', label: 'System Engineering', desc: 'IT System @ Tunas Rent' },
  { icon: '👔', label: 'Leadership', desc: 'Former CTO @ Ousean Global' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      )

      gsap.fromTo('.about-highlight',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.about-highlights',
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 dark:bg-indigo-600/15 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 dark:bg-purple-600/12 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-code"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 text-gray-500 text-xs mb-6 uppercase tracking-[0.3em]">
            src/components/About.ts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            <span className="code-keyword">func</span> <span className="code-function">getAboutMe</span><span className="text-white">()</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="about-content">
            <div className="ide-card">
              <div className="ide-header">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-4 text-[10px] font-mono text-gray-500">AboutMe.ts</span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-base font-bold dark:text-white text-slate-200 mb-4">
                  Builder. Founder. Developer.
                </h3>
                <p className="dark:text-slate-400 text-slate-400 leading-relaxed mb-4 text-sm">
                  I build digital products — from mobile apps to web platforms — with a focus on real-world impact and clean execution. Currently engineering IT systems at Tunas Rent while running KodingYuk!, my own digital studio.
                </p>
                <p className="dark:text-slate-400 text-slate-400 leading-relaxed mb-8 text-sm">
                  2+ years across mobile (Flutter, Kotlin), fullstack (Next.js, Firebase), and ERP systems. Former CTO at Ousean Global. Bangkit Academy graduate (Google, GoTo, Traveloka).
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-white/5 pt-8 mt-8">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold code-keyword mb-1">2+</div>
                    <div className="text-[8px] md:text-[10px] font-code uppercase tracking-widest text-gray-500">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold code-string mb-1">15+</div>
                    <div className="text-[8px] md:text-[10px] font-code uppercase tracking-widest text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold code-variable mb-1">5+</div>
                    <div className="text-[8px] md:text-[10px] font-code uppercase tracking-widest text-gray-500">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="about-highlights">
            <div className="grid gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="about-highlight ide-card !p-4 flex items-center gap-5 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div className="font-code">
                    <h4 className="text-sm font-semibold dark:text-white text-slate-800 mb-0.5">{item.label}</h4>
                    <p className="code-comment text-[10px]">{item.desc}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="code-keyword text-xs font-mono">{'->'}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
