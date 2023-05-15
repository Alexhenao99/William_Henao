import { cvUrl } from '@/utils/personalData'

const Cv = () => {
  return (
    <div className='relative pt-14 h-full rounded-bl-3xl rounded-br-3xl'>
      <a
        href={cvUrl()}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute top-3 right-20 text-text_dark dark:text-text bg-text dark:bg-bg_dark_secondary px-4 py-1 rounded-2xl hover:scale-105 hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow'
      >
        Ver desde Google Drive.
      </a>

      <embed
        src='/CV_2023.pdf'
        className='rounded-bl-3xl rounded-br-3xl'
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default Cv
