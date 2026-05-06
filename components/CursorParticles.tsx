'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  color: string
}

const COLORS = [
  '#6366f1', '#818cf8', '#8b5cf6',
  '#a78bfa', '#ec4899', '#f472b6',
  '#06b6d4', '#22d3ee', '#10b981',
]

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let mouseX = 0, mouseY = 0
    let prevX = 0, prevY = 0
    let cursorSpeed = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      prevX = mouseX
      prevY = mouseY
      mouseX = e.clientX
      mouseY = e.clientY

      const dx = mouseX - prevX
      const dy = mouseY - prevY
      cursorSpeed = Math.sqrt(dx * dx + dy * dy)

      // More particles when moving fast (1–6)
      const count = Math.min(1 + Math.floor(cursorSpeed / 10), 6)
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const spd = 0.5 + Math.random() * (1 + cursorSpeed * 0.05)
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        // Bigger dots when faster
        const size = 2 + Math.random() * 3 + Math.min(cursorSpeed * 0.07, 4)
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 6,
          y: mouseY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd - 0.5,
          life: 1,
          size,
          color,
        })
      }
    }

    window.addEventListener('mousemove', onMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter(p => p.life > 0.02)
      // Cap at 150 particles
      if (particles.length > 150) particles = particles.slice(-150)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.06           // gentle gravity
        p.vx *= 0.96           // air friction
        p.vy *= 0.98
        // Faster cursor = faster fade
        p.life -= 0.024 + cursorSpeed * 0.0008

        const alpha = Math.max(0, p.life)
        const r = Math.max(0.1, p.size * p.life)

        ctx.save()
        ctx.globalAlpha = alpha * 0.88
        ctx.shadowBlur = 8 + cursorSpeed * 0.25
        ctx.shadowColor = p.color
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      aria-hidden="true"
    />
  )
}
