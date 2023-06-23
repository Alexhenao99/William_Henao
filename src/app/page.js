import Link from 'next/link'
import TypewriterEffect from '@/components/TypewriterEffect'

import correo from '../images/iconos/correo.png'
import github from '../images/iconos/github.png'
import linkedin from '../images/iconos/linkedin.png'
import cv from '../images/iconos/cv.png'
import AllSkills from '@/components/AllSkills'
import icon from '@/utils/icons'

const Home = () => {
  return (
    <div className='min-h-screen pt-16 flex flex-col justify-center'>
      <section className='flex flex-col-reverse lg:grid lg:grid-cols-3'>
        <section className='grid lg:col-span-2 lg:justify-items-center px-2 lg:px-16'>
          <section className='flex flex-col items-center pb-8 lg:pb-16'>
            <h1 className='text-3xl lg:text-7xl font-bold '>William Henao</h1>
            <h3 className='text-base lg:text-4xl'>Desarrollador Web Full-Stack</h3>
            <TypewriterEffect />
          </section>
          <p className='pb-14 text-lg lg:text-3xl text-center'>
            Apasionado por la creación de soluciones innovadoras en el mundo digital. Durante mi formación he adquirido sólidos conocimientos en diferentes tecnologías y metodologías de desarrollo web, y estoy emocionado de aplicarlos en la práctica. Si bien no tengo una extensa experiencia
            profesional previa, estoy dispuesto a trabajar duro y a enfrentar nuevos desafíos para poder crecer y desarrollarme en esta apasionante carrera.
          </p>
          <section className='w-full flex items-end justify-around'>
            <Link href='/contact' className='focus:cursor-wait'> {icon(correo, 'Correo')} </Link>
            <Link
              href='https://github.com/Alexhenao99'
              target='_blank'
              rel='noopener noreferrer'
            >
              {icon(github, 'GitHub')}
            </Link>
            <Link
              href='https://www.linkedin.com/in/william-henao-29a2b2251/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {icon(linkedin, 'Linkedin')}
            </Link>
            <Link href='/cv' className='focus:cursor-wait'>{icon(cv, 'Cv')}</Link>
          </section>
        </section>
        <section className='flex flex-col justify-center mx-1'>
          <Link href='/skills'>
            <AllSkills />
          </Link>
        </section>
      </section>
      <section className='w-full flex justify-center pb-5 pt-16'>
        <Link
          href='/projects'
          className='flex items-center justify-center text-lg focus:cursor-wait hover:scale-105 hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow transition-all duration-300 lg:text-5xl  bg-bg_dark dark:bg-bg_dark_secondary rounded-[50px] text-text_dark dark:text-text w-48 h-12 lg:w-96 lg:h-24'
        >
          Proyectos
        </Link>
      </section>
    </div>
  )
}

export default Home
