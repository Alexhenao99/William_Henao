import Image from 'next/image'

const Proyectos = () => {
  // const envPrueba = process.env.PGHOST
  console.log(process.env.PGPORT)
  return (
    <div className='md:grid md:grid-cols-5'>
      <section className='bg-bg_dark m-3 md:col-span-1 '>
        Filtrado
        <Image
          src='https://lh3.googleusercontent.com/drive-viewer/AFGJ81qk0AHIfa9OhHT9GDG6M-zGZiedDr4WU8_chQ0sF2Qc6cR6nvJL-yxWtTHYzm7oInhV91CTo-jxibfux86y3DvF2qY8=w1920-h980'
          alt='imagen'
          width='1900'
          height='1000'
        />
        <Image
          src='https://lh3.googleusercontent.com/drive-viewer/AFGJ81oCAOsDSzhrcr8jbOX78_dQofEvtehx4sTO-4m-hbR1TDMiR4NtO5q0-AKJ3oT4gNG683p6PRFrrROOCBAk24A9ZEgonA=w1236-h980'
          alt='imagen'
          width='500'
          height='500'
        />
      </section>
      <section className='bg-bg_dark_secondary m-3 md:col-span-4'> Cards </section>
    </div>
  )
}

export default Proyectos
