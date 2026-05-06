'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend'

interface Project {
  id: number
  title: string
  description: string
  category: 'web' | 'mobile' | 'backend'
  stack: string[]
  role: string
  image: string
  demo?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sampahku.id',
    description: 'A comprehensive waste management system platform built to help users manage and track their waste efficiently.',
    category: 'web',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    role: 'Founder & Fullstack Developer',
    image: '/projects/sampahku.jpg',
    demo: 'https://sampahku.id',
    github: '#',
  },
  {
    id: 2,
    title: 'KodingYuk! Platform',
    description: 'Digital agency platform for showcasing services, projects, and managing client requests.',
    category: 'web',
    stack: ['Next.js', 'React', 'Firebase', 'Framer Motion'],
    role: 'Founder',
    image: '/projects/kodingyuk.jpg',
    demo: 'https://kodingyuk.id',
  },
  {
    id: 3,
    title: 'Attendance Mobile App',
    description: 'Real-time attendance tracking application for Tunas Rent employees with location validation.',
    category: 'mobile',
    stack: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    role: 'Mobile Developer',
    image: '/projects/attendance.jpg',
    github: '#',
  },
  {
    id: 4,
    title: 'ERP Inventory System',
    description: 'Integrated inventory management system designed to streamline warehouse operations.',
    category: 'backend',
    stack: ['Python', 'Odoo', 'PostgreSQL', 'Docker'],
    role: 'IT System Engineer',
    image: '/projects/erp.jpg',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }

    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 dark:bg-indigo-600/12 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 dark:bg-purple-600/10 bg-purple-400/20 rounded-full blur-3xl" />

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
            src/modules/Portfolio.tsx
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            <span className="code-keyword">export const</span> <span className="code-function">Projects</span> = <span className="text-white">()</span>{' =>'}
          </h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30'
                  : 'dark:bg-white/5 bg-white/80 dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-indigo-600 dark:hover:bg-white/10 hover:bg-indigo-50 dark:border-white/10 border border-indigo-100'
              }`}
            >
              {cat.label}
              {cat.id !== 'all' && (
                <span className="ml-2 px-1.5 py-0.5 rounded-md text-xs bg-white/10">
                  {projects.filter(p => p.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card ide-card group"
              >
                {/* Header */}
                <div className="ide-header">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <span className="ml-2 text-[10px] font-mono text-gray-500">{project.category}/{project.title.toLowerCase().replace(/\s+/g, '-')}.md</span>
                </div>

                {/* Content */}
                <div className="p-6 font-code">
                  <h3 className="text-base font-bold dark:text-white text-slate-800 mb-2 group-hover:text-indigo-400 transition-colors">
                    <span className="code-function">{project.title.replace(/\s+/g, '')}</span>()
                  </h3>
                  <p className="code-comment text-[10px] mb-4 line-clamp-2">
                    /* {project.description} */
                  </p>
 
                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[9px] bg-white/5 text-gray-400 border border-white/5"
                      >
                        <span className="code-string">&quot;{tech}&quot;</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex-1 py-2 text-[10px] text-center font-bold bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        RUN_DEMO
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 py-2 text-[10px] text-center font-bold bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        VIEW_SOURCE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
