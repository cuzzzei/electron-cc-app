export interface NameDefinition {
   // getters
   getFirst: () => string
   getLast: () => string

   // setters
   setFirst: (first: string) => void
   setLast: (last: string) => void

   toString: () => string
}
