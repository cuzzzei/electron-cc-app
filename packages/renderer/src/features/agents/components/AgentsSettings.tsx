import { Agent } from '../types'
import { Button } from '/@/components/Button'
import { CheckBadgeIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import { DeleteAllAgents } from './DeleteAllAgents'
import { Modal } from '/@/components/Modal'
import { Select } from '/@/components/Select'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'

export const AgentsSettings = () => {
   const { agentList, render } = useAppContext()
   const [isOpen, setIsOpen] = useState(false)
   const [sortBy, setSortBy] = useState('name')

   function handleClose() {
      setIsOpen(false)
   }

   function sort() {
      console.time('Sorting...')
      if (sortBy === 'name') {
         agentList.sort(Agent.compareByName)
         console.log(
            'SORTED BY NAME: ',
            agentList.isSorted(Agent.compareByName)
         )
      } else {
         agentList.sort(Agent.compareBySpecialty)
         console.log(
            'SORTED BY SPECIALTY: ',
            agentList.isSorted(Agent.compareBySpecialty)
         )
      }
      console.timeEnd('Sorting...')

      render()
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
            <div className='d-flex w-50 align-items-end gap-2'>
               <Select
                  label='Sort agents by'
                  fullWidth
                  registration={{
                     value: sortBy,
                     onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSortBy(e.target.value),
                  }}
               >
                  <option value='name'>Name</option>
                  <option value='specialty'>Specialty</option>
               </Select>

               <Button onClick={() => sort()}>
                  <div style={{ width: '25px' }}>
                     <CheckBadgeIcon />
                  </div>
               </Button>
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
                  onClick={() => {
                     console.log(JSON.stringify(agentList))
                  }}
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
