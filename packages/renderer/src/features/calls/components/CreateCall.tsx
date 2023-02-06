import { CallForm, CallFormData } from '../components/CallForm'
import { CallList } from '/@/types/CallList'
import { Modal } from '/@/components/Modal'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { Call } from '/@/types/Call'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { useToast } from '/@/hooks/useToast'

interface CreateCallProps {
   callList: CallList
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
         end: Time.fromString(data.endTime),
      })

      try {
         callList.insertOrdered(newCall)
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
               <div style={{ width: '16px' }}>
                  <PhoneArrowDownLeftIcon />
               </div>
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
         />
      </Modal>
   )
}
