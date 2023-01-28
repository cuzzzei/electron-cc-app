import { AgentNodeDefinition } from './definitions/AgentNode'
import { Agent } from '/@/types/Agent'

export class AgentNode
implements AgentNodeDefinition {
   private value: Agent
   private prev : AgentNode | null
   private next : AgentNode | null

   constructor( value : Agent) {
      this.value = value
      this.prev = null
      this.next = null
   }

   public getValue() { return this.value }
   public getPrev() { return this.prev }
   public getNext() { return this.next }

   public setValue( value : Agent ) { this.value = value }
   public setPrev( node : AgentNode | null) { this.prev = node }
   public setNext( node : AgentNode | null) { this.next = node }
}
