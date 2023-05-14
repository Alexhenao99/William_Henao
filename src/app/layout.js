import DarkMode from '@/components/DarkMode'
import './globals.css'
import { Itim } from 'next/font/google'

const itim = Itim({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'William Henao'
}

const Body = ({ className, children }) => (
  <body className={`min-h-screen bg-bg text-text dark:bg-bg_dark dark:text-text_dark ${className}`}>
    <DarkMode />
    {children}
  </body>
)

const RootLayout = ({ children, modal }) => {
  return (
    <html lang='en'>
      <Body className={itim.className}>
        {children}
        {modal}
      </Body>
    </html>
  )
}

export default RootLayout
