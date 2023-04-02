import { Call } from './Call'
import { CallJSON } from './JSON'
import { CallNode, CallNodeRef } from './CallNode'
import { ListException } from '/@/types/ListException'
import { ReadFromDiskResponse, WriteToDiskResponse } from '/@/features/agents/api'

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

   public find(param: Call | ((call: Call) => boolean)): CallNodeRef {
      let temp = this.head

      while (
         temp !== null &&
         (param instanceof Call
            ? temp.getValue().isDifferent(param)
            : param(temp.getValue()))
      ) {
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

   public toString(): string {
      return this.toArray()
         .map((call) => call.toString())
         .join('\n')
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

   public toJSON(): Array<CallJSON> {
      const result: Array<CallJSON> = []
      let temp = this.head

      while (temp !== null) {
         const value = temp.getValue().toJSON()
         result.push(value)
         temp = temp.getNext()
      }

      return result
   }

   public static fromJSON(data: Array<CallJSON>): CallList {
      const list = new CallList()

      data.forEach((call) => {
         try {
            list.insertAtEnd(Call.fromJSON(call))
         } catch (err) {
            if (err instanceof Error) {
               throw new Error(err.message + ' at CallList.fromJSON')
            }
         }
      })

      return list
   }

   public async writeToDisk(fileName: string) {
      try {
         const json: CallJSON[] = this.toJSON()
         const data = JSON.stringify(json)

         const result: WriteToDiskResponse = await window.ipcRenderer.invoke(
            'saveData',
            {
               fileName,
               data,
            }
         )

         return result
      } catch {
         throw new ListException('Error writing list to disk')
      }
   }
   public async readFromDisk(fileName: string) {
      try {
         const data: ReadFromDiskResponse = await window.ipcRenderer.invoke(
            'loadData',
            { fileName }
         )

         if (!data.data) {
            throw new ListException('Error loading calls from disk')
         }

         const json: CallJSON[] = JSON.parse(data.data)
         this.assign(CallList.fromJSON(json))

         return data
      } catch {
         throw new ListException('Error loading calls from disk')
      }
   }
}
