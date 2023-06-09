'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'

import LoadingSpin from './LoadingSpin'
import { getSkills } from '@/utils/fetch/Skills'

const AllSkills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const getSkillsData = async () => {
      const skillsData = await getSkills()
      setSkills(skillsData)
    }

    getSkillsData()
  }, [])

  // Genera un orden aleatorio para las imágenes
  const randomizer = (skills) => {
    return skills.sort(() => Math.random() - 0.5)
  }

  const skillFnc = (skill) => {
    return (
      <div
        key={skill.id}
        className='my-4 lg:my-0 p-2 relative'
      >
        <Image
          src={skill.image}
          alt={skill.name}
          width={50}
          height={50}
          className='w-16 md:h-34 h-auto mx-auto'
        />
      </div>
    )
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  }
  const settings2 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }

  if (skills.length <= 0) return <LoadingSpin />

  return (
    <div>
      <section className='hidden lg:block'>
        <Slider {...settings}>{randomizer(skills).map((skill) => skillFnc(skill))}</Slider>
      </section>
      <section>
        <Slider {...settings2}>{randomizer(skills).map((skill) => skillFnc(skill))}</Slider>
      </section>
      <section className='hidden lg:block'>
        <Slider {...settings}>{randomizer(skills).map((skill) => skillFnc(skill))}</Slider>
      </section>
    </div>
  )
}

export default AllSkills
