import './globals.css'

export const metadata = {
  title: 'IMDB Clone',
  description: 'Itsa clone!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
