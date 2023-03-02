import { Agent } from './Agent'
import { NodeException } from '../NodeException'

export type AgentNodeRef = AgentNode | null

export class AgentNode {
   private value: Agent
   private prev: AgentNodeRef
   private next: AgentNodeRef

   constructor(value?: Agent) {
      if(value) {
         this.value = value
      }
      this.prev = null
      this.next = null
   }

   public getValue(): Agent {
      if (!this.value) {
         throw new NodeException('Node value is undefined')
      }

      return this.value
   }
   public getPrev(): AgentNodeRef {
      return this.prev
   }
   public getNext(): AgentNodeRef {
      return this.next
   }

   public setValue(value: Agent) {
      this.value = value
   }
   public setPrev(node: AgentNodeRef) {
      this.prev = node
   }
   public setNext(node: AgentNodeRef) {
      this.next = node
   }
}
