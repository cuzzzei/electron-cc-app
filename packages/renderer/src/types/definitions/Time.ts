export interface TimeDefinition {
   // getters
   getHour: () => number
   getMinute: () => number

   // setters
   setHour: (hour: number) => void
   setMinute: (minute: number) => void

   toString: () => string
}
