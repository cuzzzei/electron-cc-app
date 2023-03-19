import { Specialty } from '/@/types/Specialty'

export interface NameJSON {
   first: string
   last: string
}

export interface TimeJSON {
   hour: number
   minute: number
}

export interface CallJSON {
   id: string
   startTime: TimeJSON
   duration: TimeJSON
   clientName: NameJSON
   description: string
}

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
