import { useState } from 'react'
import { Modal } from '/@/components/Modal'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'
import { CallList } from '/@/types/CallList'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export const CreateAgent = () => {
   const [isOpen, setIsOpen] = useState(false)
   const { agentsList, render } = useAppContext()

   function onSubmit(data: AgentFormData) {
      const [startHour, startMinute] = data.startTime
         .split(':')
         .map((s) => Number(s))
      const [finishHour, finishMinute] = data.finishTime
         .split(':')
         .map((s) => Number(s))

      const newAgent = new Agent({
         id: crypto.randomUUID(),
         age: data.age,
         callsHistory: new CallList(),
         extension: data.extension,
         name: new Name(data.firstName, data.lastName),
         overtime: data.overtime,
         specialty: data.specialty,
         startTime: new Time(startHour, startMinute),
         finishTime: new Time(finishHour, finishMinute),
      })

      agentsList.insertAgent(newAgent)
      setIsOpen(false)
      render()
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
            actions={null}
         />
      </Modal>
   )
}
