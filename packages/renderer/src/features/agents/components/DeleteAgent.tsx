import { Agent } from '/@/features/agents'
import { Button } from '/@/components/Button'
import { Modal } from '/@/components/Modal'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'
import { useToast } from '/@/hooks/useToast'
import { useParams, useNavigate } from 'react-router-dom'

interface DeleteAgentProps {
   agent: Agent
}

export function DeleteAgent({ agent }: DeleteAgentProps) {
   const { agentList, render } = useAppContext()
   const { id } = useParams()
   const [isOpen, setIsOpen] = useState(false)
   const navigate = useNavigate()
   const toast = useToast()
   const agentInScreen = id === agent.getId()

   function handleDelete() {
      const nodeToDelete = agentList.find(agent)
      if (!nodeToDelete) return

      try {
         agentList.delete(nodeToDelete)
         toast({ title: 'Agent deleted', status: 'success' })
         setIsOpen(false)

         if (agentInScreen) {
            navigate('/agents')
         }

         render()
      } catch (err) {
         if (err instanceof Error) {
            toast({ title: 'Error trying to delete agent', status: 'error' })
         }
      }
   }

   return (
      <Modal
         title='Delete agent'
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         triggerButton={
            <Button
               aria-label={`Delete agent ${agent.getName()}`}
               colorScheme='gray'
               variant='ghost'
               onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(true)
               }}
            >
               <i className='fa fa-trash-o' />
            </Button>
         }
         confirmButton={
            <Button
               colorScheme='red'
               onClick={(e) => {
                  e.stopPropagation()
                  handleDelete()
               }}
            >
               Yes, delete agent
            </Button>
         }
      >
         <p>
            Are you sure you want to delete agent "{agent.getName().toString()}"
            ?
         </p>
      </Modal>
   )
}
