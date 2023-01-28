import { AgentNode } from './AgentNode'
import { Agent } from '/@/types/Agent'
import { AgentListDefinition } from '/@/types/definitions/AgentList'

export class AgentList implements AgentListDefinition {
   head: AgentNode | null
   length: number = 0

   constructor() {
      this.head = null
      this.length = 0
   }

   private isValidPos(node: AgentNode): boolean {
      return true
   }
   private copyAll(list: AgentList): void {}
   private swapNodes(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesByName(nodeA: AgentNode, nodeB: AgentNode): void {}
   private sortNodesBySpecialty(nodeA: AgentNode, nodeB: AgentNode): void {}

   public insert(newNode: AgentNode): void {
      newNode.setNext(this.head)
      this.head = newNode
      this.length += 1
   }

   public insertAgent(agent: Agent): void {
      const newNode = new AgentNode(agent)
      this.insert(newNode)
   }

   public myMAP(callback: (item: Agent) => any) {
      let result = []
      let temp: AgentNode | null = this.head

      while (temp != null) {
         result.push(callback(temp.getValue()))
         temp = temp.getNext()
      }

      return result
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

   public filter(filterFunction: (item: Agent) => boolean): AgentList {
      const filteredList = new AgentList()
      let temp: AgentNode | null = this.head

      while (temp != null) {
         const shouldAdd = filterFunction(temp.getValue())

         if (shouldAdd) {
            filteredList.insertAgent(temp.getValue())
         }

         temp = temp.getNext()
      }

      return filteredList
   }

   // =================================================================
   public sortByName() {}
   public sortBySpecialty() {}
   public isEmpty(): boolean {
      return this.head == null
   }
   public delete(node: AgentNode) {}
   public deleteAll() {}
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

   public toString() {
      return ''
   }

   public writeToDisk(s: string): void {}
   public readFromDisk(s: string): void {}

   public assign(newList: AgentList): AgentList {
      return newList
   }
}
