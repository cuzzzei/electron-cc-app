import { Call } from '/@/types/Call'
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
   private start: Time
   private finish: Time

   constructor({
      id,
      extension,
      name,
      age,
      callsHistory,
      overtime,
      specialty,
      start,
      finish,
   }: AgentProps) {
      this.id = id
      this.extension = extension
      this.name = name
      this.age = age
      this.callsHistory = callsHistory
      this.overtime = overtime
      this.specialty = specialty
      this.start = start
      this.finish = finish
   }

   // getters
   public getId() { return this.id }
   public getExtension() { return this.extension }
   public getName() { return this.name }
   public getAge() { return this.age }
   public getCallsHistory() { return this.callsHistory }
   public getOvertime() { return this.overtime }
   public getSpecialty() { return this.specialty }
   public getStart() { return this.start }
   public getFinish() { return this.finish }

   // setters
   public setExtension(extension: string) { this.extension = extension }
   public setName(name: Name) { this.name = name }
   public setAge(age: number) { this.age = age }
   public setCallsHistory(callsHistory: AgentList) { this.callsHistory = callsHistory }
   public setOvertime(overtime: number) { this.overtime = overtime }
   public setSpecialty(specialty: Specialty) { this.specialty = specialty }
   public setStart(start: Time) { this.start = start }
   public setFinish(finish: Time) { this.finish = finish }
}
