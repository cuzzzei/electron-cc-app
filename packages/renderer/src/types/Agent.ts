import { CallList } from '/@/types/CallList'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'

export interface AgentProps {
   id: string
   extension: string
   name: Name
   age: number
   callsHistory: CallList
   overtime: number
   specialty: Specialty
   startTime: Time
   finishTime: Time
}

export class Agent {
   private id: string
   private extension: string
   private name: Name
   private age: number
   private overtime: number
   private specialty: Specialty
   private startTime: Time
   private finishTime: Time
   private callsHistory: CallList

   constructor({
      id,
      extension,
      name,
      age,
      callsHistory,
      overtime,
      specialty,
      startTime,
      finishTime,
   }: AgentProps) {
      this.id = id
      this.extension = extension
      this.name = name
      this.age = age
      this.callsHistory = callsHistory
      this.overtime = overtime
      this.specialty = specialty
      this.startTime = startTime
      this.finishTime = finishTime
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
   public getFinishTime(): Time {
      return this.finishTime
   }
   public getCallsHistory(): CallList {
      return this.callsHistory
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
   public setFinishTime(finish: Time) {
      this.finishTime = finish
   }
   public setCallsHistory(callsHistory: CallList) {
      this.callsHistory = callsHistory
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
