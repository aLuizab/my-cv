import type { Viewport } from "next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/lib/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import Dots from "@/components/dotted-dots"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Dots />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
