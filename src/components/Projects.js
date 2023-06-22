'use client'

import fetchProjects from '@/utils/fetchProjects'
import { useEffect, useState } from 'react'
import Cards from './Cards'
import LoadingSpin from './LoadingSpin'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects()
      setProjects(projects)
    }

    getProjects()
  }, [])

  if (projects.length <= 0) return <div className='h-screen'><LoadingSpin /></div>

  return (
    <div className='flex flex-wrap justify-center'>
      {
        projects?.map((project) => (
          <section key={project.id}>
            <Cards props={project} />
          </section>
        ))
      }
    </div>
  )
}

export default Projects
