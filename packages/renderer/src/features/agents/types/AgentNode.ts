import { Agent } from './Agent'
import { NodeException } from '/@/types/NodeException'

export type AgentNodeRef = AgentNode | null

export class AgentNode {
   private value: Agent
   private prev: AgentNodeRef
   private next: AgentNodeRef

   private copyConstructor(node: AgentNode) {
      this.value = new Agent(node.getValue())
      this.prev = node.getPrev()
      this.next = node.getNext()
   }

   constructor(value?: Agent | AgentNode) {
      if (value instanceof AgentNode) {
         this.copyConstructor(value)
         return
      }

      if (value instanceof Agent) {
         this.value = value
      }
      this.prev = null
      this.next = null
   }

   public getValue(): Agent {
      console.log(this.value === undefined)
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
