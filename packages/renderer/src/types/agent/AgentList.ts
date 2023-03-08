import { Agent } from './Agent'
import { AgentNode, AgentNodeRef } from './AgentNode'
import { ListException } from '/@/types/ListException'

export class AgentList {
   private head: AgentNode
   private length: number = 0

   constructor() {
      this.head = new AgentNode()
      this.head.setPrev(this.head)
      this.head.setNext(this.head)
   }

   private copyAll(list: AgentList) {}

   private isValidPosition(position: AgentNode): boolean {
      let aux = this.head.getNext()

      while (aux !== null && aux !== this.head) {
         if (position === aux) {
            return true
         }

         aux = aux.getNext()
      }

      return false
   }

   public isEmpty(): boolean {
      return this.head.getNext() === this.head
   }

   public getLength(): number {
      return this.length
   }

   public getFirstPosition(): AgentNode {
      return this.head as AgentNode
   }

   public getLastPosition(): AgentNodeRef {
      if (this.isEmpty()) {
         return null
      }

      return this.head.getPrev()
   }

   public getPrevPosition(pos: AgentNode): AgentNodeRef {
      if (!this.isValidPosition(pos) || pos === this.head.getNext()) {
         return null
      }

      return pos.getPrev()
   }

   public getNextPosition(pos: AgentNode): AgentNodeRef {
      if (!this.isValidPosition(pos) || pos === this.head.getPrev()) {
         return null
      }

      return pos.getNext()
   }

   public toString(): string {
      return this.toArray()
         .map((agent) => agent.toString())
         .join('\n\n\n')
   }

   public insert(position: AgentNodeRef, data: Agent) {
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
      newNode.setNext(position.getNext())

      position.getNext()?.setPrev(newNode as AgentNode)
      position.setNext(newNode as AgentNode)

      this.length++
   }

   public insertAtEnd(agent: Agent) {
      const lastpos = this.getLastPosition()
      this.insert(lastpos, agent)
   }

   public insertAtStart(agent: Agent) {
      this.insert(null, agent)
   }

   public find(agent: Agent): AgentNodeRef {
      let aux: AgentNodeRef = this.head.getNext()

      while (aux !== null && aux !== this.head) {
         if (aux.getValue().isEqual(agent)) {
            return aux
         }

         aux = aux.getNext()
      }

      return null
   }

   public retrieve(node: AgentNode): Agent {
      if (!this.isValidPosition(node)) {
         throw new ListException('Invalid position')
      }

      return node.getValue()
   }

   public delete(pos: AgentNode) {
      if (!this.isValidPosition(pos)) {
         throw new ListException('Error trying to delete. Invalid position')
      }

      pos.getPrev()?.setNext(pos.getNext())
      pos.getNext()?.setPrev(pos.getPrev())
   }

   public deleteAll() {}

   public assign(other: AgentList): AgentList {
      this.head = other.head
      this.length = other.length
      return this
   }

   public toArray(): Array<Agent> {
      const result: Array<Agent> = []
      let temp: AgentNodeRef = this.head.getNext()

      while (temp !== null && temp !== this.head) {
         result.push(temp.getValue())
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

   private swapNodes(nodeA: AgentNode, nodeB: AgentNode) {}
   private sortNodesByName(nodeA: AgentNode, nodeB: AgentNode) {}
   private sortNodesBySpecialty(nodeA: AgentNode, nodeB: AgentNode) {}
   public sortByName() {}
   public sortBySpecialty() {}
   public writeToDisk(s: string) {}
   public readFromDisk(s: string) {}
   public toJSON(): any {}
}
