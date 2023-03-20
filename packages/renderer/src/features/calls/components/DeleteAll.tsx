import { Button } from '/@/components/Button'
import { CallList } from '/@/features/calls'
import { Modal } from '/@/components/Modal'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'

interface DeleteAllProps {
   callList: CallList
}

export const DeleteAll = ({ callList }: DeleteAllProps) => {
   const toast = useToast()
   const [isOpen, setIsOpen] = useState(false)
   const { render } = useAppContext()

   function deleteAll() {
      callList.deleteAll()
      toast({
         title: 'All calls have been deleted',
         status: 'success',
      })
      render()
      setIsOpen(false)
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         title='Delete all'
         triggerButton={
            <Button
               colorScheme='red'
               onClick={() => setIsOpen(true)}
            >
               <i className='fa fa-trash' />
            </Button>
         }
         confirmButton={
            <Button
               type='submit'
               onClick={() => deleteAll()}
            >
               Delete all
            </Button>
         }
      >
         <p>Are you sure you want to delete all calls ?</p>
      </Modal>
   )
}
