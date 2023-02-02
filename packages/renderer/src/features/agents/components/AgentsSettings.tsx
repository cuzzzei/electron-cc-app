import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { Modal } from '/@/components/Modal'
import { useState } from 'react'

export const AgentsSettings = () => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
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
         <p>hello world</p>
      </Modal>
   )
}
