import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Avatar } from '/@/components/Avatar'
import { AgentList as AgentListClass, Agent } from '/@/types/agent'
import { DeleteAgent } from './DeleteAgent'

interface AgentListProps {
   agentList: AgentListClass
}

const Container = styled.ul`
   overflow-x: hidden;
`

export const AgentList = ({ agentList }: AgentListProps) => {
   return (
      <Container className='list-unstyled mt-3 ps-4 md:ps-5'>
         {agentList.toArray().map((agent) => (
            <AgentItem
               key={agent.getId()}
               agent={agent}
            />
         ))}
      </Container>
   )
}

interface AgentItemProps {
   agent: Agent
}

const Item = styled.li`
   &:hover {
      background-color: var(--accents-1);
   }
`

function AgentItem({ agent }: AgentItemProps) {
   const params = useParams()
   const navigate = useNavigate()
   const active = params.id === agent.getId()

   return (
      <Item
         key={agent.getId()}
         className='py-4 ps-2 d-flex gap-4 align-items-center'
         role='button'
         onClick={() => {
            navigate('/agents/view/' + agent.getId())
         }}
      >
         <Avatar
            className='rounded-circle'
            seed={agent.getName().toString()}
            style={{ width: '5rem' }}
         />

         <div className='d-flex flex-column w-100'>
            <div className='d-flex w-100 justify-content-between pe-2'>
               <p
                  className='fs-5 mb-1 d-flex'
                  style={{
                     letterSpacing: '-0.05rem',
                     color: active ? 'var(--geist-violet-dark)' : undefined,
                  }}
               >
                  {agent.getName().toString()}
               </p>

               <DeleteAgent agent={agent} />
            </div>

            <p className='mb-0'>{agent.getSpecialty()}</p>
            <p className='mb-0  text-muted'>{agent.getExtension()}</p>
         </div>
      </Item>
   )
}
