import { useState } from 'react'
import { Button } from '/@/components/Button'
import { Modal } from '/@/components/Modal'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useToast } from '/@/hooks/useToast'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/features/agents'
import { CallList } from '/@/features/calls'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { v4 as uuid } from 'uuid'

export const CreateAgent = () => {
   const toast = useToast()
   const [isOpen, setIsOpen] = useState(false)
   const { agentList, render } = useAppContext()

   function onSubmit(data: AgentFormData) {
      const alreadyTaken = agentList.find(
         (agent) => agent.getExtension() === data.extension
      )

      if (alreadyTaken) {
         return toast({
            title: `Extension ${data.extension} already taken`,
            status: 'error',
         })
      }

      const newAgent = new Agent({
         id: uuid(),
         age: data.age,
         callHistory: new CallList(),
         extension: data.extension,
         name: new Name(data.firstName, data.lastName),
         overtime: data.overtime,
         specialty: data.specialty,
         startTime: Time.fromString(data.startTime),
         endTime: Time.fromString(data.endTime),
      })

      try {
         agentList.insertAtStart(newAgent)
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
            <Button
               onClick={() => setIsOpen(true)}
               fullWidth
            >
               Add new
            </Button>
         }
         confirmButton={
            <Button
               type='submit'
               form='create-agent'
            >
               Create
            </Button>
         }
      >
         <AgentForm
            id='create-agent'
            onSubmit={onSubmit}
         />
      </Modal>
   )
}
