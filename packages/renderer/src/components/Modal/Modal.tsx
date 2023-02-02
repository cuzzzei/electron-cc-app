interface ModalProps {
   title: string
   isOpen: boolean
   children: React.ReactNode
   onClose: () => void

   triggerButton: React.ReactElement
   confirmButton?: React.ReactElement
}

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

   return (
      <>
         {triggerButton}

         {isOpen && (
            <div
               className='modal center modal-backdrop'
               style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  ...style,
               }}
            >
               <div className='modal-dialog modal-dialog-centered animate__animated animate__slideInDown animate__faster'>
                  <div
                     className='modal-content'
                     tabIndex={1}
                     style={{
                        borderRadius: '8px',
                        padding: '15px',
                     }}
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
                  </div>
               </div>
            </div>
         )}
      </>
   )
}
