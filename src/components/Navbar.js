'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const endPoint = usePathname()
  const circleRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (circleRef.current && !circleRef.current.contains(event.target)) {
        // El clic ocurrió fuera del área del círculo
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

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

  const pages = () => {
    return links.map(({ label, route }) => (
      <li
        key={route}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link
          href={route}
          className={`${endPoint === route ? 'text-text_secondary dark:text-text_dark md:bg-text dark:md:bg-text_secondary md:px-4 md:pt-5 md:pb-2 md:rounded-br-2xl md:rounded-bl-2xl md:text-text_dark dark:md:text-text' : 'text-text_dark dark:text-text md:text-text md:dark:text-text_dark'}`}
        >
          {label}
        </Link>
      </li>
    ))
  }

  return (
    <nav className='z-50 flex items-center justify-between flex-wrap h-16 py-4'>
      <section className='w-full relative flex items-center justify-center md:hidden'>
        <div className='w-full flex justify-center'>
          <h1 className='font-semibold text-3xl'>William Henao</h1>
        </div>
        <div className='absolute top-0 right-0 px-2'>
          <button
            className='relative'
            onClick={toggleMenu}
          >
            <Transition
              show={!isMenuOpen}
              enter='transition-opacity duration-150 delay-200'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity duration-150'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Bars3Icon className='absolute -bottom-5 right-0 h-8 w-8 flex justify-center text-text dark:text-text_secondary' />
            </Transition>
          </button>
          <Transition
            show={isMenuOpen}
            enter='transform transition duration-1000 delay-200'
            enterFrom='opacity-0 scale-0'
            enterTo='opacity-100 scale-100'
            leave='transform transition duration-1000'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-0'
          >
            <div
              ref={circleRef}
              className='w-[700px] h-[700px] absolute -top-96 -left-80 backdrop-blur-[2px] bg-circle dark:bg-circle_dark rounded-full'
            >
              {' '}
            </div>
          </Transition>
        </div>
      </section>

      <Transition
        show={isMenuOpen}
        enter='transition-opacity duration-150 delay-[1050ms]'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='z-50 absolute top-14 right-12'>
          <ul className='flex flex-col items-center text-3xl'>{pages()}</ul>
        </div>
      </Transition>

      <div className='hidden w-full md:block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-lg lg:flex-grow'>
          <ul className='md:flex md:justify-around md:px-16 md:text-3xl'>{pages()}</ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
