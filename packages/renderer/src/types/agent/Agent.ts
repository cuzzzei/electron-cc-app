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
      let result: string = ''
      result += 'ID: ' + this.id + '\n'
      result += 'Extension: ' + this.extension + '\t'
      result += `Name: ${this.name}\n`
      result += `Overtime: ${this.overtime} hours`
      result += `Specialty: ${this.specialty}\n`
      result += this.startTime.toString() + ' - ' + this.endTime.toString()
      result += '\n\nCall History: \n'
      result += this.callHistory.toString() + ' | '

      return result
   }

   public assign(other: Agent): Agent {
      this.id = other.id
      this.extension = other.extension
      this.name = other.name
      this.age = other.age
      this.callHistory = other.callHistory
      this.overtime = other.overtime
      this.specialty = other.specialty
      this.startTime = other.startTime
      this.endTime = other.endTime
      return this
   }

   public isEqual(other: Agent): boolean {
      return this.id === other.id
   }

   public isDifferent(other: Agent): boolean {
      return !this.isEqual(other)
   }

   public isGreatherThan(other: Agent): boolean {
      return !this.isLesserOrEquals(other)
   }

   public isGreaterOrEquals(other: Agent): boolean {
      return !this.isLesserThan(other)
   }

   public isLesserThan(other: Agent): boolean {
      return this.id < other.id
   }

   public isLesserOrEquals(other: Agent): boolean {
      return this.isLesserThan(other) || this.isEqual(other)
   }
}
