import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Aril Saputra | Fullstack & Mobile Developer',
  description: 'Building scalable web, mobile, and digital experiences with modern technologies. Expert in Next.js, Vue/Nuxt, Flutter, Laravel, Go, and WordPress.',
  keywords: ['Fullstack Developer', 'Mobile Developer', 'Next.js', 'Vue.js', 'Flutter', 'Laravel', 'Go', 'WordPress'],
  authors: [{ name: 'Aril Saputra' }],
  openGraph: {
    title: 'Aril Saputra | Fullstack & Mobile Developer',
    description: 'Building scalable web, mobile, and digital experiences with modern technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
