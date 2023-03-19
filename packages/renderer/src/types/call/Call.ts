import { CallJSON } from '/@/types/JSON'
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

   private initialize() {
      this.startTime = new Time()
      this.duration = new Time(0, 0)
      this.clientName = new Name()
   }

   constructor(data?: CallProps | Call) {
      if (!data) {
         this.initialize()
         return
      }

      if (data instanceof Call) {
         this.initialize()
         this.assign(data)
         return
      }

      this.id = data.id
      this.startTime = data.start
      this.duration = data.duration
      this.clientName = data.clientName
      this.description = data.description
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

   public setId(id: string) {
      this.id = id
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
      this.startTime.assign(other.startTime)
      this.duration.assign(other.duration)
      this.clientName.assign(other.clientName)
      this.description = other.description
      return this
   }

   public toJSON(): CallJSON {
      return {
         id: this.id,
         description: this.description,
         startTime: this.startTime.toJSON(),
         duration: this.duration.toJSON(),
         clientName: this.clientName.toJSON(),
      }
   }

   public static fromJSON(data: CallJSON): Call {
      const call = new Call()
      call.id = data.id
      call.description = data.description
      call.startTime = Time.fromJSON(data.startTime)
      call.duration = Time.fromJSON(data.duration)
      call.clientName = Name.fromJSON(data.clientName)
      return call
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

   public static compareByDuration(a: Call, b: Call): number {
      return a.duration.toInt() - b.duration.toInt()
   }
}
