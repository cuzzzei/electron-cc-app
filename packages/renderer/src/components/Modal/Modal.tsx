import { Button } from '/@/components/Button'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface ModalProps {
   title: string
   isOpen: boolean
   children: React.ReactNode
   closeButtonText?: string
   onClose: () => void

   triggerButton?: React.ReactElement
   confirmButton?: React.ReactElement
}

const Container = styled.div`
   position: absolute;
   z-index: 9999;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`

const BackDrop = styled.div<{ show: boolean }>`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: ${(props) =>
      props.show ? 'rgba(0, 0, 0, 0.25)' : 'transparent'};
`

const Content = styled.div<{ show: boolean }>`
   border-radius: 8px;
   padding: 15px;
   border: none;
   box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);

   animation-name: ${(props) => (props.show ? 'show' : 'hide')};
   animation-duration: ${(props) => (props.show ? '0.15s' : '0.1s')};

   @keyframes show {
      from {
         scale: 0;
         transform: translate3d(0, -40px, 0);
      }
      to {
         scale: 1;
         transform: translate3d(0, 0, 0);
      }
   }

   @keyframes hide {
      from {
         opacity: 1;
         transform: translate3d(0, 0, 0);
      }

      to {
         opacity: 0;
         transform: translate3d(0, -40px, 0);
      }
   }
`

export const Modal = ({
   isOpen,
   onClose,
   title,
   children,
   triggerButton,
   closeButtonText = 'Cancel',
   confirmButton,
}: ModalProps) => {
   const [show, setShow] = useState(true)
   const modalRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (isOpen && modalRef.current) {
         modalRef.current.focus()
      }
   }, [isOpen])

   function handleClose() {
      setShow(false)

      setTimeout(() => {
         onClose()
         setShow(true)
      }, 99)
   }

   return (
      <>
         {triggerButton}
         {isOpen && (
            <Container>
               <BackDrop
                  show={show}
                  className='center border-0'
                  onClick={(e) => {
                     handleClose()
                     e.stopPropagation()
                  }}
               />
               <div className='modal-dialog modal-dialog-centered border-0'>
                  <Content
                     className='modal-content'
                     show={show}
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
                           {closeButtonText}
                        </Button>

                        {confirmButton}
                     </div>
                  </Content>
               </div>
            </Container>
         )}
      </>
   )
}
