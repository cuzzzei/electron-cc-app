import { AgentDefinition, AgentProps } from '/@/types/definitions/Agent'
import { AgentList } from './AgentList'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'

export class Agent implements AgentDefinition {
   private id: string
   private extension: string
   private name: Name
   private age: number
   private callsHistory: AgentList
   private overtime: number
   private specialty: Specialty
   private startTime: Time
   private finishTime: Time

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

   // getters
   public getId() { return this.id }
   public getExtension() { return this.extension }
   public getName() { return this.name }
   public getAge() { return this.age }
   public getCallsHistory() { return this.callsHistory }
   public getOvertime() { return this.overtime }
   public getSpecialty() { return this.specialty }
   public getStartTime() { return this.startTime }
   public getFinishTime() { return this.finishTime }

   // setters
   public setExtension(extension: string) { this.extension = extension }
   public setName(name: Name) { this.name = name }
   public setAge(age: number) { this.age = age }
   public setCallsHistory(callsHistory: AgentList) { this.callsHistory = callsHistory }
   public setOvertime(overtime: number) { this.overtime = overtime }
   public setSpecialty(specialty: Specialty) { this.specialty = specialty }
   public setStartTime(start: Time) { this.startTime = start }
   public setFinishTime(finish: Time) { this.finishTime = finish }
}
