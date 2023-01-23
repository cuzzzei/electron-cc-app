import React, { createContext, useContext, useRef } from 'react'
import { useRender } from '/@/hooks'
import { Agent } from '/@/types/Agent'
import { List } from '/@/types/List'

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

   return <AppContext.Provider value={v}>{children}</AppContext.Provider>
}
