export class ListException extends Error {
   public name: string

   constructor(message: string) {
      super(message)
      this.name = 'ListException'
   }
}
