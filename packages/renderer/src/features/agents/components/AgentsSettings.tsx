import { Agent } from '../types'
import { Button } from '/@/components/Button'
import { CheckBadgeIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import { DeleteAllAgents } from './DeleteAllAgents'
import { Modal } from '/@/components/Modal'
import { Select } from '/@/components/Select'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'
import { IpcRenderer } from 'electron'

declare global {
   interface Window {
      ipcRenderer: IpcRenderer
   }
}

export const AgentsSettings = () => {
   const toast = useToast()
   const { agentList, render } = useAppContext()
   const [isOpen, setIsOpen] = useState(false)
   const [sortBy, setSortBy] = useState('name')

   function handleClose() {
      setIsOpen(false)
   }

   function sort() {
      let isSorted = false

      if (sortBy === 'name') {
         agentList.sort(Agent.compareByName)
         isSorted = agentList.isSorted(Agent.compareByName)
      } else {
         agentList.sort(Agent.compareBySpecialty)
         isSorted = agentList.isSorted(Agent.compareBySpecialty)
      }

      if (isSorted) {
         toast({
            title: `List ordered by ${sortBy}`,
            status: 'success',
         })
      } else {
         toast({
            title: `Error trying to order by ${sortBy}`,
            status: 'error',
         })
      }

      render()
   }

   async function save() {
      try {
         const result = await agentList.writeToDisk('agents.json')

         toast({
            title: result.result,
            status: result.status,
         })
      } catch {
         toast({
            title: 'Unexpected error trying to write agents in disk',
            status: 'error',
         })
      }
   }

   async function load() {
      try {
         const result = await agentList.readFromDisk('agents.json')
         render()

         toast({
            title: result.result,
            status: result.status,
         })
      } catch {
         toast({
            title: 'Unexpected error trying to load agents',
            status: 'error',
         })
      }
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
                  onClick={() => load()}
               >
                  Load agents 🗳
               </Button>
            </div>

            <div className='w-50'>
               <Button
                  fullWidth
                  colorScheme='cyan'
                  onClick={() => save()}
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
