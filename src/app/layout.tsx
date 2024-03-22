import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sean Ang',
    template: '%s | Sean Ang',
  },
  description: 'Software Engineer, Gamer and aspiring Blogger',
}
const cx = (...classes: any[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cx(
        inter.className,
        'text-black bg-white dark:text-white dark:bg-[#111010]'
      )}
    >
      <body className="antialiased max-w-2xl mb-4 flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
