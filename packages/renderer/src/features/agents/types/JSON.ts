import { NameJSON, TimeJSON } from '/@/types/JSON'
import { Specialty } from './Specialty'
import { CallJSON } from '/@/features/calls'

export interface AgentJSON {
   id: string
   extension: string
   name: NameJSON
   age: number
   overtime: number
   specialty: Specialty
   startTime: TimeJSON
   endTime: TimeJSON
   callHistory: Array<CallJSON>
}
