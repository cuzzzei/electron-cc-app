import { Agent } from './Agent'
import { AgentNode } from './AgentNode'
import { ListException } from '/@/types/ListException'

export class AgentList {
   head: AgentNode | null
   length: number = 0

   constructor() {
      this.head = null
      this.length = 0
   }

   // ===================
   private isValidPosition(node: AgentNode): boolean {      
      return true
   }

   public isEmpty(): boolean {
      return this.length === 0
   }

   public toString() {
      return this.map((agent) => agent).join('\n\n\n')
   }

   private insertNode(pos: AgentNode | null, data: Agent): void {
      // isvlidpos
      if (pos !== null && true) {
         //throw new Error()
      }

      if (pos === null) {
         pos = this.head
      }

      const newNode = new AgentNode(data)

      if (!newNode) {
         throw new ListException('Memory allocation')
      }

      newNode.setPrev(pos)
      newNode.setNext(pos!.getNext())

      pos!.getNext()!.setPrev(newNode as AgentNode)
      pos!.setNext(newNode as AgentNode)
   }

   // ============================

   private copyAll(list: AgentList): void {}
   private swapNodes(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesByName(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesBySpecialty(nodeA: AgentNode, nodeB: AgentNode): void {}

   // =================================================================

   // TODO:change implementation to use position
   public insertAtEnd(agent: Agent): void {
      //if(value)
      //   throw new ListException('Error trying to insert node in <AgentList>')
      const lastpos = this.getLastPosition()
      console.log(lastpos)
      this.insertNode(lastpos , agent)
   }

   public delete(node: AgentNode) {}

   public getFirstPosition(): AgentNode {
      return this.head as AgentNode
   }

   public getLastPosition(): AgentNode | null {
      return this.head?.getPrev() || null
   }

   public getPrevPosition(node: AgentNode): AgentNode {
      return this.head as AgentNode
   }
   public getNextPosition(node: AgentNode): AgentNode {
      return this.head as AgentNode
   }

   public find(node: AgentNode): AgentNode {
      return this.head as AgentNode
   }

   public retrieve(node: AgentNode): Agent {
      return node.getValue()
   }

   public sortByName() {}
   public sortBySpecialty() {}

   public deleteAll() {}
   public writeToDisk(s: string) {}
   public readFromDisk(s: string) {}

   public assign(other: AgentList): AgentList {
      this.head = other.head
      this.length = other.length
      return this
   }

   // ======================================================
   public map(callback: (item: Agent, index: number) => any) {
      let result = []
      let temp: AgentNode | null = this.head?.getNext() || null

      let i = 0
      while (temp != null) {
         result.push(callback(temp.getValue(), i++))
         temp = temp.getNext()
      }

      return result
   }

   public filter(filterFunction: (item: Agent) => boolean): AgentList {
      const filteredList = new AgentList()
      let temp: AgentNode | null = this.head

      while (temp != null) {
         const shouldAdd = filterFunction(temp.getValue())

         if (shouldAdd) {
            filteredList.insertAtEnd(temp.getValue())
         }

         temp = temp.getNext()
      }

      return filteredList
   }

   public findById(id: string): AgentNode | null {
      let temp: AgentNode | null = this.head

      while (temp != null) {
         if (temp.getValue().getId() === id) {
            return temp
         }

         temp = temp.getNext()
      }

      return null
   }

   public toJSON(): any {}
}
