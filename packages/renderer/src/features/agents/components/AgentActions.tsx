import { useNavigate } from 'react-router-dom'
import { Agent } from '/@/types/Agent'

interface AgentActionsProps {
   agent: Agent
}

export const AgentActions = ({ agent }: AgentActionsProps) => {
   const navigate = useNavigate()

   function showAgent() {
      navigate(`/agents/${agent.getId()}`)
   }

   function deleteAgent() {
      
   }

   return (
      <div className='d-flex gap-2'>
         <div>
            <button
               className='btn btn-primary'
               onClick={() => showAgent()}
            >
               <i className='fa fa-pencil' />
            </button>
         </div>

         <div>
            <button className='btn btn-danger'>
               <i className='fa fa-trash' />
            </button>
         </div>
      </div>
   )
}
