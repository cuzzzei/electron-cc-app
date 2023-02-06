export class Name {
   private first: string
   private last: string

   constructor(first: string, last: string) {
      this.first = first
      this.last = last
   }

   public getFirst(): string {
      return this.first
   }
   public getLast(): string {
      return this.last
   }

   public setFirst(first: string) {
      this.first = first
   }
   public setLast(last: string) {
      this.last = last
   }

   public static fromString(str: string): Name {
      const [first, last] = str.split(' ')
      return new Name(first, last)
   }

   public toString(): string {
      return `${this.first} ${this.last}`
   }

   public assign(name: Name): Name {
      this.first = name.getFirst()
      this.last = name.getLast()
      return this
   }

   public isEqual(other: Name): boolean {
      return this.toString() === other.toString()
   }

   public isDifferent(other: Name): boolean {
      return this.toString() !== other.toString()
   }

   public isGreatherThan(other: Name): boolean {
      return this.toString() > other.toString()
   }

   public isGreaterOrEquals(other: Name): boolean {
      return this.toString() >= other.toString()
   }

   public isLesserThan(other: Name): boolean {
      return this.toString() < other.toString()
   }

   public isLesserOrEquals(other: Name): boolean {
      return this.toString() <= other.toString()
   }
}
