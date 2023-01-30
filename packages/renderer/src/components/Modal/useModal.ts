import { useEffect, useRef, useState } from 'react'

export function useModal() {
   const modalRef = useRef<HTMLDivElement>(null)
   const [isOpen, setIsOpen] = useState(false)

   function openModal() {
      setIsOpen(true)
   }

   function closeModal() {
      setIsOpen(false)
   }

   useEffect(() => {
      if (isOpen) {
         modalRef.current?.focus()
      }
   }, [isOpen])

   useEffect(() => {
      const closeOnEscape = (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            closeModal()
         }
      }

      window.addEventListener('keydown', closeOnEscape)

      return () => {
         window.removeEventListener('keydown', closeOnEscape)
      }
   }, [])

   return {
      modalRef,
      isOpen,
      openModal,
      closeModal,
   }
}
