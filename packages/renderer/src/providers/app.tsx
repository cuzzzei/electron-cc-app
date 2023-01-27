import React, { createContext, useContext, useEffect, useRef } from 'react'
import { HashRouter } from 'react-router-dom'
import { useRender } from '/@/hooks'

// === BORRAR =====
import { Agent } from '/@/types/Agent'
import { Call } from '/@/types/Call'
import { List } from '/@/types/List'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
// === BORRAR =====

interface AppContextType {
   agentsList: List<Agent>
   render: () => void
}
const AppContext = createContext<AppContextType | null>(null)
export function useAppContext() {
   return useContext(AppContext) as AppContextType
}

function useInitAppContext() {
   const render = useRender()
   const agentsList = useRef<List<Agent> | null>(null)

   if (!agentsList?.current) {
      agentsList.current = new List<Agent>()
   }

   return {
      render,
      agentsList: agentsList.current,
   }
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const v = useInitAppContext()

   // ==== BORRAR =====
   const renderRef = useRef(false)

   function handleAddAgent(p: Agent) {
      v.agentsList.add(p)
      v.render()
   }

   useEffect(() => {
      if (!renderRef.current) {
         const agent1 = new Agent({
            id: crypto.randomUUID(),
            name: new Name('Ronaldo', 'Nazario'),
            age: 22,
            callsHistory: new List<Call>(),
            extension: '333',
            start: new Time(7, 0),
            finish: new Time(8, 50),
            overtime: 10,
            specialty: 'de escritorio',
         })

         const agent2 = new Agent({
            id: crypto.randomUUID(),
            name: new Name('Marco "El Chino"', 'Maidana'),
            age: 25,
            callsHistory: new List<Call>(),
            extension: '444',
            start: new Time(7, 0),
            finish: new Time(9, 40),
            overtime: 11,
            specialty: 'portátiles',
         })

         handleAddAgent(agent1)
         handleAddAgent(agent2)
         renderRef.current = true
      }
   }, [])
   // ==== BORRAR =====

   return (
      <HashRouter>
         <AppContext.Provider value={v}>{children}</AppContext.Provider>
      </HashRouter>
   )
}
