import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Thirdweb from './components/thirdweb'
import { Providers } from './components/provider'
import Navbart from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DEKYC',
  description: 'Secure Kyc Powered By Web3',
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
        <Thirdweb>
        {children}
        </Thirdweb>
        </Providers>
        </body>
    </html>
  )
}
