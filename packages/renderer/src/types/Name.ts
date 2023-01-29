import { NameDefinition } from '/@/types/definitions/Name'

export class Name implements NameDefinition {
   private first: string
   private last: string

   constructor(first: string, last: string) {
      this.first = first
      this.last = last
   }

   // getters
   public getFirst() {
      return this.first
   }
   public getLast() {
      return this.last
   }

   // setters
   public setFirst(first: string) {
      this.first = first
   }
   public setLast(last: string) {
      this.last = last
   }

   public toString(): string {
      return `${this.first} ${this.last}`
   }
}
