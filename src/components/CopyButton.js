'use client'

import { useState } from 'react'
import { mail } from '@/utils/personalData'
import Image from 'next/image'

import correo from '../images/iconos/facebook.png'

const CopyButton = () => {
  const [copied, setCopied] = useState(false)
  const [cursor, setCursor] = useState(false)

  const handleCopyClick = () => {
    const email = mail()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      className='relative flex flex-col items-center'
      onClick={handleCopyClick}
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
    >
      <Image
        src={correo}
        alt='Icono de Correo'
        className='w-12 h-12 lg:w-24 lg:h-24 hover:scale-110 hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow'
      />
      <p className={`absolute -bottom-10 -left-11 lg:-left-5 ${cursor ? 'block' : 'hidden'} mx-3 text-xs w-28 ${copied ? 'text-text_secondary' : 'text-text dark:text-text_dark'} border-2 rounded-3xl p-2`}>{copied ? 'Copiado' : 'Copiar correo'}</p>
    </button>
  )
}

export default CopyButton
