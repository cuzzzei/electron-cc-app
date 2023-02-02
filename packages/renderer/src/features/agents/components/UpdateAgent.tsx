import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Modal } from '/@/components/Modal'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useToast } from '/@/hooks/useToast'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'
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
      const [startHour, startMinute] = data.startTime
         .split(':')
         .map((s) => Number(s))
      const [finishHour, finishMinute] = data.finishTime
         .split(':')
         .map((s) => Number(s))

      // Update data
      agent.setAge(data.age)
      agent.setExtension(data.extension)
      agent.setFinishTime(new Time(finishHour, finishMinute))
      agent.setName(new Name(data.firstName, data.lastName))
      agent.setOvertime(data.overtime)
      agent.setSpecialty(data.specialty)
      agent.setStartTime(new Time(startHour, startMinute))

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
      finishTime: agent.getFinishTime().toString(),
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
            title='New agent'
            triggerButton={
               <button
                  className='btn'
                  onClick={() => setIsOpen(true)}
               >
                  <div style={{ width: '30px' }}>
                     <PencilSquareIcon />
                  </div>
               </button>
            }
            confirmButton={
               <button
                  className='btn btn-dark'
                  type='submit'
                  form='update-agent'
               >
                  Update
               </button>
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
