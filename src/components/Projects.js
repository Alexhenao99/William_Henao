'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import Cards from './Cards'
import LoadingSpin from './LoadingSpin'
import { getProjects } from '@/utils/fetch/Projects'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjectsData = async () => {
      const projects = await getProjects()
      setProjects(projects)
    }

    getProjectsData()
  }, [])

  if (projects.length <= 0) {
    return (
      <div className='h-screen'>
        <LoadingSpin />
      </div>
    )
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {projects?.map((project) => (
        <Link
          href={`/projects/${project.id}`}
          key={project.id}
          className='focus:cursor-wait'
        >
          <section>
            <Cards props={project} />
          </section>
        </Link>
      ))}
    </div>
  )
}

export default Projects
