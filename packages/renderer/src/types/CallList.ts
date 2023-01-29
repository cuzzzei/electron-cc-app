import { Call } from '/@/types/Call'
import { CallNode } from '/@/types/CallNode'

export class CallList {
   private head: CallNode | null
   private length: number

   constructor() {
      this.head = null
      this.length = 0
   }

   public getLength(): number {
      return this.length
   }

   public insert(newNode: CallNode) {
      newNode.setNext(this.head)
      this.head = newNode
      this.length += 1
   }

   public insertCall(call: Call) {
      const newNode = new CallNode(call)
      this.insert(newNode)
   }

   public map(callback: (item: Call) => any) {
      let result = []
      let temp: CallNode | null = this.head

      while (temp != null) {
         result.push(callback(temp.getValue()))
         temp = temp.getNext()
      }

      return result
   }
}
