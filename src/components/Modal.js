'use client'
import { useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
const Modal = ({ children }) => {
  const overlay = useRef()
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back() // * Regresa a la ruta anterior
  }, [router])

  const onClick = useCallback(
    // * regresa a la ruta anterior "cerrando" el modal
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay]
  )

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss() // * cierra el modal al presionar la tecla esc
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 bg-bg_modal dark:bg-bg_modal_dark'
      onClick={onClick}
    >
      <div
        className='relative h-[97%] rounded-3xl lg:h-[90%] bg-bg dark:bg-bg_dark m-3 lg:m-14'
      >
        <button
          className='absolute z-50 top-0 right-0 px-3 text-5xl text-x_close hover:scale-150'
          onClick={onDismiss}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
