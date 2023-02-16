import { Call } from './Call'

export class CallNode {
   private value: Call
   private next: CallNode | null

   constructor(value: Call) {
      this.value = value
      this.next = null
   }

   public getValue(): Call {
      return this.value
   }

   public getNext(): CallNode | null {
      return this.next
   }

   public setValue(value: Call) {
      this.value = value
   }

   public setNext(next: CallNode | null) {
      this.next = next
   }
}
