import { CallForm, CallFormData } from '../components/CallForm'
import { CallList, Call, CallNode } from '/@/types/call'
import { Modal } from '/@/components/Modal'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'

interface UpdateCallProps {
   call: Call
   callList: CallList
}

export const UpdateCall = ({ call, callList }: UpdateCallProps) => {
   const toast = useToast()
   const [isOpen, setIsOpen] = useState(false)
   const { render } = useAppContext()

   function onSubmit(data: CallFormData) {
      const node = callList.findData(call) as CallNode
      callList.remove(node)

      call.setClientName(new Name(data.clientFirstName, data.clientLastName))
      call.setDescription(data.description)
      call.setStartTime(Time.fromString(data.startTime))
      call.setDuration(Time.fromString(data.duration))

      callList.insertOrdered(call, Call.compareByStartTime)

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
      duration: call.getDuration().toString(),
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
