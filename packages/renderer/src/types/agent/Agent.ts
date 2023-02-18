import { CallList } from '/@/types/call'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'

export interface AgentProps {
   id: string
   extension: string
   name: Name
   age: number
   callHistory: CallList
   overtime: number
   specialty: Specialty
   startTime: Time
   endTime: Time
}

export class Agent {
   private id: string
   private extension: string
   private name: Name
   private age: number
   private overtime: number
   private specialty: Specialty
   private startTime: Time
   private endTime: Time
   private callHistory: CallList

   constructor({
      id,
      extension,
      name,
      age,
      callHistory,
      overtime,
      specialty,
      startTime,
      endTime,
   }: AgentProps) {
      this.id = id
      this.extension = extension
      this.name = name
      this.age = age
      this.callHistory = callHistory
      this.overtime = overtime
      this.specialty = specialty
      this.startTime = startTime
      this.endTime = endTime
   }

   public getId(): string {
      return this.id
   }
   public getExtension(): string {
      return this.extension
   }
   public getName(): Name {
      return this.name
   }
   public getAge(): number {
      return this.age
   }
   public getOvertime(): number {
      return this.overtime
   }
   public getSpecialty(): Specialty {
      return this.specialty
   }
   public getStartTime(): Time {
      return this.startTime
   }
   public getEndTime(): Time {
      return this.endTime
   }
   public getCallHistory(): CallList {
      return this.callHistory
   }

   public setExtension(extension: string) {
      this.extension = extension
   }
   public setName(name: Name) {
      this.name = name
   }
   public setAge(age: number) {
      this.age = age
   }
   public setOvertime(overtime: number) {
      this.overtime = overtime
   }
   public setSpecialty(specialty: Specialty) {
      this.specialty = specialty
   }
   public setStartTime(start: Time) {
      this.startTime = start
   }
   public setEndTime(End: Time) {
      this.endTime = End
   }
   public setCallHistory(callHistory: CallList) {
      this.callHistory = callHistory
   }

   public toString(): string {
      return ''
   }

   public assign(other: Agent): Agent {
      return this
   }

   public isEqual(other: Agent): boolean {
      return false
   }

   public isDifferent(other: Agent): boolean {
      return false
   }

   public isGreatherThan(other: Agent): boolean {
      return false
   }

   public isGreaterOrEquals(other: Agent): boolean {
      return false
   }

   public isLesserThan(other: Agent): boolean {
      return false
   }

   public isLesserOrEquals(other: Agent): boolean {
      return false
   }
}
