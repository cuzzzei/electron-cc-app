import { Button } from '/@/components/Button'
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
   background-color: rgba(0, 0, 0, 0.25);
`

const Content = styled.div`
   border-radius: 8px;
   padding: 15px;
   border: none;
   box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);

   animation-name: show;
   animation-duration: 0.35s;

   @keyframes show {
      from {
         opacity: 0;
         transform: translate3d(0, -40px, 0);
      }
      to {
         opacity: 1;
         transform: translate3d(0, 0, 0);
      }
   }
`

export const Modal = ({
   isOpen,
   onClose,
   title,
   children,
   triggerButton,
   confirmButton,
}: ModalProps) => {
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
               className='modal center border-0 d-block'
               onClick={(e) => {
                  if (e.target === e.currentTarget) {
                     onClose()
                  }
               }}
            >
               <div className='modal-dialog modal-dialog-centered border-0'>
                  <Content
                     className='modal-content'
                     tabIndex={1}
                     ref={modalRef}
                  >
                     <div className='modal-header border-0'>
                        <h4 className='modal-title'>{title}</h4>
                        <button
                           className='btn btn-close'
                           type='button'
                           data-bs-dismiss='modal'
                           aria-label='Close'
                           onClick={() => onClose()}
                        />
                     </div>
                     <div className='modal-body'>{children}</div>
                     <div className='modal-footer border-0'>
                        <Button
                           colorScheme='gray'
                           onClick={() => onClose()}
                           style={{ marginRight: '15px' }}
                        >
                           Cancel
                        </Button>

                        {confirmButton}
                     </div>
                  </Content>
               </div>
            </BackDrop>
         )}
      </>
   )
}
