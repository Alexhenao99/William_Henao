'use client'

import Image from 'next/image'
import { useState } from 'react'

const Cards = ({ props }) => {
  const { title, status, Images, Skills } = props

  const [display, setDisplay] = useState(false)

  const handleMouseSectionOn = () => {
    setDisplay(true)
  }
  const handleMouseSectionOff = () => {
    setDisplay(false)
  }

  const image = Images.filter((image) => (image.cover === true))

  const finished = () => {
    return (
      <section
        style={{ backgroundImage: `url(${new URL(`${image[0].link}`)})`, display: 'flex', alignItems: 'end' }}
        className='bg-no-repeat bg-cover bg-center h-[398px] w-[261px] hover:border-b hover:border-r hover:border-blue-900 m-3 rounded-2xl hover:scale-110 shadow-md hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow blur-sm hover:blur-0 transition-all duration-300'
        onMouseEnter={handleMouseSectionOn}
        onMouseLeave={handleMouseSectionOff}
      >
        {display && (
          <div className='h-24 w-[260px] px-2 bg-label_f text-text_dark text-4xl rounded-br-2xl rounded-bl-2xl'>
            <p className='truncate'>
              {title}
            </p>
            <section className='flex'>
              {Skills.slice(0, 5).map((skill) => (
                <Image
                  key={skill.id}
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className='m-1'
                />
              ))}
            </section>
          </div>
        )}
      </section>
    )
  }

  const development = () => {
    return (
      <section
        style={{ backgroundImage: `url(${new URL(`${image[0].link}`)})`, backdropFilter: 'grayscale(100%)' }}
        className='relative grayscale hover:grayscale-0 blur-sm hover:blur-[1px] bg-no-repeat bg-cover bg-center h-[398px] w-[261px] hover:border-b hover:border-r hover:border-blue-900 m-3 rounded-2xl hover:scale-110 shadow-md hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow transition-all duration-300'
        onMouseEnter={handleMouseSectionOn}
        onMouseLeave={handleMouseSectionOff}
      >
        {display && (
          <div className='z-50 absolute bottom-0 px-2 h-24 w-[260px] bg-label_d text-text_dark text-4xl rounded-br-2xl rounded-bl-2xl'>
            En Desarrollo
            <section className='flex'>
              {Skills.slice(0, 5).map((skill) => ( // * slice limita a 5 la cantidad de habilidades a mostrar
                <Image
                  key={skill.id}
                  src={skill.image}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className='m-1'
                />
              ))}
            </section>
          </div>
        )}
      </section>
    )
  }

  return <div>{status ? finished() : development()}</div>
}

export default Cards
