import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HamaWebDev Portfolio',
  description: 'An ultra-modern portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
            <CustomCursor />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

