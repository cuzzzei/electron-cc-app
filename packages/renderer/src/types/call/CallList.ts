import { Call } from './Call'
import { CallNode } from './CallNode'
import { ListException } from '/@/types/ListException'

export class CallList {
   private head: CallNode | null
   private length: number

   constructor() {
      this.head = null
      this.length = 0
   }

   // Checks that node is in the list
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

   private copyAll(list: CallList) {
      this.head = list.head
      this.length = list.length
   }

   public isEmpty(): boolean {
      return this.head === null
   }

   public getLength(): number {
      return this.length
   }

   public insert(position: CallNode | null, call: Call) {
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

   public insertOrdered(call: Call) {
      let previous = null
      let current = this.head

      // Descending order (08:00, 07:50, 07:40, ...)
      while (current !== null && current.getValue().isGreatherThan(call)) {
         previous = current
         current = current.getNext()
      }

      this.insert(previous, call)
   }

   public getPrevPosition(node: CallNode): CallNode | null {
      if (node === this.head || !this.isValidPosition(node)) return null

      let prev = this.head
      while (prev !== null && prev.getNext() !== node) {
         prev = prev.getNext()
      }

      return prev
   }

   public remove(node: CallNode) {
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
   }

   public findData(call: Call): CallNode | null {
      let temp = this.head

      while (temp !== null && temp.getValue().isDifferent(call)) {
         temp = temp.getNext()
      }

      return temp
   }

   public getFirstPosition(): CallNode | null {
      return this.head
   }

   public getLastPosition(): CallNode | null {
      let temp = this.head

      while (temp?.getNext()) {
         temp = temp.getNext()
      }

      return temp
   }

   public getNextPosition(node: CallNode): CallNode | null {
      return node.getNext()
   }

   public retrieve(node: CallNode): Call {
      return node.getValue()
   }

   public toString(): string {
      return this.map((call) => call.toString()).join('\n')
   }

   public deleteAll() {
      this.head = null
      this.length = 0
   }

   public writeToDisk(s: string) {}

   public readFromDisk(s: string) {}

   public assign(other: CallList): CallList {
      this.copyAll(other)
      return this
   }

   public map(callback: (item: Call, index: number) => any): Array<any> {
      let result = []
      let temp: CallNode | null = this.head

      let index = 0
      while (temp != null) {
         result.push(callback(temp.getValue(), index++))
         temp = temp.getNext()
      }

      return result
   }

   public toJSON(): any {}
}
