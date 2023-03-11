import { Agent as AgentClass } from '/@/types/agent/Agent'
import { AgentProfile } from '/@/features/agents/components/AgentProfile'
import { useAppContext } from '/@/providers/app'
import { useParams } from 'react-router-dom'

export const Agent = () => {
   const { agentList } = useAppContext()
   const { id } = useParams()
   const agent: AgentClass | null = agentList.findById(id ?? '')

   if (!agent) return null

   return <AgentProfile agent={agent} />
}
