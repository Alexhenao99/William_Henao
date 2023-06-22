'use client'

import { Pinwheel } from '@uiball/loaders'
const LoadingSpin = ({ size = 200 }) => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Pinwheel
        size={size}
        lineWeight={3.5}
        speed={1}
        color='#356C78'
      />
    </div>
  )
}

export default LoadingSpin
