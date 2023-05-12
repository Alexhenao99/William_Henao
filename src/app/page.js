import Image from 'next/image'
import foto from '../images/photo CV.png'
import correo from '../images/iconos/correo.png'
import github from '../images/iconos/github.png'
import linkedin from '../images/iconos/linkedin.png'
import cv from '../images/iconos/cv.png'
import Link from 'next/link'
import TypewriterEffect from '@/components/TypewriterEffect'

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
          <p className='pb-14 lg:text-4xl text-center'>
            Apasionado por la creación de soluciones innovadoras en el mundo digital. Durante mi formación he adquirido sólidos conocimientos en diferentes tecnologías y metodologías de desarrollo web, y estoy emocionado de aplicarlos en la práctica. Si bien no tengo una extensa experiencia
            profesional previa, estoy dispuesto a trabajar duro y a enfrentar nuevos desafíos para poder crecer y desarrollarme en esta apasionante carrera.
          </p>
          <section className='w-full flex items-end justify-around'>
            <Image
              src={correo}
              alt='Icono de Correo'
              className='w-12 h-12 lg:w-24 lg:h-24'
            />
            <Image
              src={github}
              alt='Icono de Github'
              className='w-12 h-12 lg:w-24 lg:h-24'
            />
            <Image
              src={linkedin}
              alt='Icono de Linkedin'
              className='w-12 h-12 lg:w-24 lg:h-24'
            />
            <Image
              src={cv}
              alt='Icono de CV'
              className='w-12 h-12 lg:w-24 lg:h-24'
            />
          </section>
        </section>
        <section className='flex justify-center items-center mx-4'>
          <Image
            src={foto}
            alt='Foto de William Henao'
            width={700}
            height={475}
            sizes='100vw'
            className='w-96 lg:w-full lg:h-auto rounded-3xl shadow-text dark:shadow-text_secondary mb-8 lg:mb-0'
          />
        </section>
      </section>
      <section className='w-full flex justify-center pb-5 pt-16'>
        <Link
          href='/projects'
          className='flex items-center justify-center text-lg lg:text-5xl  bg-bg_dark dark:bg-bg_dark_secondary rounded-[50px] text-text_dark w-48 h-12 lg:w-96 lg:h-24'
        >
          Proyectos
        </Link>
      </section>
    </div>
  )
}

export default Home
