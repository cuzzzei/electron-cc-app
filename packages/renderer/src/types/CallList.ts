import { Call } from '/@/types/Call'
import { CallNode } from '/@/types/CallNode'
import { ListException } from '/@/types/ListException'

export class CallList {
   private head: CallNode | null
   private length: number

   constructor() {
      this.head = null
      this.length = 0
   }

   private isValidPosition(node: CallNode): boolean {
      let temp = this.head

      // Check that node is in the list
      while (temp !== null) {
         if (temp === node) {
            return true
         }

         temp = temp?.getNext()
      }

      return false
   }

   private copyAll(list: CallList) {}

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

      // Ascending order (07:00, 07:02, 08:00, ...)
      while (current !== null && current.getValue().isLesserThan(call)) {
         previous = current
         current = current.getNext()
      }

      this.insert(previous, call)
   }

   public remove(node: CallNode) {
      if (this.isEmpty()) {
         throw new ListException('Cannot remove, list is empty')
      }

      let prev = this.head

      // Found at first position?
      if (prev === node) {
         this.head = this.head?.getNext() ?? null
         this.length--
         return
      }

      while (prev?.getNext()) {
         if (prev.getNext() === node) {
            const nodeAfterDeleted = node?.getNext() ?? null
            prev.setNext(nodeAfterDeleted)
            this.length--
            return
         }

         prev = prev.getNext()
      }

      throw new ListException('Error trying to delete node, not found')
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

   public getPrevPosition(node: CallNode): CallNode | null {
      if (this.isEmpty())
         throw new ListException('Invalid operation, list is empty')

      let prev = this.head
      while (prev?.getNext() !== node && prev !== null) {
         prev = prev.getNext()
      }

      if (prev === null) {
         throw new ListException('Previous position not found')
      }

      return prev
   }

   public getNextPosition(node: CallNode): CallNode | null {
      return node.getNext()
   }

   public findData(call: Call): CallNode {
      let temp = this.head

      while (temp !== null) {
         if (temp.getValue().isEqual(call)) {
            return temp
         }

         temp = temp.getNext()
      }

      throw new ListException('Not found')
   }

   public retrieve(node: CallNode): Call {
      return node.getValue()
   }

   public static fromString(str: string): CallList {
      const calls: Array<string> = str.split('\n')
      const list = new CallList()

      calls.forEach((callStr) => {
         list.insertAtEnd(Call.fromString(callStr))
      })

      return list
   }

   public toString(): string {
      return this.map((call) => call.toString()).join('\n')
   }

   public deleteAll() {}

   public writeToDisk(s: string) {}

   public readFromDisk(s: string) {}

   public assign(list: CallList): CallList {
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
}
