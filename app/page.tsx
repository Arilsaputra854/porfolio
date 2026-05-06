'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ExperienceSection from '@/sections/ExperienceSection'
import SkillsSection from '@/sections/SkillsSection'
import ProjectsSection from '@/sections/ProjectsSection'
import ContactSection from '@/sections/ContactSection'
import Footer from '@/components/Footer'
import CursorParticles from '@/components/CursorParticles'

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved !== 'light'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <main className={`relative min-h-screen transition-colors duration-500 ${
      isDark
        ? 'bg-[#030014]'
        : 'bg-gradient-to-br from-slate-50 via-white to-indigo-50/40'
    }`}>
      <CursorParticles />

      {/* Grid Pattern */}
      <div className={`fixed inset-0 pointer-events-none grid-pattern ${isDark ? 'opacity-100' : 'opacity-40'}`} />

      {/* Background Depth Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <>
            <div className="depth-layer w-[700px] h-[700px] -top-56 -left-56 bg-indigo-600/20" />
            <div className="depth-layer w-[500px] h-[500px] top-1/3 -right-24 bg-purple-600/15" />
            <div className="depth-layer w-[400px] h-[400px] bottom-1/4 left-1/4 bg-cyan-500/10" />
            <div className="depth-layer w-[300px] h-[300px] bottom-0 right-1/3 bg-pink-500/10" />
          </>
        ) : (
          <>
            <div className="depth-layer w-[600px] h-[600px] -top-48 -left-48 bg-indigo-400/30" />
            <div className="depth-layer w-[500px] h-[500px] top-1/3 -right-24 bg-purple-400/25" />
            <div className="depth-layer w-[400px] h-[400px] bottom-1/4 left-1/4 bg-cyan-400/20" />
            <div className="depth-layer w-[300px] h-[300px] bottom-0 right-1/3 bg-pink-400/15" />
          </>
        )}
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
