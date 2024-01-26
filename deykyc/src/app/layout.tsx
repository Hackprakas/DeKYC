import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbart from './components/navbar'
import Providers from './components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeKYC',
  description: 'Hassle free KYC verification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
