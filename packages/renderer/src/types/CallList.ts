import { Call } from '/@/types/Call'
import { CallNode } from '/@/types/CallNode'

export class CallList {
   private head: CallNode | null
   private length: number

   constructor() {
      this.head = null
      this.length = 0
   }

   private isValidPosition(node: CallNode): boolean {
      return true
   }

   private copyAll(list: CallList) {}

   private insertNode(node: CallNode) {
      node.setNext(this.head)
      this.head = node
      this.length += 1
   }

   public isEmpty(): boolean {
      return this.length === 0
   }

   public getLength(): number {
      return this.length
   }

   public insert(call: Call) {
      const newNode = new CallNode(call)
      this.insertNode(newNode)
   }

   public insertOrdered(call: Call) {}

   public remove(node: CallNode) {}

   public getFirstPosition(): CallNode | null {
      return null
   }

   public getLastPosition(): CallNode | null {
      return null
   }

   public getPrevPosition(): CallNode | null {
      return null
   }

   public getNextPosition(): CallNode | null {
      return null
   }

   public findData(call: Call): CallNode | null {
      return null
   }

   public retrieve(node: CallNode): Call {
      return node.getValue()
   }

   public toString(): string {
      return ''
   }

   public deleteAll() {}

   public writeToDisk(s: string) {}

   public readFromDisk(s: string) {}

   public assign(list: CallList): CallList {
      return this
   }

   public map(callback: (item: Call) => any): Array<any> {
      let result = []
      let temp: CallNode | null = this.head

      while (temp != null) {
         result.push(callback(temp.getValue()))
         temp = temp.getNext()
      }

      return result
   }
}
