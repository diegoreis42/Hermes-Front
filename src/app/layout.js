import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Credit from './Components/Credit'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login',
  description: 'Basic login system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>

        {children}

        <footer>
          <Credit />
        </footer>
      </body>
    </html>
  )
}
