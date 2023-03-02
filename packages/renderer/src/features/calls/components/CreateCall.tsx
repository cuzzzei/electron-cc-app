import { CallForm, CallFormData } from '../components/CallForm'
import { CallList, Call } from '/@/types/call'
import { Modal } from '/@/components/Modal'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'

interface CreateCallProps {
   callList: CallList
}

const defaultValues = {
   startTime: new Time().toString(),
   duration: new Time(0, 1).toString(),
}

export const CreateCall = ({ callList }: CreateCallProps) => {
   const toast = useToast()
   const [isOpen, setIsOpen] = useState(false)
   const { render } = useAppContext()

   function onSubmit(data: CallFormData) {
      const newCall = new Call({
         id: crypto.randomUUID(),
         clientName: new Name(data.clientFirstName, data.clientLastName),
         description: data.description,
         start: Time.fromString(data.startTime),
         duration: Time.fromString(data.duration),
      })

      try {
         callList.insertOrdered(newCall, Call.compareByStartTime)
         setIsOpen(false)

         toast({
            title: 'Call created successfully',
         })

         render()
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         title='New call'
         triggerButton={
            <button
               className='btn btn-success'
               onClick={() => setIsOpen(true)}
            >
               <i className='fa fa-phone' />
            </button>
         }
         confirmButton={
            <button
               className='btn btn-dark'
               type='submit'
               form='create-call'
            >
               Create
            </button>
         }
      >
         <CallForm
            id='create-call'
            onSubmit={onSubmit}
            defaultValues={defaultValues}
         />
      </Modal>
   )
}
