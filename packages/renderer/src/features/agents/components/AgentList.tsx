import { useNavigate, useParams } from 'react-router-dom'
import { Avatar } from '/@/components/Avatar'
import { AgentList as AgentListClass, Agent } from '/@/types/agent'

interface AgentListProps {
   agentList: AgentListClass
}

export const AgentList = ({ agentList }: AgentListProps) => {
   return (
      <ul
         className='list-unstyled'
         style={{
            overflowX: 'hidden',
         }}
      >
         {agentList.toArray().map((agent) => (
            <AgentItem
               key={agent.getId()}
               agent={agent}
            />
         ))}
      </ul>
   )
}

interface AgentItemProps {
   agent: Agent
}

function AgentItem({ agent }: AgentItemProps) {
   const params = useParams()
   const navigate = useNavigate()

   return (
      <li
         key={agent.getId()}
         className='py-4 d-flex gap-4 align-items-center animate__animated animate__backInRight'
         role='button'
         onClick={() => {
            navigate('/agents/view/' + agent.getId())
         }}
      >
         <Avatar
            className='rounded-circle'
            seed={agent.getName().toString()}
            style={{
               width: params.id === agent.getId() ? '7.5rem' : '5rem',
            }}
         />

         <div className='d-flex flex-column'>
            <p className='fw-bold fs-5 mb-1'>{agent.getName().toString()}</p>
            <p className='mb-0'>{agent.getSpecialty()}</p>
            <p className='text-muted mb-0'>ext. {agent.getExtension()}</p>
         </div>
      </li>
   )
}
