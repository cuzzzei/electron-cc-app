import { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface ModalProps {
   title: string
   isOpen: boolean
   children: React.ReactNode
   onClose: () => void

   triggerButton: React.ReactElement
   confirmButton?: React.ReactElement
}

const BackDrop = styled.div`
   background-color: rgba(0, 0, 0, 0.4);
`

const Content = styled.div`
   border-radius: 8px;
   padding: 15px;
`

export const Modal = ({
   isOpen,
   onClose,
   title,
   children,
   triggerButton,
   confirmButton,
}: ModalProps) => {
   const mountedStyle = { opacity: 1, display: 'block' }
   const unmountedStyle = { opacity: 0, transition: 'none' }
   const style = isOpen ? mountedStyle : unmountedStyle
   const modalRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (isOpen && modalRef.current) {
         modalRef.current.focus()
      }
   }, [isOpen])

   return (
      <>
         {triggerButton}

         {isOpen && (
            <BackDrop
               className='modal center modal-backdrop'
               style={{
                  ...style,
               }}
            >
               <div className='modal-dialog modal-dialog-centered animate__animated animate__slideInDown animate__faster'>
                  <Content
                     className='modal-content'
                     tabIndex={1}
                     ref={modalRef}
                  >
                     <div className='modal-header border-0'>
                        <h5 className='modal-title'>{title}</h5>
                        <button
                           type='button'
                           className='btn-close'
                           data-bs-dismiss='modal'
                           aria-label='Close'
                           onClick={() => onClose()}
                        />
                     </div>
                     <div className='modal-body'>{children}</div>
                     <div className='modal-footer border-0'>
                        <button
                           type='button'
                           className='btn btn-light'
                           onClick={() => onClose()}
                           style={{ marginRight: '15px' }}
                        >
                           Cancel
                        </button>

                        {confirmButton}
                     </div>
                  </Content>
               </div>
            </BackDrop>
         )}
      </>
   )
}
