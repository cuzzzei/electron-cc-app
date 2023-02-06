import { Call } from '/@/types/Call'
import { CallForm, CallFormData } from '../components/CallForm'
import { Modal } from '/@/components/Modal'
import { Name } from '/@/types/Name'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'
import { Time } from '/@/types/Time'

interface UpdateCallProps {
   call: Call
}

export const UpdateCall = ({ call }: UpdateCallProps) => {
   const toast = useToast()
   const [isOpen, setIsOpen] = useState(false)
   const { render } = useAppContext()

   function onSubmit(data: CallFormData) {
      // TODO: Fix bug >> Update call hour doesnt reorder the list

      call.setClientName(new Name(data.clientFirstName, data.clientLastName))
      call.setDescription(data.description)
      call.setStartTime(Time.fromString(data.startTime))
      call.setEndTime(Time.fromString(data.startTime))

      toast({
         title: 'Call updated successfully',
      })

      setIsOpen(false)
      render()
   }

   const defaultValues: CallFormData = {
      clientFirstName: call.getClientName().getFirst(),
      clientLastName: call.getClientName().getLast(),
      description: call.getDescription(),
      startTime: call.getStartTime().toString(),
      endTime: call.getEndTime().toString(),
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
