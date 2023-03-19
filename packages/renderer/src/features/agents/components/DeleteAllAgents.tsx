import { Button } from '/@/components/Button'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'

export function DeleteAllAgents() {
   const toast = useToast()
   const { agentList, render } = useAppContext()
   const [showDelete, setShowDelete] = useState(false)

   function handleDelete() {
      agentList.deleteAll()
      render()

      toast({
         title: 'All agents have been deleted',
         status: 'success',
      })

      setShowDelete(false)
   }

   return (
      <div
         style={{ height: '40px' }}
         className='d-flex align-items-start'
      >
         {showDelete ? (
            <div>
               <p className='m-0'>
                  Are you sure you want to <b>delete all agents?</b>
               </p>

               <div className='d-flex justify-content-center gap-2 mt-3'>
                  <Button
                     colorScheme='gray'
                     onClick={() => setShowDelete(false)}
                  >
                     Cancel
                  </Button>

                  <Button
                     colorScheme='red'
                     onClick={() => handleDelete()}
                  >
                     Yes, I am sure
                  </Button>
               </div>
            </div>
         ) : (
            <div className='w-50'>
               <Button
                  colorScheme='red'
                  fullWidth
                  onClick={() => setShowDelete(true)}
               >
                  Delete agents 🗑
               </Button>
            </div>
         )}
      </div>
   )
}
