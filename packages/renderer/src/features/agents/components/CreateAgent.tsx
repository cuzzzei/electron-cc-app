import { useState } from 'react'
import { Modal } from '/@/components/Modal'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useToast } from '/@/hooks/useToast'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/agent'
import { CallList } from '/@/types/call'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export const CreateAgent = () => {
   const toast = useToast()
   const [isOpen, setIsOpen] = useState(false)
   const { agentsList, render } = useAppContext()

   function onSubmit(data: AgentFormData) {
      const newAgent = new Agent({
         id: crypto.randomUUID(),
         age: data.age,
         callsHistory: new CallList(),
         extension: data.extension,
         name: new Name(data.firstName, data.lastName),
         overtime: data.overtime,
         specialty: data.specialty,
         startTime: Time.fromString(data.startTime),
         endTime: Time.fromString(data.endTime),
      })

      try {
         agentsList.insert(newAgent)
         setIsOpen(false)

         toast({
            title: 'Agent created successfully',
            description: `Agent ${newAgent.getName()} added`,
         })

         render()
      } catch (err) {
         if (err instanceof Error) {
            toast({
               title: err.name,
               description: err.message,
               status: 'error',
            })
         }
      }
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         title='New agent'
         triggerButton={
            <button
               className='btn btn-dark w-100'
               onClick={() => setIsOpen(true)}
            >
               Add new
            </button>
         }
         confirmButton={
            <button
               className='btn btn-dark'
               type='submit'
               form='create-agent'
            >
               Create
            </button>
         }
      >
         <AgentForm
            id='create-agent'
            onSubmit={onSubmit}
         />
      </Modal>
   )
}
