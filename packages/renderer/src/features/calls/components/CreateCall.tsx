import { CallForm, CallFormData } from '../components/CallForm'
import { CallList } from '/@/types/CallList'
import { Modal } from '/@/components/Modal'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { Call } from '/@/types/Call'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

interface CreateCallProps {
   callList: CallList
}

export const CreateCall = ({ callList }: CreateCallProps) => {
   const [isOpen, setIsOpen] = useState(false)
   const { render } = useAppContext()

   function onSubmit(data: CallFormData) {
      const [startHour, startMinute] = data.startTime
         .split(':')
         .map((s) => Number(s))
      const [finishHour, finishMinute] = data.finishTime
         .split(':')
         .map((s) => Number(s))

      const newCall = new Call({
         id: crypto.randomUUID(),
         clientName: new Name(data.clientFirstName, data.clientLastName),
         description: data.description,
         start: new Time(startHour, startMinute),
         finish: new Time(finishHour, finishMinute),
      })

      callList.insertCall(newCall)
      setIsOpen(false)
      render()
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
