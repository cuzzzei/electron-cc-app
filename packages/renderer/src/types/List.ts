import { BaseEntity } from '/@/types/BaseEntity'

interface Node<T extends BaseEntity> {
   value: T
   next: Node<T> | null
}

export class List<T extends BaseEntity> {
   head: Node<T> | null
   length: number = 0

   constructor() {
      this.head = null
      this.length = 0
   }

   add(newValue: T): void {
      const newNode: Node<T> = {
         value: newValue,
         next: null,
      }

      newNode.next = this.head
      this.head = newNode
      this.length += 1
   }

   map(callback: (item: T) => any) {
      let result = []
      let temp: Node<T> | null = this.head

      while (temp != null) {
         result.push(callback(temp.value))
         temp = temp.next
      }

      return result
   }

   findById(id: string): Node<T> | null {
      let temp: Node<T> | null = this.head

      while (temp != null) {
         if (temp.value.getId() === id) {
            return temp
         }

         temp = temp.next
      }

      return null
   }

   filter(filterFunction: (item: T) => boolean): List<T> {
      const filteredList = new List<T>()

      let temp: Node<T> | null = this.head

      while (temp != null) {
         const shouldAdd = filterFunction(temp.value)

         if (shouldAdd) {
            filteredList.add(temp.value)
         }
         temp = temp.next
      }

      return filteredList
   }
}
