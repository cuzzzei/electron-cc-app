import { Agent } from './Agent'
import { AgentNode, AgentNodeRef } from './AgentNode'
import { ListException } from '/@/types/ListException'

export class AgentList {
   private head: AgentNode
   private length: number = 0

   constructor() {
      this.head = new AgentNode()

      if (!this.head) {
         throw new ListException('Memory allocation failed')
      }

      this.head.setPrev(this.head)
      this.head.setNext(this.head)
   }

   public getLength(): number {
      return this.length
   }

   // ===================
   private isValidPosition(position: AgentNode): boolean {
      let aux = this.head.getNext()

      while (aux !== this.head) {
         if (position === aux) {
            return true
         }

         aux = aux?.getNext() || null
      }

      // Not found
      return false
   }

   public isEmpty(): boolean {
      return this.head.getNext() === this.head
   }

   public toString() {
      return this.map((agent) => agent).join('\n\n\n')
   }

   private insert(position: AgentNodeRef, data: Agent): void {
      if (position !== null && !this.isValidPosition(position)) {
         throw new ListException('Invalid position')
      }

      // Insert at start
      if (position === null) {
         position = this.head
      }

      const newNode = new AgentNode(data)

      if (!newNode) {
         throw new ListException('Memory allocation')
      }

      newNode.setPrev(position)
      newNode.setNext(position!.getNext())

      position.getNext()?.setPrev(newNode as AgentNode)
      position.setNext(newNode as AgentNode)

      this.length++
   }

   public insertAtEnd(agent: Agent): void {
      const lastpos = this.getLastPosition()
      this.insert(lastpos, agent)
   }

   public insertAtStart(agent: Agent): void {
      this.insert(null, agent)
   }

   // ============================

   private copyAll(list: AgentList): void {}
   private swapNodes(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesByName(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesBySpecialty(nodeA: AgentNode, nodeB: AgentNode): void {}

   // =================================================================

   public delete(node: AgentNode) {}

   public getFirstPosition(): AgentNode {
      return this.head as AgentNode
   }

   public getLastPosition(): AgentNodeRef {
      if (this.head.getNext() === this.head) {
         return null
      }

      return this.head.getPrev()
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
      let temp: AgentNodeRef = this.head.getNext()
      let i = 0

      while (temp !== null && temp !== this.head) {
         result.push(callback(temp.getValue(), i++))
         temp = temp.getNext()
      }

      return result
   }

   public filter(filterFunction: (item: Agent) => boolean): AgentList {
      const filteredList = new AgentList()
      let temp: AgentNodeRef = this.head.getNext()

      while (temp !== null && temp !== this.head) {
         const shouldAdd = filterFunction(temp.getValue())

         if (shouldAdd) {
            filteredList.insertAtEnd(temp.getValue())
         }

         temp = temp.getNext()
      }

      return filteredList
   }

   public findById(id: string): AgentNodeRef {
      let temp: AgentNodeRef = this.head.getNext()

      while (temp !== null && temp !== this.head) {
         if (temp.getValue().getId() === id) {
            return temp
         }

         temp = temp.getNext()
      }

      return null
   }

   public toJSON(): any {}
}
