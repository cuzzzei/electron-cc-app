import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export interface CallProps {
   id: string
   start: Time
   duration: Time
   clientName: Name
   description: string
}

export class Call {
   private id: string
   private startTime: Time
   private duration: Time
   private clientName: Name
   private description: string

   constructor({ id, start, duration, clientName, description }: CallProps) {
      this.id = id
      this.startTime = start
      this.duration = duration
      this.clientName = clientName
      this.description = description
   }

   public getId(): string {
      return this.id
   }
   public getStartTime(): Time {
      return this.startTime
   }
   public getDuration(): Time {
      return this.duration
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
   public setDuration(duration: Time) {
      this.duration = duration
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
         duration,
         description,
      ] = s.split(' | ')

      return new Call({
         id,
         clientName: new Name(clientFirstName, clientLastName),
         start: Time.fromString(startTimeStr),
         duration: Time.fromString(duration),
         description,
      })
   }

   public toString(): string {
      let result: string = ''
      result += this.id + ' | '
      result += this.clientName.getFirst() + ' | '
      result += this.clientName.getLast() + ' | '
      result += this.startTime + ' | '
      result += this.duration + ' | '
      result += this.description
      return result
   }

   public assign(other: Call): Call {
      this.id = other.id
      this.startTime = new Time(
         other.startTime.getHour(),
         other.startTime.getMinute()
      )

      this.duration = new Time(
         other.duration.getHour(),
         other.duration.getMinute()
      )

      this.clientName = other.clientName
      this.description = other.description

      return this
   }

   public isEqual(other: Call): boolean {
      return this.id === other.id
   }

   public isDifferent(other: Call): boolean {
      return !this.isEqual(other)
   }

   public isGreatherThan(other: Call): boolean {
      return !this.isLesserOrEquals(other)
   }

   public isGreaterOrEquals(other: Call): boolean {
      return !this.isLesserThan(other)
   }

   public isLesserThan(other: Call): boolean {
      return this.id < other.id
   }

   public isLesserOrEquals(other: Call): boolean {
      return this.isLesserThan(other) || this.isEqual(other)
   }

   public static compareByStartTime(a: Call, b: Call): number {
      return a.startTime.toInt() - b.startTime.toInt()
   }
}
