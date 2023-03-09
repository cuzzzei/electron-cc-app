import { PencilSquareIcon } from '@heroicons/react/24/outline'
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

interface UpdateAgentProps {
   agent: Agent
}

export const UpdateAgent = ({ agent }: UpdateAgentProps) => {
   const toast = useToast()
   const { render } = useAppContext()
   const [isOpen, setIsOpen] = useState(false)

   function onSubmit(data: AgentFormData) {
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
            title='Update agent'
            triggerButton={
               <Button onClick={() => setIsOpen(true)}>
                  <div style={{ width: '30px' }}>
                     <PencilSquareIcon />
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
