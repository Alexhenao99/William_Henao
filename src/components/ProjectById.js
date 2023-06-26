'use client'

import { getProjectsById } from '@/utils/fetch/Projects'
import { useEffect, useState } from 'react'
import LoadingSpin from './LoadingSpin'
import Carousel from './Carousel'

const ProjectById = ({ id }) => {
  const [project, setProject] = useState([])

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

  console.log(project.Images)

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-4 pt-14 px-5 h-full w-full rounded-bl-3xl rounded-br-3xl'>
      <section className='lg:grid lg:col-span-2'>
        <h1>{project.title}</h1>
        <section> </section>
        <p> </p>
        <section> </section>
      </section>
      <section className='lg:grid lg:col-span-2'>
        <Carousel images={project?.Images} title={project.title} />
      </section>
    </div>
  )
}

export default ProjectById
