import Image from 'next/image'

const icon = (icon, name) => {
  return (
    <Image
      src={icon}
      alt={`Icono de ${name}`}
      width={100}
      className='hover:scale-110 hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow transition-all duration-300'
    />
  )
}

export default icon
