import Image from 'next/image'
const Home = () => {
  return (
    <div>
      <div className='text-center w-full p-10 text-blue-950  text-9xl font-bold'>
        Este sera home
      </div>
      <Image
        src='https://static.nationalgeographic.es/files/styles/image_3200/public/01-hubble-heic1501a.jpg?w=1190&h=1242'
        width={500}
        height={500}
        alt='imagen'
      />
    </div>
  )
}

export default Home
