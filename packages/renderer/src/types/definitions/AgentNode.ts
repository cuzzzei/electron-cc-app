import { AgentNode } from '../AgentNode'
import { Agent } from '/@/types/Agent'

export interface AgentNodeDefinition {
   // getters
   getValue: () => Agent
   getPrev: () => AgentNode | null
   getNext: () => AgentNode | null

   // setters
   setValue: (value: Agent) => void
   setPrev: (node: AgentNode | null) => void
   setNext: (node: AgentNode | null) => void
}
