import { useState } from 'react'
import { Button } from '/@/components/Button'
import { Modal } from '/@/components/Modal'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useToast } from '/@/hooks/useToast'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/agent'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

import { UserIcon } from '@heroicons/react/20/solid'

interface UpdateAgentProps {
   agent: Agent
}

export const UpdateAgent = ({ agent }: UpdateAgentProps) => {
   const toast = useToast()
   const { render, agentList } = useAppContext()
   const [isOpen, setIsOpen] = useState(false)

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

      // Update data
      agent.setAge(data.age)
      agent.setExtension(data.extension)
      agent.setEndTime(Time.fromString(data.endTime))
      agent.setName(new Name(data.firstName, data.lastName))
      agent.setOvertime(data.overtime)
      agent.setSpecialty(data.specialty)
      agent.setStartTime(Time.fromString(data.endTime))

      toast({
         title: 'Agent updated successfully',
         description: `Agent ${agent.getName()} updated`,
      })

      setIsOpen(false)
      render()
   }

   const defaultValues: AgentFormData = {
      age: agent.getAge(),
      extension: agent.getExtension(),
      endTime: agent.getEndTime().toString(),
      firstName: agent.getName().getFirst(),
      lastName: agent.getName().getLast(),
      overtime: agent.getOvertime(),
      specialty: agent.getSpecialty(),
      startTime: agent.getStartTime().toString(),
   }

   return (
      <>
         <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title='Agent profile'
            triggerButton={
               <Button
                  onClick={() => setIsOpen(true)}
                  colorScheme='gray'
                  aria-label='Edit agent profile'
               >
                  <div style={{ width: '15px' }}>
                     <UserIcon />
                  </div>
               </Button>
            }
            confirmButton={
               <Button
                  type='submit'
                  form='update-agent'
               >
                  Save
               </Button>
            }
         >
            <AgentForm
               id='update-agent'
               onSubmit={onSubmit}
               defaultValues={defaultValues}
            />
         </Modal>
      </>
   )
}
