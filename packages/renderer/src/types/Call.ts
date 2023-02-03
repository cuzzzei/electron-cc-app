import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export interface CallProps {
   id: string
   start: Time
   finish: Time
   clientName: Name
   description: string
}

export class Call {
   private id: string
   private startTime: Time
   private finishTime: Time
   private clientName: Name
   private description: string

   constructor({ id, start, finish, clientName, description }: CallProps) {
      this.id = id
      this.startTime = start
      this.finishTime = finish
      this.clientName = clientName
      this.description = description
   }

   public getId(): string {
      return this.id
   }
   public getStartTime(): Time {
      return this.startTime
   }
   public getFinishTime(): Time {
      return this.finishTime
   }
   public getClientName(): Name {
      return this.clientName
   }
   public getDescription(): string {
      return this.description
   }

   public setStartTime(start: Time) {
      this.startTime = start
   }
   public setFinishTime(finish: Time) {
      this.finishTime = finish
   }
   public setClientName(clientName: Name) {
      this.clientName = clientName
   }
   public setDescription(description: string) {
      this.description = description
   }

   public toString(): string {
      return `${this.id} | (${this.startTime} - ${
         this.finishTime
      }) | ${this.clientName.toString()} \n${this.description}`
   }

   public assign(other: Call): Call {
      return this
   }

   public isEqual(other: Call): boolean {
      return false
   }

   public isDifferent(other: Call): boolean {
      return false
   }

   public isGreatherThan(other: Call): boolean {
      return false
   }

   public isGreaterOrEquals(other: Call): boolean {
      return false
   }

   public isLesserThan(other: Call): boolean {
      return false
   }

   public isLesserOrEquals(other: Call): boolean {
      return false
   }
}
