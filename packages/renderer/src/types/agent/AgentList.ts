import { Agent } from './Agent'
import { AgentNode } from './AgentNode'

export class AgentList {
   head: AgentNode | null
   length: number = 0

   constructor() {
      this.head = null
      this.length = 0
   }

   private isValidPosition(node: AgentNode): boolean {
      return true
   }
   private copyAll(list: AgentList): void {}
   private swapNodes(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesByName(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesBySpecialty(nodeA: AgentNode, nodeB: AgentNode): void {}
   private insertNode(newNode: AgentNode): void {
      newNode.setNext(this.head)
      this.head = newNode
      this.length += 1
   }

   // =================================================================
   public isEmpty(): boolean {
      return this.length === 0
   }

   public insert(agent: Agent): void {
      //if(value)
      //   throw new ListException('Error trying to insert node in <AgentList>')

      const newNode = new AgentNode(agent)
      this.insertNode(newNode)
   }

   public delete(node: AgentNode) {}

   public getFirstPosition(): AgentNode {
      return this.head as AgentNode
   }

   public getLastPosition(): AgentNode {
      return this.head as AgentNode
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

   public toString() {
      return ''
   }

   public deleteAll() {}
   public writeToDisk(s: string) {}
   public readFromDisk(s: string) {}

   public assign(newList: AgentList): AgentList {
      return newList
   }

   // ======================================================
   public map(callback: (item: Agent) => any) {
      let result = []
      let temp: AgentNode | null = this.head

      while (temp != null) {
         result.push(callback(temp.getValue()))
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
            filteredList.insert(temp.getValue())
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
}
