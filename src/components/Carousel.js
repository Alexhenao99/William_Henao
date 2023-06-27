'use client'
import Image from 'next/image'
import { useState } from 'react'

const Carousel = ({ images }, { title }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [showFullScreen, setShowFullScreen] = useState(false)

  const handlePrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))
  }
  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
  }
  const handlePreviewClick = (index) => {
    setCurrentImage(index)
  }
  const handleFullScreenOpen = () => {
    setShowFullScreen(true)
  }
  const handleFullScreenClose = () => {
    setShowFullScreen(false)
  }

  return (
    <section style={{ height: '200px' }}>
      <div
        id='default-carousel'
        className='flex justify-center items-center w-full'
      >
        {/* botón anterior */}
        <button
          type='button'
          className='z-10 w-8 h-8 bg-gray-800 text-white rounded-full'
          onClick={handlePrevious}
        >
          <span>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-bg_dark sm:w-6 sm:h-6 dark:text-text_secondary'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='4'
                d='M15 19l-7-7 7-7'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>

        {/* Imágenes */}
        <div className='overflow-hidden rounded-lg mb-2'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${index === currentImage ? 'block' : 'hidden'} cursor-pointer`}
              onClick={handleFullScreenOpen}
            >
              <Image
                src={image.link}
                width={1400}
                height={700}
                alt={`Imágenes de ${title}`}
              />
            </div>
          ))}
        </div>

        {/* botón siguiente */}
        <button
          type='button'
          className='z-10 w-8 h-8 bg-gray-800 text-white rounded-full'
          onClick={handleNext}
        >
          <span>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-bg_dark sm:w-6 sm:h-6 dark:text-text_secondary'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='4'
                d='M9 5l7 7-7 7'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>

      {/* Previews de las imágenes */}
      <div className='flex flex-wrap items-center py-5 justify-center h-96 overflow-y-auto '>
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handlePreviewClick(index)}
            // className='cursor-pointer'
          >
            <Image
              src={image.link}
              width={1400}
              height={700}
              alt={`Imágenes de ${title}`}
              className={`cover w-20 h-10 sm:w-52 sm:h-28 m-2 rounded ${index === currentImage ? 'grayscale-0 border dark:border-bg border-bg_dark_secondary drop-shadow-light_shadow dark:drop-shadow-dark_shadow' : 'grayscale'} cursor-pointer`}
            />
          </div>
        ))}
      </div>

      {/* Imagen en pantalla completa */}
      {showFullScreen && (
        <div className='fixed z-50 top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center'>
          <button
            type='button'
            className='absolute z-50 top-3 right-2 px-3 text-5xl text-x_close hover:scale-150'
            onClick={handleFullScreenClose}
          >
            X
          </button>
          <Image
            src={images[currentImage].link}
            layout='fill'
            objectFit='contain'
            alt={`Imágenes de ${title}`}
            onClick={handleNext}
          />
        </div>
      )}
    </section>
  )
}

export default Carousel
