import { Call } from './Call'

export type CallNodeRef = CallNode | null

export class CallNode {
   private value: Call
   private next: CallNodeRef

   constructor(value?: Call) {
      if (!value) {
         this.value = new Call()
      } else {
         this.value = value
      }

      this.next = null
   }

   public getValue(): Call {
      return this.value
   }

   public getNext(): CallNodeRef {
      return this.next
   }

   public setValue(value: Call) {
      this.value = value
   }

   public setNext(next: CallNodeRef) {
      this.next = next
   }
}
