'use client'

import { useEffect, useState } from 'react'

import luna from '../images/iconos/luna.png'
import sol from '../images/iconos/sol.png'
import Image from 'next/image'

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const localDark = JSON.parse(localStorage.getItem('isDarkMode')) || false
    setIsDarkMode(localDark)
    if (localDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleToggle = () => {
    const newIsDarkMode = !isDarkMode
    setIsDarkMode(newIsDarkMode)
    if (!newIsDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('isDarkMode', 'false')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('isDarkMode', 'true')
    }
  }

  return (
    <button
      className='absolute p-2 z-30'
      onClick={handleToggle}
    >
      {isDarkMode
        ? (
          <Image
            src={luna}
            width={50}
            height={50}
            alt='Luna'
          />
          )
        : (
          <Image
            src={sol}
            width={50}
            height={50}
            alt='sol'
          />
          )}
    </button>
  )
}

export default DarkMode
