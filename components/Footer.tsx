'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="dark:border-white/5 border-t border-indigo-100 py-10 dark:bg-transparent bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="text-indigo-500 font-bold text-lg">
              &lt;/&gt;
            </div>
            <span className="dark:text-slate-500 text-slate-500 text-sm">
              <span className="dark:text-white text-slate-800 font-bold">Aril Saputra</span> — Fullstack &amp; Mobile Developer
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/arilsaputra" target="_blank" rel="noopener noreferrer"
              className="dark:text-slate-600 text-slate-500 dark:hover:text-white hover:text-indigo-600 transition-colors duration-200 text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/arilsaputra" target="_blank" rel="noopener noreferrer"
              className="dark:text-slate-600 text-slate-500 dark:hover:text-white hover:text-indigo-600 transition-colors duration-200 text-sm">
              LinkedIn
            </a>
            <a href="mailto:aril.saputra@email.com"
              className="dark:text-slate-600 text-slate-500 dark:hover:text-white hover:text-indigo-600 transition-colors duration-200 text-sm">
              Email
            </a>
          </div>

          <p className="dark:text-slate-700 text-slate-400 text-xs font-mono">
            © {currentYear} · Built with Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
