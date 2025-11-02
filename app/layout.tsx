import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RedditGrow - Grow Your Reddit Presence',
  description: 'The ultimate platform to grow your Reddit community, engagement, and reach organically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
