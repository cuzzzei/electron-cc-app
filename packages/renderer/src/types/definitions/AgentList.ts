import { AgentList } from '../AgentList'
import { AgentNode } from '../AgentNode'
import { Agent } from '/@/types/Agent'

export interface AgentListDefinition {
   sortByName: () => void
   sortBySpecialty: () => void
   
   isEmpty: () => boolean
   insert: (node: AgentNode) => void
   delete: (node: AgentNode) => void
   deleteAll: () => void

   getFirstPosition: () => AgentNode
   getLastPosition: () => AgentNode
   getPrevPosition: (node : AgentNode) => AgentNode
   getNextPosition: (node : AgentNode) => AgentNode
   
   find: (node: AgentNode) => AgentNode
   retrieve: (node: AgentNode) => Agent

   toString: () => string
   writeToDisk: (s: string) => void
   readFromDisk: (s: string) => void

   assign: (newList: AgentList) => AgentList
}
