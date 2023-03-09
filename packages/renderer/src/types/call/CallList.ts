import { Call } from './Call'
import { CallNode, CallNodeRef } from './CallNode'
import { ListException } from '/@/types/ListException'

export class CallList {
   private head: CallNodeRef
   private length: number

   constructor(other?: CallList) {
      if (other) {
         this.copyAll(other)
         return
      }

      this.head = null
      this.length = 0
   }

   private copyAll(other: CallList) {
      this.head = null
      this.length = other.length
      let aux: CallNodeRef = other.head

      while (aux !== null) {
         const newNode = new CallNode(new Call(aux.getValue()))
         const lastPos = this.getLastPosition()

         if (lastPos === null) {
            newNode.setNext(this.head)
            this.head = newNode
         } else {
            lastPos.setNext(newNode)
         }

         aux = aux.getNext()
      }
   }

   private isValidPosition(node: CallNode): boolean {
      let temp = this.head

      while (temp !== null) {
         if (temp === node) {
            return true
         }

         temp = temp?.getNext()
      }

      return false
   }

   public isEmpty(): boolean {
      return this.head === null
   }

   public getLength(): number {
      return this.length
   }

   public getFirstPosition(): CallNodeRef {
      return this.head
   }

   public getLastPosition(): CallNodeRef {
      let temp = this.head

      while (temp?.getNext()) {
         temp = temp.getNext()
      }

      return temp
   }

   public getPrevPosition(node: CallNode): CallNodeRef {
      if (node === this.head || !this.isValidPosition(node)) return null

      let prev = this.head
      while (prev !== null && prev.getNext() !== node) {
         prev = prev.getNext()
      }

      return prev
   }

   public getNextPosition(node: CallNode): CallNodeRef {
      return node.getNext()
   }

   public toString(): string {
      return this.toArray()
         .map((call) => call.toString())
         .join('\n')
   }

   public insert(position: CallNodeRef, call: Call) {
      if (position !== null && !this.isValidPosition(position)) {
         throw new ListException('Invalid position')
      }

      const newNode = new CallNode(call)

      if (newNode === null) {
         throw new ListException('Memory not available')
      }

      // Insert at head
      if (position === null) {
         newNode.setNext(this.head)
         this.head = newNode
      } else {
         newNode.setNext(position.getNext())
         position.setNext(newNode)
      }

      this.length++
   }

   public insertAtEnd(call: Call) {
      this.insert(this.getLastPosition(), call)
   }

   public insertOrdered(call: Call, compare?: (a: Call, b: Call) => number) {
      let previous = null
      let current = this.head

      // Descending order (08:00, 07:50, 07:40, ...)
      while (
         current !== null &&
         (compare
            ? compare(current.getValue(), call) > 0
            : current.getValue().isGreatherThan(call))
      ) {
         previous = current
         current = current.getNext()
      }

      this.insert(previous, call)
   }

   public find(call: Call): CallNodeRef {
      let temp = this.head

      while (temp !== null && temp.getValue().isDifferent(call)) {
         temp = temp.getNext()
      }

      return temp
   }

   public findById(id: string): Call | null {
      let temp = this.head

      while (temp !== null) {
         if (temp.getValue().getId() === id) {
            return temp.getValue()
         }

         temp = temp.getNext()
      }

      return null
   }

   public retrieve(node: CallNode): Call {
      return node.getValue()
   }

   public delete(node: CallNode) {
      if (!this.isValidPosition(node)) {
         throw new ListException('Invalid position CallList.remove()')
      }

      let prev = this.head

      // Found at first position?
      if (prev === node) {
         this.head = this.head?.getNext() ?? null
         this.length--
         return
      }

      this.getPrevPosition(node)?.setNext(node.getNext())
      this.length--
   }

   public deleteAll() {
      this.head = null
      this.length = 0
   }

   public assign(other: CallList): CallList {
      this.copyAll(other)
      return this
   }

   public toArray(): Array<Call> {
      const result: Array<Call> = []
      let temp: CallNodeRef = this.head

      while (temp != null) {
         result.push(temp.getValue())
         temp = temp.getNext()
      }

      return result
   }

   public filter(filterFunction: (item: Call) => boolean): CallList {
      const filteredList = new CallList()
      let temp: CallNodeRef = this.head

      while (temp !== null) {
         const shouldAdd = filterFunction(temp.getValue())

         if (shouldAdd) {
            filteredList.insertAtEnd(temp.getValue())
         }

         temp = temp.getNext()
      }

      return filteredList
   }

   public toJSON(): any {}
   public writeToDisk(s: string) {}
   public readFromDisk(s: string) {}
}
