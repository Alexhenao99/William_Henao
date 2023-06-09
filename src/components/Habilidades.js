'use client'

import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LoadingSpin from './LoadingSpin'
import { getSkills } from '@/utils/fetch/Skills'

const Habilidades = ({ filtrado }) => {
  const [cursor, setCursor] = useState(false)
  const [skillsData, setSkills] = useState([])

  useEffect(() => {
    const getSkillsData = async () => {
      const skillsData = await getSkills()
      setSkills(skillsData)
    }

    getSkillsData()
  }, [])

  const iconFiltered = (filtrado) => {
    const skills = skillsData.filter((skill) => skill.group === filtrado)
    return skills
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: Math.min(iconFiltered(filtrado).length, 4),
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(iconFiltered(filtrado).length, 3),
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(iconFiltered(filtrado).length, 2),
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(iconFiltered(filtrado).length, 2),
          slidesToScroll: 1
        }
      }
    ]
  }

  if (skillsData.length <= 0) return <LoadingSpin size={130} />

  return (
    <div className='display mx-8 mb-3'>
      <Slider {...settings}>
        {iconFiltered(filtrado).map((skill) => (
          <div
            key={skill.id}
            className='h-36 p-2 relative'
            onMouseEnter={() => setCursor(true)}
            onMouseLeave={() => setCursor(false)}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={128}
              height={128}
              className='h-32 w-auto mx-auto'
            />
            <div className={`${cursor ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-full flex items-center justify-center`}>
              <span className='px-3 text-2xl text-center dark:bg-bg_dark dark:text-text_dark bg-text_secondary text-text rounded-3xl'>{skill.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Habilidades
