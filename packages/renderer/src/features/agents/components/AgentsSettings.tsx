import { Button } from '/@/components/Button'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { Modal } from '/@/components/Modal'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'

export const AgentsSettings = () => {
   const toast = useToast()
   const { agentList, render } = useAppContext()
   const [isOpen, setIsOpen] = useState(false)
   const [showDelete, setShowDelete] = useState(false)

   function handleClose() {
      setIsOpen(false)
      setShowDelete(false)
   }

   function handleDelete() {
      agentList.deleteAll()
      render()

      toast({
         title: 'All agents have been deleted',
         status: 'success',
      })

      setShowDelete(false)
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => handleClose()}
         title='Agents settings'
         triggerButton={
            <div
               style={{ width: '25px' }}
               role='button'
               onClick={() => setIsOpen(true)}
            >
               <Cog8ToothIcon />
            </div>
         }
      >
         <div
            style={{ height: '40px' }}
            className='d-flex align-items-start mt-5'
         >
            {showDelete ? (
               <div>
                  <p className='m-0'>
                     Are you sure you want to <b>delete all agents?</b>
                  </p>

                  <div className='d-flex gap-2 mt-3'>
                     <Button
                        colorScheme='gray'
                        onClick={() => setShowDelete(false)}
                     >
                        Cancel
                     </Button>

                     <Button
                        colorScheme='red'
                        onClick={() => handleDelete()}
                     >
                        Yes, I am sure
                     </Button>
                  </div>
               </div>
            ) : (
               <Button
                  colorScheme='red'
                  onClick={() => setShowDelete(true)}
               >
                  Delete all agents
               </Button>
            )}
         </div>
      </Modal>
   )
}
