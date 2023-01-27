import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export interface CallProps {
   id: string
   start: Time
   finish: Time
   clientName: Name
   description: string
}

export interface CallDefinition {
   // getters
   getId: () => string
   getStart: () => Time
   getFinish: () => Time
   getClientName: () => Name
   getDescription: () => string

   // setters
   setStart: (start : Time) => void
   setFinish: (finish: Time) => void
   setClientName: (clientName: Name) => void
   setDescription: (description: string) => void

   toString: () => string
}
