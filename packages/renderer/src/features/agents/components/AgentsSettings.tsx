import { Button } from '/@/components/Button'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { DeleteAllAgents } from './DeleteAllAgents'
import { Modal } from '/@/components/Modal'
import { Select } from '/@/components/Select'
import { useState } from 'react'

export const AgentsSettings = () => {
   const [isOpen, setIsOpen] = useState(false)

   function handleClose() {
      setIsOpen(false)
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => handleClose()}
         closeButtonText='Close'
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
         <div className='w-full d-flex flex-column gap-4 pb-5'>
            <div className='d-flex w-50 align-items-end'>
               <Select
                  label='Order agents by'
                  fullWidth
               >
                  <option value='name'>Name</option>
                  <option value='name'>Specialty</option>
               </Select>
            </div>

            <div className='w-50'>
               <Button
                  fullWidth
                  colorScheme='yellow'
               >
                  Load agents 🗳
               </Button>
            </div>

            <div className='w-50'>
               <Button
                  fullWidth
                  colorScheme='cyan'
               >
                  Save agents ✅
               </Button>
            </div>

            <div className='w-full'>
               <DeleteAllAgents />
            </div>
         </div>
      </Modal>
   )
}
