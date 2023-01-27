import { Call } from '/@/types/Call'
import { List } from '/@/types/List'
import { Name } from '/@/types/Name'
import { Specialty } from '/@/types/Specialty'
import { Time } from '/@/types/Time'

export interface AgentProps {
   id: string
   extension: string
   name: Name
   age: number
   callsHistory: List<Call>
   overtime: number
   specialty: Specialty
   start: Time
   finish: Time
}

export interface AgentDefinition {
   // getters
   getId: () => string
   getExtension: () => string
   getName: () => Name
   getAge: () => number
   getCallsHistory: () => List<Call>
   getOvertime: () => number
   getSpecialty: () => Specialty
   getStart: () => Time
   getFinish: () => Time

   // setters
   setExtension: (value: string) => void
   setName: (value: Name) => void
   setAge: (value: number) => void
   setCallsHistory: (value: List<Call>) => void
   setOvertime: (value: number) => void
   setSpecialty: (value: Specialty) => void
   setStart: (value: Time) => void
   setFinish: (value: Time) => void
}
