'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { skills } from '@/data/data'
import Image from 'next/image'

const AllSkills = () => {
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
          src={skill.icon}
          alt={skill.name}
          className='w-16 md:w-auto md:h-34 h-auto mx-auto'
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

  return (
    <div className=''>
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
