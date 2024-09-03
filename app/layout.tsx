import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './_scss/globals.scss'
import RouteChange from './_components/route-change-detector'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = ({props}: {props: any}): Metadata => {
  return {
    title: `Next JS 14 app`,
    description: 'Description'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10`}>
      <RouteChange></RouteChange>
        {children}
      </body>
    </html>
  )
}
