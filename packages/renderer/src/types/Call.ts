import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export interface CallProps {
   id: string
   start: Time
   end: Time
   clientName: Name
   description: string
}

export class Call {
   private id: string
   private startTime: Time
   private endTime: Time
   private clientName: Name
   private description: string

   constructor({ id, start, end, clientName, description }: CallProps) {
      this.id = id
      this.startTime = start
      this.endTime = end
      this.clientName = clientName
      this.description = description
   }

   public getId(): string {
      return this.id
   }
   public getStartTime(): Time {
      return this.startTime
   }
   public getEndTime(): Time {
      return this.endTime
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
   public setEndTime(End: Time) {
      this.endTime = End
   }
   public setClientName(clientName: Name) {
      this.clientName = clientName
   }
   public setDescription(description: string) {
      this.description = description
   }

   public static fromString(s: string): Call {
      const [
         id,
         clientFirstName,
         clientLastName,
         startTimeStr,
         endTimeStr,
         description,
      ] = s.split(' | ')

      return new Call({
         id,
         clientName: new Name(clientFirstName, clientLastName),
         start: Time.fromString(startTimeStr),
         end: Time.fromString(endTimeStr),
         description,
      })
   }

   public toString(): string {
      let result: string = ''
      result += this.id + ' | '
      result += this.clientName.getFirst() + ' | '
      result += this.clientName.getLast() + ' | '
      result += this.startTime + ' | '
      result += this.endTime + ' | '
      result += this.description
      return result
   }

   public assign(other: Call): Call {
      this.id = other.id
      this.startTime = new Time(
         other.startTime.getHour(),
         other.startTime.getMinute()
      )

      this.endTime = new Time(
         other.endTime.getHour(),
         other.endTime.getMinute()
      )

      this.clientName = other.clientName
      this.description = other.description

      return this
   }

   public isEqual(other: Call): boolean {
      return this.id === other.getId()
   }

   public isDifferent(other: Call): boolean {
      return this.id !== other.getId()
   }

   public isGreatherThan(other: Call): boolean {
      return this.startTime.isGreatherThan(other.startTime)
   }

   public isGreaterOrEquals(other: Call): boolean {
      return this.startTime.isGreaterOrEquals(other.startTime)
   }

   public isLesserThan(other: Call): boolean {
      return this.startTime.isLesserThan(other.startTime)
   }

   public isLesserOrEquals(other: Call): boolean {
      return this.startTime.isLesserOrEquals(other.startTime)
   }
}
