'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: '📱',
    color: 'from-cyan-400 to-blue-600',
    skills: [
      { name: 'Flutter & Dart', level: 95 },
      { name: 'Kotlin (Android)', level: 85 },
      { name: 'Firebase Mobile', level: 90 },
      { name: 'Mobile UI/UX', level: 88 },
    ],
  },
  {
    title: 'Web & Fullstack',
    icon: '🌐',
    color: 'from-indigo-500 to-purple-600',
    skills: [
      { name: 'Next.js & React', level: 92 },
      { name: 'Node.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    title: 'ERP & Engineering',
    icon: '⚙️',
    color: 'from-emerald-400 to-green-600',
    skills: [
      { name: 'Odoo ERP', level: 85 },
      { name: 'Python (Backend)', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'System Architecture', level: 85 },
    ],
  },
  {
    title: 'AI & Tools',
    icon: '🤖',
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'Cloud Firestore', level: 90 },
      { name: 'RESTful APIs', level: 92 },
    ],
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-category',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'back.out(1.4)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          }
        }
      )

      gsap.fromTo('.skill-bar-fill',
        { width: 0 },
        {
          width: 'var(--skill-level)',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 70%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-purple-600/12 bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 dark:bg-indigo-600/12 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-code"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 text-gray-500 text-xs mb-6 uppercase tracking-[0.3em]">
            config/tech-stack.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            <span className="code-keyword">const</span> <span className="code-variable">skills</span> = <span className="text-white">[...]</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category ide-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Window Header */}
              <div className="ide-header">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{category.title.replace(/\s+/g, '')}.json</span>
              </div>

              <div className="p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold dark:text-white text-slate-800 font-code">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="font-code">
                      <div className="flex justify-between items-center mb-2">
                        <span className="code-variable text-sm">{skill.name}</span>
                        <span className="code-number text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="skill-bar-fill h-full rounded-full bg-indigo-500"
                          style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
