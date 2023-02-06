export class NodeException extends Error {
   public name: string

   constructor(message: string) {
      super(message)
      this.name = 'NodeException'
   }
}
