'use client'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterEffect = () => {
  return (
    <span className='text-base lg:text-2xl font-bold'>
      Desarrollador
      <Typewriter
        words={[' Back-end', ' Front-end']}
        loop={false}
        cursor
        cursorStyle='<'
        cursorColor='#356C78'
        typeSpeed={300}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  )
}

export default TypewriterEffect
