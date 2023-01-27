import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'
import { Agent as AgentType } from '/@/types/Agent'

export const Agent = () => {
   const { agentsList } = useAppContext()
   const { id } = useParams()
   const agent: AgentType | undefined = agentsList.findById(id ?? '')?.value

   if (!agent) {
      return null
   }

   return (
      <div>
         Agent
         <pre>{JSON.stringify(agent, null, 3)}</pre>
         <Link to='/agents'>
            <button className='btn btn-dark'>Back</button>
         </Link>
      </div>
   )
}
