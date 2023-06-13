import DarkMode from '@/components/DarkMode'
import './globals.css'
import { EB_Garamond } from 'next/font/google' // eslint-disable-line

const ebGaramond = EB_Garamond({ subsets: ['latin'] })

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
      <Body className={ebGaramond.className}>
        {children}
        {modal}
      </Body>
    </html>
  )
}

export default RootLayout
