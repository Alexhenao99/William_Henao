'use client'

import { getProjectsById } from '@/utils/fetch/Projects'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import LoadingSpin from './LoadingSpin'
import Carousel from './Carousel'
import Image from 'next/image'
import icon from '@/utils/icons'

import repo from '../images/iconos/github.png'
import web from '../images/iconos/web.png'

const ProjectById = ({ id }) => {
  const [project, setProject] = useState([])
  const [cursor, setCursor] = useState(false)

  useEffect(() => {
    const getProjectData = async () => {
      const project = await getProjectsById(id)
      setProject(project)
    }

    getProjectData()
  }, []) // eslint-disable-line

  if (project.length <= 0) {
    return (
      <div className='h-screen'>
        <LoadingSpin />
      </div>
    )
  }

  const skills = (skills) => {
    return (
      <section className='flex flex-wrap justify-center my-5'>
        {skills.map((skill) => (
          <section
            key={skill.id}
            className='p-2 relative'
            onMouseEnter={() => setCursor(true)}
            onMouseLeave={() => setCursor(false)}
          >
            <Image
              key={skill.id}
              src={skill.image}
              width={60}
              height={60}
              alt={`${skill.name}`}
              className='mx-2'
            />
            <div className={`${cursor ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-full flex items-center justify-center`}>
              <span className='px-3 text-xl text-center dark:bg-bg_dark_secondary dark:text-text bg-bg_dark text-text_dark rounded-3xl'>{skill.name}</span>
            </div>
          </section>
        ))}
      </section>
    )
  }

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-4 pt-14 px-5 h-full w-full rounded-bl-3xl rounded-br-3xl'>
      <div className='lg:grid lg:col-span-2'>
        <section className='flex flex-col items-center w-full'>
          <h1 className='w-full text-center text-5xl lg:text-7xl font-bold '>{project.title}</h1>
          <h3 className='mt-5 text-base lg:text-4xl'>{project.status ? null : '⚠️ Proyecto en desarrollo ⚠️'}</h3>
          {skills(project.Skills)}
          <p className='py-5 text-lg lg:text-3xl text-center'>{project.description}</p>
          <section className='flex my-5'>
            {project.web === []
              ? null
              : (
                <Link
                  href={`${project.web}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-1'
                >
                  {icon(web, 'Pagina Web')}
                </Link>
                )}
            <Link
              href={`${project.repo}`}
              target='_blank'
              rel='noopener noreferrer'
              className='mx-1'
            >
              {icon(repo, 'Repositorio en GitHub')}
            </Link>
          </section>
        </section>
      </div>
      <section className='lg:grid lg:col-span-2'>
        <Carousel
          images={project?.Images}
          title={project.title}
        />
      </section>
    </div>
  )
}

export default ProjectById
