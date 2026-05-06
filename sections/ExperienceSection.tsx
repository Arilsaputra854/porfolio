'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const experiences = [
  {
    id: 1,
    title: 'IT System Engineering (Intern)',
    company: 'Tunas Rent',
    icon: '🏗️',
    color: 'from-blue-500 to-indigo-600',
    description: 'Sep 2025 - Present',
    achievements: [
      'Focusing on IT system optimization and engineering processes',
      'Contributing to corporate system infrastructure development',
      'Implementing scalable solutions for enterprise requirements',
    ],
    tags: ['System Engineering', 'IT Infrastructure', 'Enterprise Solutions'],
  },
  {
    id: 2,
    title: 'Founder & Fullstack Developer',
    company: 'KodingYuk!',
    icon: '🚀',
    color: 'from-emerald-400 to-teal-600',
    description: 'Sep 2023 - Present',
    achievements: [
      'Founded and leading a digital solution agency',
      'Managing fullstack development for various client projects',
      'Overseeing project lifecycles from concept to deployment',
    ],
    tags: ['Next.js', 'Flutter', 'Firebase', 'Leadership'],
  },
  {
    id: 3,
    title: 'Chief Technology Officer (CTO)',
    company: 'PT Ousean Global Digital',
    icon: '👔',
    color: 'from-purple-500 to-pink-600',
    description: 'Feb 2024 - Sep 2024',
    achievements: [
      'Directed technical strategy and roadmap for the company',
      'Managed developer teams and technical operations',
      'Built and maintained core product architectures',
    ],
    tags: ['CTO', 'Management', 'System Architecture', 'Product Strategy'],
  },
  {
    id: 4,
    title: 'Mobile Developer Cohort',
    company: 'Bangkit Academy (Google, GoTo, Traveloka)',
    icon: '🎓',
    color: 'from-orange-400 to-red-600',
    description: 'Aug 2024 - Dec 2024',
    achievements: [
      'Selected for prestigious Google-led tech training program',
      'Specialized in Android Development with Kotlin',
      'Collaborated on cross-functional capstone projects',
    ],
    tags: ['Kotlin', 'Android', 'Machine Learning', 'API'],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-card',
        { opacity: 0, y: 80, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.exp-grid',
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 dark:bg-indigo-600/12 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 dark:bg-cyan-600/10 bg-cyan-400/20 rounded-full blur-3xl" />

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
            src/career/History.tsx
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            <span className="code-keyword">class</span> <span className="code-variable">ProfessionalExperience</span>
          </h2>
        </motion.div>

        {/* Experience Grid */}
        <div className="exp-grid grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="exp-card ide-card group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Header */}
              <div className="ide-header">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{exp.company.replace(/\s+/g, '')}.log</span>
              </div>

              <div className="p-6 md:p-8">
                {/* Title */}
                <div className="font-code mb-6">
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-800 mb-1">{exp.title}</h3>
                  <p className="code-function font-semibold text-xs md:text-sm mb-2">{exp.company}</p>
                  <p className="code-comment text-[9px] md:text-[10px] font-mono tracking-wider">{exp.description}</p>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mb-8 font-code text-[11px] md:text-xs">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                      <span className="code-keyword flex-shrink-0">{'>>'}</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 font-code">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5"
                    >
                      <span className="code-variable">#</span>{tag}
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
