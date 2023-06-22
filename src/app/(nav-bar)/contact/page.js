import Link from 'next/link'
import { mail } from '@/utils/personalData'

import whatsapp from '../../../images/iconos/whatsapp.png'
import CopyButton from '@/components/CopyButton'
import icon from '@/utils/icons'

const Contact = () => {
  return (
    <div className='absolute top-14 left-0 h-screen flex flex-col items-center justify-center'>
      <p className='text-xl px-3 py-6 md:px-24 lg:px-48 lg:text-3xl text-center'>
        Estoy buscando nuevas oportunidades en el mundo del desarrollo web full stack y me encantaría saber más sobre tus proyectos y necesidades en esta área. Si tienes alguna pregunta, propuesta de trabajo o simplemente quieres saludarme, estaré encantado de responderte lo antes posible.
        <br />
        <br />
        ¡No dudes en ponerte en contacto conmigo!
      </p>
      <section className='w-full flex justify-center'>
        <a
          href={`mailto:${mail()}`}
          className='flex items-center justify-center text-lg lg:my-7 hover:scale-105 hover:drop-shadow-light_shadow dark:hover:drop-shadow-dark_shadow lg:text-4xl bg-bg_dark dark:bg-bg_dark_secondary rounded-[20px] text-text_dark dark:text-text w-36 h-12 lg:w-64 lg:h-20 transition-all duration-300'
        >
          Escríbeme!
        </a>
      </section>
      <p className='text-xl px-3 py-3 lg:text-3xl text-center'>ó</p>
      <section className='w-full flex justify-center'>
        <Link
          href='https://wa.me/573214636839?text=%C2%A1Hola!%20%C2%A1Gracias%20por%20contactarme%20a%20trav%C3%A9s%20de%20WhatsApp!.%20Por%20favor,%20d%C3%A9jame%20un%20mensaje%20con%20cualquier%20pregunta%20o%20informaci%C3%B3n%20que%20desees%20compartir.%20%C2%A1Responder%C3%A9%20lo%20antes%20posible!'
          target='_blank'
          rel='noopener noreferrer'
        >
          <section className='mx-2'>
            {icon(whatsapp, 'Whatsapp')}
          </section>
        </Link>
        <CopyButton />
      </section>
    </div>
  )
}

export default Contact
