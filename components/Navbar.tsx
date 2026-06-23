'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

const navLinks = [
  { name: 'Home', href: '#home', file: 'Home', icon: '⚛️' },
  { name: 'About', href: '#about', file: 'About', icon: '📝' },
  { name: 'Products', href: '#products', file: 'Products', icon: '🏗️' },
  { name: 'Experience', href: '#experience', file: 'Experience', icon: '📋' },
  { name: 'Skills', href: '#skills', file: 'Skills', icon: '⚙️' },
  { name: 'Projects', href: '#projects', file: 'Projects', icon: '🚀' },
  { name: 'Contact', href: '#contact', file: 'Contact', icon: '🔌' },
]

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0d0f14] border-b border-white/5 font-code transition-shadow ${
          scrolled ? 'shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)]' : ''
        }`}
      >
        {/* Top Tab Bar */}
        <div className="flex items-center overflow-x-auto no-scrollbar scroll-smooth">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 border-r border-white/5 text-[10px] md:text-[11px] uppercase tracking-widest transition-all relative min-w-fit ${
                activeSection === link.href.slice(1)
                  ? 'bg-white/5 text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500'
                  : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              <span className="text-xs md:text-sm opacity-70">{link.icon}</span>
              {link.file}
              {activeSection === link.href.slice(1) && (
                <span className="ml-2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-500" />
              )}
            </a>
          ))}
          
          <div className="ml-auto sticky right-0 bg-[#0d0f14]/80 backdrop-blur-md flex items-center px-4 gap-4 border-l border-white/5 h-full py-3">
            <button
              onClick={toggleTheme}
              className="text-gray-500 hover:text-yellow-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-500"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col gap-1 w-4">
                <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                {!mobileMenuOpen && <span className="h-0.5 bg-current" />}
                <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Breadcrumb Bar (Hidden on very small screens) */}
        <div className="hidden sm:flex bg-[#161b22] px-6 py-1.5 items-center gap-2 text-[10px] text-gray-500 border-b border-white/5 overflow-x-auto no-scrollbar">
          <span className="hover:text-gray-300 cursor-pointer whitespace-nowrap">aril-saputra</span>
          <span>&gt;</span>
          <span className="hover:text-gray-300 cursor-pointer whitespace-nowrap">src</span>
          <span>&gt;</span>
          <span className="text-gray-400 capitalize whitespace-nowrap">{activeSection}</span>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[#0d0f14] pt-24 px-6 md:hidden font-code"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`p-4 border border-white/5 rounded-lg flex items-center gap-4 ${
                    activeSection === link.href.slice(1)
                      ? 'bg-indigo-500/10 border-indigo-500/30 text-white'
                      : 'text-gray-500'
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                    <span className="text-[10px] opacity-50">{link.file}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
