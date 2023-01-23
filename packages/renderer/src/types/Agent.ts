import { Call } from '/@/types/Call'
import { List } from '/@/types/List'

interface AgentProps {
   id: string
   name: string
   age: number
}

export class Agent {
   id: string = ''
   name: string = ''
   age: number = 0
   callsHistory: List<Call>

   constructor({ id, name, age }: AgentProps) {
      this.id = id
      this.name = name
      this.age = age
      this.callsHistory = new List<Call>()
   }
}
