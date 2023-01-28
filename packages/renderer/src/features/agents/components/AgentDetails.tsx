import { Agent } from '/@/types/Agent'

interface AgentInfoProps {
   agent: Agent
}

export const AgentDetails = ({ agent }: AgentInfoProps) => {
   return (
      <div className='p-5'>
         <pre>{JSON.stringify(agent, null, 4)}</pre>
      </div>
   )
}
