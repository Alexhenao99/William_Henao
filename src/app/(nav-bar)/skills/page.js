import Habilidades from '@/components/Habilidades'

const Skills = () => {
  return (
    <div className='h-full lg:grid lg:grid-cols-2  lg:grid-rows-1'>
      <section className='text-text_dark dark:text-text bg-bg_dark dark:bg-bg_dark_secondary m-3 lg:m-1 rounded-3xl'>
        <section>
          <section className='flex justify-center py-3'>
            <p className='text-2xl md:text-4xl'>Lenguajes</p>
          </section>
          <section className='pb-4'>
            <Habilidades filtrado='language' />
          </section>
        </section>
        <section>
          <section className='flex justify-center py-3'>
            <p className='text-2xl md:text-4xl'>Front-end</p>
          </section>
          <section className='pb-4'>
            <Habilidades filtrado='front' />
          </section>
        </section>
        <section>
          <section className='flex justify-center py-3'>
            <p className='text-2xl md:text-4xl'>Back-end</p>
          </section>
          <section className='pb-4'>
            <Habilidades filtrado='back' />
          </section>
        </section>
      </section>
      <section className='text-text_dark dark:text-text bg-bg_dark dark:bg-bg_dark_secondary m-3 lg:m-1 rounded-3xl'>
        <section>
          <section className='flex justify-center py-3'>
            <p className='text-2xl md:text-4xl'>Otros</p>
          </section>
          <section className='pb-4'>
            <Habilidades filtrado='otros' />
          </section>
        </section>
        <section>
          <section className='flex justify-center py-3'>
            <p className='text-2xl md:text-4xl'>En proceso de aprendizaje</p>
          </section>
          <section className='pb-4'>
            <Habilidades filtrado='learning' />
          </section>
        </section>
        <section>
          <section className='flex justify-center py-3'>
            <p className='text-2xl md:text-4xl'>Habilidades blandas</p>
          </section>
          <section className='pb-4'>
            <Habilidades filtrado='soft_skills' />
          </section>
        </section>
      </section>
    </div>
  )
}

export default Skills
