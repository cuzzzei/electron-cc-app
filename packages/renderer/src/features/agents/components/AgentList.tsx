import { useNavigate, useParams } from 'react-router-dom'
import { Avatar } from '/@/components/Avatar'
import { AgentList as AgentListClass } from '/@/types/AgentList'

interface AgentListProps {
   agentList: AgentListClass
}

export const AgentList = ({ agentList }: AgentListProps) => {
   const params = useParams()
   const navigate = useNavigate()

   return (
      <ul className='list-unstyled'>
         {agentList.map((agent) => (
            <li
               key={agent.getId()}
               className='py-4 d-flex gap-4 align-items-center  animate__animated animate__backInRight'
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
                  <p className='fw-bold fs-5 mb-1'>
                     {agent.getName().toString()}
                  </p>
                  <p className='mb-0'>{agent.getSpecialty()}</p>
                  <p className='text-muted mb-0'>ext. {agent.getExtension()}</p>
               </div>
            </li>
         ))}
      </ul>
   )
}
