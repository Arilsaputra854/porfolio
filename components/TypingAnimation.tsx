'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const codeLines = [
  { text: 'const developer = {', color: 'code-keyword' },
  { text: '  name: "Aril Saputra",', color: 'text-white' },
  { text: '  role: "Fullstack Mobile Dev",', color: 'text-white' },
  { text: '  skills: ["Flutter", "Kotlin", "Next.js"],', color: 'code-string' },
  { text: '  founder_of: "KodingYuk!",', color: 'code-variable' },
  { text: '  location: "Indonesia",', color: 'code-string' },
  { text: '};', color: 'code-keyword' },
  { text: '', color: '' },
  { text: 'developer.createAwesome();', color: 'code-function' },
]

export default function TypingAnimation() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color: string }[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isComplete) return

    const currentLine = codeLines[currentLineIndex]
    if (!currentLine) {
      setIsComplete(true)
      return
    }

    if (currentCharIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev]
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = { text: '', color: currentLine.color }
          }
          newLines[currentLineIndex] = {
            text: currentLine.text.slice(0, currentCharIndex + 1),
            color: currentLine.color
          }
          return newLines
        })
        setCurrentCharIndex(prev => prev + 1)
      }, 20 + Math.random() * 20)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 150)

      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex, isComplete])

  // Restart animation after completion
  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
        setIsComplete(false)
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [isComplete])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Code Editor Window */}
      <div className="ide-card font-code shadow-none">
        {/* Title Bar */}
        <div className="ide-header">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-gray-500 text-[10px] font-mono ml-4 uppercase tracking-widest">Main.ts</span>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[240px] bg-[#0d0f14]/50">
          {displayedLines.filter(line => line).map((line, index) => (
            <div key={index} className={`${line.color} whitespace-pre`}>
              {line.text}
              {index === currentLineIndex && !isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-gray-500 ml-0.5 -mb-0.5"
                />
              )}
            </div>
          ))}
          {displayedLines.length === 0 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-gray-500"
            />
          )}
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-3 px-3 py-1 bg-[#1e212b] border border-[#232634] rounded-md text-gray-400 text-[10px] font-mono shadow-xl uppercase tracking-widest"
      >
        Status: <span className="text-emerald-500">Live</span>
      </motion.div>
    </motion.div>
  )
}
