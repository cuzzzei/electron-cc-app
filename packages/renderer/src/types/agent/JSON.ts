import { Call } from '/@/types/call'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'

export interface AgentJSON {
   id: string
   extension: string
   name: Name
   age: number
   overtime: number
   specialty: Specialty
   startTime: Time
   endTime: Time
   callHistory: Array<Call>
}
