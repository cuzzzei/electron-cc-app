import { Button } from '/@/components/Button'
import { CallForm, CallFormData } from '../components/CallForm'
import { CallList, Call } from '/@/features/calls'
import { Modal } from '/@/components/Modal'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'
import { v4 as uuid } from 'uuid'

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
         id: uuid(),
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
         toast({
            title: 'Error creating call',
            status: 'error',
         })
      }
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         title='New call'
         triggerButton={
            <Button onClick={() => setIsOpen(true)}>
               <i className='fa fa-phone' />
            </Button>
         }
         confirmButton={
            <Button
               type='submit'
               form='create-call'
            >
               Create
            </Button>
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
