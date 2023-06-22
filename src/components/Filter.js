'use client'

import fetchSkills from '@/utils/fetchSkills'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Filter = ({ params }) => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const getSkills = async () => {
      const skills = await fetchSkills()
      setSkills(skills)
    }

    getSkills()
  }, [])

  const language = () => {
    const skillsFilter = skills?.filter((skill) => skill.group === 'language')
    return skillsFilter
  }

  const technologies = () => {
    const skillsFilter = skills?.filter((skill) => skill.group !== 'language')
    return skillsFilter
  }

  return (
    <div className='flex flex-col items-center w-full border-b border-r border-blue-900 m-3 rounded-2xl shadow-md'>
      <section>
        <p className='flex w-full justify-center text-base lg:text-4xl my-5'> Lenguajes </p>
        <section className='flex flex-wrap mx-2 justify-center items-center'>
          {language().map((skill) => (
            <div
              key={skill.id}
              className='flex justify-center items-center m-2'
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={128}
                height={128}
                className='h-14 w-auto mx-auto'
              />
              <p> {skill.name} </p>
            </div>
          ))}
        </section>
      </section>
      <section>
        <p className='flex w-full justify-center text-base lg:text-4xl my-5'> Lenguajes </p>
        <section className='flex flex-wrap mx-2 justify-center items-center'>
          {technologies().map((skill) => (
            <div
              key={skill.id}
              className='flex justify-center items-center m-2'
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={128}
                height={128}
                className='h-14 w-auto mx-auto'
              />
              <p> {skill.name} </p>
            </div>
          ))}
        </section>
      </section>
    </div>
  )
}

export default Filter
