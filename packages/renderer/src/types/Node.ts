export class SinglyNode<T> {
   private value: T
   private next: SinglyNodeReference<T>

   constructor(value: T) {
      this.value = value
      this.next = null
   }

   public getValue(): T {
      return this.value
   }

   public getNext(): SinglyNodeReference<T> {
      return this.next
   }

   public setValue(value: T): void {
      this.value = value
   }

   public setNext(next: SinglyNodeReference<T>): void {
      this.next = next
   }
}

export type SinglyNodeReference<T> = SinglyNode<T> | null
