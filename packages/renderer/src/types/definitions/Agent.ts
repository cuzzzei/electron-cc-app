import { AgentList } from '../AgentList'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'

export interface AgentProps {
   id: string
   extension: string
   name: Name
   age: number
   callsHistory: AgentList
   overtime: number
   specialty: Specialty
   startTime: Time
   finishTime: Time
}

export interface AgentDefinition {
   // getters
   getId: () => string
   getExtension: () => string
   getName: () => Name
   getAge: () => number
   getCallsHistory: () => AgentList
   getOvertime: () => number
   getSpecialty: () => Specialty
   getStartTime: () => Time
   getFinishTime: () => Time

   // setters
   setExtension: (value: string) => void
   setName: (value: Name) => void
   setAge: (value: number) => void
   setCallsHistory: (value: AgentList) => void
   setOvertime: (value: number) => void
   setSpecialty: (value: Specialty) => void
   setStartTime: (value: Time) => void
   setFinishTime: (value: Time) => void
}
