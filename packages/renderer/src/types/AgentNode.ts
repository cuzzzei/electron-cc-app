import { Agent } from '/@/types/Agent'

export class AgentNode {
   private value: Agent
   private prev: AgentNode | null
   private next: AgentNode | null

   constructor(value: Agent) {
      this.value = value
      this.prev = null
      this.next = null
   }

   public getValue(): Agent {
      return this.value
   }
   public getPrev(): AgentNode | null {
      return this.prev
   }
   public getNext(): AgentNode | null {
      return this.next
   }

   public setValue(value: Agent) {
      this.value = value
   }
   public setPrev(node: AgentNode | null) {
      this.prev = node
   }
   public setNext(node: AgentNode | null) {
      this.next = node
   }
}
