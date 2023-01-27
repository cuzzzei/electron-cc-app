import { Call } from '/@/types/Call'
import { List } from '/@/types/List'
import { Specialty } from '/@/types/Specialty'

interface AgentProps {
   id: string
   name: string
   age: number
   specialty: Specialty
}

export class Agent {
   private id: string
   private extension: string
   private name: string
   private age: number
   private callsHistory: List<Call>
   private overtime: number
   private specialty: Specialty
   private start: string
   private finish: string

   constructor({ id, name, age, specialty }: AgentProps) {
      this.id = id
      this.name = name
      this.age = age
      this.extension = '123'
      this.start = '07:00'
      this.finish = '13:00'
      this.overtime = 3
      this.specialty = specialty
      this.callsHistory = new List<Call>()

      for (let i = 0; i < 10; i++) {
         const newCall: Call = {
            id: crypto.randomUUID(),
            clientName: `Client ${i}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis',
            start: '07:00',
            finish: '07:04',
         }

         this.callsHistory.add(newCall)
      }
   }

   getId() {
      return this.id
   }

   getExtension() {
      return this.extension
   }

   getName() {
      return this.name
   }

   getAge() {
      return this.age
   }

   getCallsHistory() {
      return this.callsHistory
   }

   getOvertime() {
      return this.overtime
   }

   getSpecialty() {
      return this.specialty
   }

   getStart() {
      return this.start
   }

   getFinish() {
      return this.finish
   }
}
