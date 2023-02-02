import { Call } from '/@/types/Call'
import { CallForm, CallFormData } from '../components/CallForm'
import { Modal } from '/@/components/Modal'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'

interface UpdateCallProps {
   call: Call
}

export const UpdateCall = ({ call }: UpdateCallProps) => {
   const [isOpen, setIsOpen] = useState(false)
   const { render } = useAppContext()

   function onSubmit(data: CallFormData) {
      const [startHour, startMinute] = data.startTime
         .split(':')
         .map((s) => Number(s))
      const [finishHour, finishMinute] = data.finishTime
         .split(':')
         .map((s) => Number(s))

      call.setClientName(new Name(data.clientFirstName, data.clientLastName))
      call.setDescription(data.description)
      call.setStart(new Time(startHour, startMinute))
      call.setFinish(new Time(finishHour, finishMinute))
      setIsOpen(false)
      render()
   }

   const defaultValues: CallFormData = {
      clientFirstName: call.getClientName().getFirst(),
      clientLastName: call.getClientName().getLast(),
      description: call.getDescription(),
      startTime: call.getStart().toString(),
      finishTime: call.getFinish().toString(),
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         title='Update call'
         triggerButton={
            <div>
               <button
                  className='btn btn-primary'
                  onClick={() => setIsOpen(true)}
               >
                  <i className='fa fa-pencil' />
               </button>
            </div>
         }
         confirmButton={
            <button
               className='btn btn-dark'
               type='submit'
               form='update-call'
            >
               Update
            </button>
         }
      >
         <CallForm
            id='update-call'
            defaultValues={defaultValues}
            onSubmit={onSubmit}
         />
      </Modal>
   )
}
