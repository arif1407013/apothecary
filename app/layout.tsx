import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './_scss/globals.scss'
import { headers } from "next/headers";

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({props}: {props: any}): Promise<Metadata> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: {
          default: 'Apothecary',
          template: '%s | Apothecary'
        },
        description: 'Description'
      });
    }, 10)
  })
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const headersList = headers();
  return (
    <html lang="en">
      <body className={`${inter.className} p-10`}>
        <div>route:{headersList.get("x-pathname")}</div>
        {/* <RouteChange></RouteChange> */}
        {children}
      </body>
    </html>
  )
}
