import { CallList } from '/@/types/call'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'
import { AgentJSON } from '../JSON'

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

   private initialize() {
      this.name = new Name()
      this.startTime = new Time()
      this.endTime = new Time()
      this.callHistory = new CallList()
   }

   constructor(data?: AgentProps | Agent) {
      if (!data) {
         this.initialize()
         return
      }

      if (data instanceof Agent) {
         this.initialize()
         this.assign(data)
         return
      }

      this.id = data.id
      this.extension = data.extension
      this.name = data.name
      this.age = data.age
      this.callHistory = data.callHistory
      this.overtime = data.overtime
      this.specialty = data.specialty
      this.startTime = data.startTime
      this.endTime = data.endTime
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

   public setId(id: string) {
      this.id = id
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
      result += `ID: ${this.id} \n`
      result += `Extension: ${this.extension}\t\t`
      result += `Name: ${this.name}\n`
      result += `Overtime: ${this.overtime} hours\t`
      result += `Specialty: ${this.specialty}\n`
      result += `${this.startTime} - ${this.endTime}`

      const hasCallHistory = this.callHistory.getLength() > 0

      if (hasCallHistory) {
         result += '\n\nCall History: \n'
         result += this.callHistory.toString() + ' | '
      }

      return result
   }

   public assign(other: Agent): Agent {
      this.id = other.id
      this.extension = other.extension
      this.name.assign(other.name)
      this.age = other.age
      this.callHistory.assign(other.callHistory)
      this.overtime = other.overtime
      this.specialty = other.specialty
      this.startTime.assign(other.startTime)
      this.endTime.assign(other.endTime)
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

   public toJSON(): AgentJSON {
      return {
         id: this.id,
         age: this.age,
         extension: this.extension,
         overtime: this.overtime,
         specialty: this.specialty,
         name: this.name.toJSON(),
         startTime: this.startTime.toJSON(),
         endTime: this.endTime.toJSON(),
         callHistory: this.callHistory.toJSON(),
      }
   }

   public static fromJSON(json: AgentJSON): Agent {
      const agent = new Agent()
      agent.id = json.id
      agent.extension = json.extension
      agent.age = json.age
      agent.overtime = json.overtime
      agent.specialty = json.specialty
      agent.name = Name.fromJSON(json.name)
      agent.startTime = Time.fromJSON(json.startTime)
      agent.endTime = Time.fromJSON(json.endTime)
      agent.callHistory = CallList.fromJSON(json.callHistory)
      return agent
   }

   public static compareByName(a: Agent, b: Agent): number {
      return Number(a.name.toString()) - Number(b.name.toString())
   }

   public static compareBySpecialty(a: Agent, b: Agent): number {
      return Number(a.specialty) - Number(b.specialty)
   }
}
