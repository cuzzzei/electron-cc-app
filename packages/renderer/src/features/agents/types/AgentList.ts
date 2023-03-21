import { Agent } from './Agent'
import { AgentJSON } from './JSON'
import { AgentNode, AgentNodeRef } from './AgentNode'
import { ListException } from '/@/types/ListException'

export class AgentList {
   private head: AgentNode
   private length: number = 0

   constructor(other?: AgentList) {
      this.head = new AgentNode()
      this.head.setPrev(this.head)
      this.head.setNext(this.head)

      if (other) {
         this.copyAll(other)
      }
   }

   private copyAll(other: AgentList) {
      let aux: AgentNodeRef = other.head.getNext()

      while (aux !== null && aux !== other.head) {
         const newNode = new AgentNode(new Agent(aux.getValue()))
         let position = this.getLastPosition()

         // List
         if (position === null) {
            position = this.head
         }

         newNode.setPrev(position)
         newNode.setNext(position.getNext())

         position.getNext()?.setPrev(newNode as AgentNode)
         position.setNext(newNode as AgentNode)

         aux = aux.getNext()
      }

      this.length = other.length
   }

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

   public getFirstPosition(): AgentNodeRef {
      if (this.isEmpty()) return null

      return this.head.getNext()
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

   public find(param: Agent | ((agent: Agent) => boolean)): AgentNodeRef {
      let aux: AgentNodeRef = this.head.getNext()

      while (aux !== null && aux !== this.head) {
         const currentAgent = aux.getValue()
         if (param instanceof Agent) {
            if (currentAgent.isEqual(param)) return aux
         } else if (param(currentAgent)) {
            return aux
         }

         aux = aux.getNext()
      }

      return null
   }

   public findById(id: string): Agent | null {
      let temp: AgentNodeRef = this.head.getNext()

      while (temp !== null && temp !== this.head) {
         if (temp.getValue().getId() === id) {
            return temp.getValue()
         }

         temp = temp.getNext()
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

   public deleteAll() {
      this.head = new AgentNode()
      this.head.setPrev(this.head)
      this.head.setNext(this.head)
      this.length = 0
   }

   public assign(other: AgentList): AgentList {
      this.copyAll(other)
      return this
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

   public toString(): string {
      return this.toArray()
         .map((agent) => agent.toString())
         .join('\n\n\n')
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

   public toJSON(): Array<AgentJSON> {
      const result: Array<AgentJSON> = []
      let temp = this.head.getNext()

      while (temp !== null && temp !== this.head) {
         const value = temp.getValue().toJSON()
         result.push(value)
         temp = temp.getNext()
      }

      return result
   }

   public fromJSON(data: Array<AgentJSON>): AgentList {
      const list = new AgentList()

      data.forEach((agent) => {
         try {
            list.insertAtEnd(Agent.fromJSON(agent))
         } catch (err) {
            if (err instanceof Error) {
               throw new Error(err.message + ' at AgentList.fromJSON')
            }
         }
      })

      return list
   }

   private swapContigousNodes(nodeA: AgentNode, nodeB: AgentNode) {
      const aPrev = nodeA.getPrev()
      const bNext = nodeB.getNext()

      //  aPrev  nodeA -> nodeB -> bNext
      //  aPrev  nodeB -> nodeA -> bNext

      aPrev?.setNext(nodeB)
      nodeB.setPrev(aPrev)
      nodeB.setNext(nodeA)

      nodeA.setPrev(nodeB)
      nodeA.setNext(bNext)
      bNext?.setPrev(nodeA)

      //aPrev?.setNext(nodeB)
      //aNext?.setPrev(nodeB)

      //nodeA.setPrev(nodeB)
      //nodeA.setNext(nodeB.getNext())

      //nodeB.getNext()?.setPrev(nodeA)

      //nodeB.setPrev(aPrev)
      //nodeB.setNext(nodeA)
   }

   public swapPositions(nodeA: AgentNodeRef, nodeB: AgentNodeRef) {
      if (nodeA === null || nodeB === null || nodeA === nodeB) {
         return
      }

      const aPrev = nodeA.getPrev()
      const aNext = nodeA.getNext()

      if (aNext === nodeB) {
         this.swapContigousNodes(nodeA, nodeB)
         return
      }

      if (aPrev === nodeB) {
         this.swapContigousNodes(nodeB, nodeA)
         return
      }

      nodeA.setPrev(nodeB.getPrev())
      nodeA.setNext(nodeB.getNext())
      nodeB.getPrev()?.setNext(nodeA)
      nodeB.getNext()?.setPrev(nodeA)

      nodeB.setPrev(aPrev)
      nodeB.setNext(aNext)
      aPrev?.setNext(nodeB)
      aNext?.setPrev(nodeB)
   }

   public print(show?: boolean) {
      let result = []
      let temp = this.head.getNext()

      while (temp !== null && temp !== this.head) {
         result.push(temp.getValue().getName().toString())
         temp = temp.getNext()
      }

      if (show) {
         console.log(result)
      }

      return result
   }

   public printReversed() {
      let result = []
      let temp = this.head.getPrev()

      while (temp !== null && temp !== this.head) {
         result.push(temp.getValue().getName().toString())
         temp = temp.getPrev()
      }

      return result
   }

   public isSorted(compare: (a: Agent, b: Agent) => number) {
      //let aux = this.getFirstPosition()
      const data = this.toArray()
      let i = 0

      while (i < data.length - 1) {
         if (compare(data[i], data[i + 1]) > 0) {
            return false
         }

         i++
      }

      return true
   }

   private findPosition(n: number) {
      let pos: AgentNodeRef = this.head.getNext()

      for (let i = 0; i < n; i++) {
         pos = pos?.getNext() ?? null
      }

      return pos
   }

   private stillOk(a: Array<string>, b: Array<string>): boolean {
      if (a.length !== b.length) return false
      const lastpos = b.length - 1

      for (let i = 0; i < a.length; i++) {
         if (a[i] !== b[lastpos - i]) return false
      }

      return true
   }

   private quickSort(
      start: AgentNodeRef,
      end: AgentNodeRef,
      compare: (a: Agent, b: Agent) => number
   ) {
      if (!start || !end) return
      if (start === end) return

      let i: AgentNodeRef = start
      let j: AgentNodeRef = end

      //this.print(true)

      while (i !== j) {
         while (
            i !== j &&
            i !== null &&
            end !== null &&
            compare(i.getValue(), end.getValue()) <= 0
         ) {
            i = i.getNext()
            //console.log('i++')
         }

         while (
            i !== j &&
            j !== null &&
            end !== null &&
            compare(j.getValue(), end.getValue()) >= 0
         ) {
            j = j.getPrev()
            //console.log('j--')
         }

         if (i !== j) {
            //console.log(start)

            if (i === start) {
               start = j
               //console.log(start, '\n\n\n\n')
            }

            this.swapPositions(i, j)
            ;[i, j] = [j, i]
         }
      }

      if (i !== end) {
         this.swapPositions(i, end)
         if (i === start) {
            //console.log('i no se movio')
            start = end
         }

         // @ts-ignore
         ;[i, end] = [end, i]
      }

      if (!this.stillOk(this.print(), this.printReversed())) {
         throw Error('ZZZZZZZZZZZZ')
      }

      //this.print(true)
      //console.log('Pivote: ', i?.getValue().getName().toString())
      //console.log(
      //   start?.getValue()?.getName(),
      //   i.getValue()?.getName(),
      //   end?.getValue()?.getName()
      //)
      //console.log(i === start, i, start)

      // means i is start
      if (i !== start) {
         //console.log('Ordenar parte izquierda')
         this.quickSort(start, i.getPrev(), compare)
      }

      if (i !== end) {
         //console.log('Ordenar parte derecha')
         this.quickSort(i.getNext(), end, compare)
      }
      //if (i.getPrev()?.getValue() !== undefined) {
      //   console.log('Ordenar parte izquierda')
      //   console.log(
      //      start?.getValue()?.getName()?.toString(),
      //      '---',
      //      i.getPrev()?.getValue()?.getName()?.toString()
      //   )

      //   this.quickSort(start, i.getPrev(), compare)
      //}

      //if (i.getNext()?.getValue() !== undefined) {
      //   console.log('Ordenar parte derecha')
      //   console.log(
      //      i.getNext()?.getValue()?.getName()?.toString(),
      //      '---',
      //      end?.getValue()?.getName()?.toString()
      //   )

      //   this.quickSort(i.getNext(), end, compare)
      //}
   }

   public sort(compare: (a: Agent, b: Agent) => number) {
      if (this.isEmpty()) return

      this.quickSort(this.getFirstPosition(), this.getLastPosition(), compare)
   }

   public writeToDisk(s: string) {}
   public readFromDisk(s: string) {}
}
