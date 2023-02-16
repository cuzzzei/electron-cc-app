import { ListException } from '/@/types/ListException'
import { SinglyNode, SinglyNodeReference } from '/@/types/Node'

type TSignature = {
   toString: () => string
}

export class SinglyList<T extends TSignature> {
   private head: SinglyNodeReference<T>
   private length: number

   constructor() {
      this.head = null
      this.length = 0
   }

   private isValidPosition(node: SinglyNode<T>): boolean {
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

   private copyAll(list: SinglyList<T>) {}

   public isEmpty(): boolean {
      return this.head === null
   }

   public getLength(): number {
      return this.length
   }

   public insert(position: SinglyNodeReference<T>, item: T) {
      if (position !== null && !this.isValidPosition(position)) {
         throw new ListException('Invalid position')
      }

      const newNode = new SinglyNode<T>(item)

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

   public insertAtEnd(item: T) {
      this.insert(this.getLastPosition(), item)
   }

   public insertOrdered(item: T, compare: (current: T, item: T) => boolean) {
      let previous = null
      let current = this.head

      while (current !== null && compare(current.getValue(), item)) {
         previous = current
         current = current.getNext()
      }

      this.insert(previous, item)
   }

   public remove(node: SinglyNode<T>) {
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

   public getFirstPosition(): SinglyNodeReference<T> {
      return this.head
   }

   public getLastPosition(): SinglyNodeReference<T> {
      let temp = this.head

      while (temp?.getNext()) {
         temp = temp.getNext()
      }

      return temp
   }

   public getPrevPosition(node: SinglyNode<T>): SinglyNodeReference<T> {
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

   public getNextPosition(node: SinglyNode<T>): SinglyNodeReference<T> {
      return node.getNext()
   }

   public findData(
      value: T,
      isEqual: (current: T, item: T) => boolean
   ): SinglyNode<T> {
      let current = this.head

      while (current !== null) {
         if (isEqual(current.getValue(), value)) {
            return current
         }

         current = current.getNext()
      }

      throw new ListException('Not found')
   }

   public retrieve(node: SinglyNode<T>): T {
      return node.getValue()
   }

   public toString(): string {
      return this.map((item) => item.toString()).join('\n')
   }

   public deleteAll() {
      this.head = null
      this.length = 0
   }

   public writeToDisk(s: string) {}

   public readFromDisk(s: string) {}

   public assign(list: SinglyList<T>): SinglyList<T> {
      return this
   }

   public map<G>(callback: (item: T, index: number) => any): Array<G> {
      let result: Array<G> = []
      let temp: SinglyNodeReference<T> = this.head

      let index = 0
      while (temp != null) {
         result.push(callback(temp.getValue(), index++))
         temp = temp.getNext()
      }

      return result
   }
}
