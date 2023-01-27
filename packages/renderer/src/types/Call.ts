import { CallDefinition, CallProps } from '/@/types/definitions/Call'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export class Call implements CallDefinition {
   private id: string
   private start: Time
   private finish: Time
   private clientName: Name
   private description: string

   constructor({ id, start, finish, clientName, description }: CallProps ) {
      this.id = id
      this.start = start
      this.finish = finish
      this.clientName = clientName
      this.description = description
   }

   public getId() { return this.id }
   public getStart() { return this.start }
   public getFinish() { return this.finish }
   public getClientName() { return this.clientName }
   public getDescription() { return this.description }

   public setStart(start: Time) { this.start = start }
   public setFinish(finish: Time) { this.finish = finish }
   public setClientName(clientName: Name) { this.clientName = clientName }
   public setDescription(description: string) { this.description = description }

   public toString() : string {
      return `${this.id} | (${this.start} - ${this.finish}) | ${this.clientName.toString()} \n${this.description}`
   }
}
