'use client'

import { motion } from 'framer-motion'

const products = [
  {
    name: 'KodingYuk!',
    logo: '🚀',
    tagline: 'Digital studio building custom web & mobile products for founders and businesses across Indonesia.',
    stack: ['Next.js', 'Flutter', 'Firebase', 'Node.js'],
    status: 'Live · Active clients',
    role: 'Founder & Lead Developer',
    since: 'Sep 2023',
    link: 'https://kodingyuk.id',
  },
  {
    name: 'Sampahku.id',
    logo: '♻️',
    tagline: 'Community waste management platform connecting urban residents to sustainable disposal and real-time waste tracking services.',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    status: 'Live · 500+ users',
    role: 'Founder & Solo Developer',
    since: '2024',
    link: 'https://sampahku.id',
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 dark:bg-emerald-600/10 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 dark:bg-indigo-600/10 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 text-gray-500 text-xs mb-6 uppercase tracking-[0.3em] font-mono">
            src/products/index.ts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-800 mb-4">
            Products I&apos;ve Built
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-sm max-w-xl mx-auto">
            From idea to launch — real products I founded, built, and continue to grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="ide-card group"
            >
              <div className="ide-header">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-3 text-[10px] font-mono text-gray-500">
                  product/{product.name.toLowerCase().replace(/[^a-z]/g, '')}.ts
                </span>
              </div>

              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-3xl flex-shrink-0">
                    {product.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white text-slate-200 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {product.status}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">Since {product.since}</span>
                    </div>
                  </div>
                </div>

                <p className="dark:text-slate-400 text-slate-400 text-sm leading-relaxed mb-6">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-8 text-xs font-mono border-t border-white/5 pt-6">
                  <span className="text-gray-500">Role:</span>
                  <span className="text-indigo-400 font-medium">{product.role}</span>
                </div>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 text-xs text-center font-bold bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-all rounded"
                >
                  Visit Live →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
