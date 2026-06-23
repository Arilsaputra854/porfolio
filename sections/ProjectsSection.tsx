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
  status: string
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
    description: 'Community-driven waste management platform solving urban waste sorting and disposal challenges in Indonesia. Connects households to local waste collectors with real-time tracking and scheduling. Built from scratch as a solo founder — from product ideation to full deployment. Currently live with 500+ registered users across multiple cities.',
    status: 'Live · 500+ users',
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
    description: 'Digital studio platform showcasing services, client case studies, and enabling direct project requests from businesses and founders. Built to support a growing portfolio of web and mobile clients across Indonesia. Handles lead generation, service presentation, and client onboarding flows. Actively serving clients since Sep 2023.',
    status: 'Live · Active clients',
    category: 'web',
    stack: ['Next.js', 'React', 'Firebase', 'Framer Motion'],
    role: 'Founder',
    image: '/projects/kodingyuk.jpg',
    demo: 'https://kodingyuk.id',
  },
  {
    id: 3,
    title: 'Attendance Mobile App',
    description: 'Real-time attendance tracking app for Tunas Rent employees with GPS-based location validation and geofencing to prevent buddy punching. Integrates with the company HR workflow for daily reporting and leave management. Built in Flutter with offline-first support for low-connectivity environments. Deployed across 100+ employees in multiple branches.',
    status: 'Deployed · 100+ users',
    category: 'mobile',
    stack: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    role: 'Mobile Developer',
    image: '/projects/attendance.jpg',
    github: '#',
  },
  {
    id: 4,
    title: 'ERP Inventory System',
    description: 'Integrated inventory management system built on Odoo to streamline warehouse operations at a corporate scale. Covers stock tracking, purchase order workflows, and supplier management with real-time dashboards. Customized Odoo modules to fit specific operational requirements of the business. Reduced manual inventory reconciliation time by over 60%.',
    status: 'Deployed · Enterprise',
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
      <div className="absolute top-1/3 right-0 w-96 h-96 dark:bg-indigo-600/12 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 dark:bg-purple-600/10 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 text-gray-500 text-xs mb-6 uppercase tracking-[0.3em] font-mono">
            src/modules/Portfolio.tsx
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            Projects
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm max-w-md mx-auto">
            Things I&apos;ve shipped — from client work to personal builds.
          </p>
        </motion.div>

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

        <div className="projects-grid grid md:grid-cols-2 gap-6">
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
                <div className="ide-header">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <span className="ml-2 text-[10px] font-mono text-gray-500">
                    {project.category}/{project.title.toLowerCase().replace(/\s+/g, '-')}.md
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base font-bold dark:text-white text-slate-200 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-mono flex-shrink-0 mt-0.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  <p className="dark:text-slate-400 text-slate-400 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="text-[10px] font-mono mb-4">
                    <span className="text-gray-500">Role: </span>
                    <span className="text-indigo-400">{project.role}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[9px] bg-white/5 text-gray-400 border border-white/5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-[10px] text-center font-bold bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 transition-colors rounded"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-[10px] text-center font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 transition-colors rounded"
                      >
                        Source
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
