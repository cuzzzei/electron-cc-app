import { AgentList } from '../AgentList'
import { AgentNode } from '../AgentNode'
import { Agent } from '/@/types/Agent'

export interface AgentListDefinition {
   isValidPos: (node: AgentNode) => boolean
   copyAll: (list: AgentList) => void
   swapNodes: (nodeA: AgentNode, nodeB: AgentNode) => void

   sortByName: (nodeA: AgentNode, nodeB: AgentNode) => void
   sortBySpecialty: (nodeA: AgentNode, nodeB: AgentNode) => void
   sortListByName: () => void
   sortListBySpecialty: () => void
   
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
