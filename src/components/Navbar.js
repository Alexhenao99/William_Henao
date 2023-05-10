'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const endPoint = usePathname()

  const links = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Proyectos',
      route: '/projects'
    },
    {
      label: 'Habilidades',
      route: '/skills'
    },
    {
      label: 'Contacto',
      route: '/contact'
    }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap h-16 py-4'>
      <div className='w-full relative flex items-center justify-center md:hidden'>
        <div className='w-full flex justify-center'>
          <span className='font-semibold text-3xl'>William Henao</span>
        </div>
        <div className='absolute top-0 right-0 px-2'>
          <button onClick={toggleMenu}>
            <title>Menu</title>
            {isMenuOpen ? <XMarkIcon className='h-6 w-4 text-text ' /> : <Bars3Icon className='h-8 w-8 flex justify-center text-text dark:text-text_secondary' />}
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className='text-lg lg:flex-grow'>
          <ul className='md:flex md:justify-around md:px-16 md:text-3xl'>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link
                  href={route}
                  className={`${endPoint === route ? 'text-text_secondary md:bg-text dark:md:bg-text_secondary md:px-4 md:pt-5 md:pb-2 md:rounded-br-2xl md:rounded-bl-2xl md:text-text_dark dark:md:text-text' : 'text-text dark:text-text_dark'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
