'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skillCategories = [
  {
    title: 'Mobile',
    icon: '📱',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Android', 'Firebase Mobile', 'Mobile UI/UX'],
  },
  {
    title: 'Web & Frontend',
    icon: '🌐',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
  },
  {
    title: 'Backend & ERP',
    icon: '⚙️',
    skills: ['Python', 'Odoo ERP', 'PostgreSQL', 'Docker', 'RESTful APIs', 'System Architecture'],
  },
  {
    title: 'Tools & Cloud',
    icon: '🛠️',
    skills: ['Firebase', 'Cloud Firestore', 'Git', 'GitHub', 'Machine Learning', 'Figma'],
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-purple-600/12 bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 dark:bg-indigo-600/12 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 text-gray-500 text-xs mb-6 uppercase tracking-[0.3em] font-mono">
            config/tech-stack.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            Tech Stack
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm max-w-md mx-auto">
            Tools and technologies I work with across mobile, web, backend, and cloud.
          </p>
        </motion.div>

        <div className="skills-grid grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category ide-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="ide-header">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {category.title.replace(/\s+/g, '').toLowerCase()}.json
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-200">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono bg-white/5 text-gray-300 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
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
