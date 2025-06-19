import { Inter } from 'next/font/google'
import { Providers } from "@/components/providers"
import { Toaster as Sonner } from "@/components/ui/sonner"
import type { Metadata } from "next";
import './globals.css'
import '@/lib/fontawesome'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
    title: 'Deal Closer™ - Close Bigger Deals. Faster. With Precision.',
  description: 'The first CRM and sales pipeline platform built around The Dealcrafter Framework™',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}