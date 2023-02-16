import React, { createContext, useContext, useEffect, useRef } from 'react'
import { HashRouter } from 'react-router-dom'
import { useRender } from '/@/hooks'

// === BORRAR =====
import { AgentList } from '/@/types/agent'
import { fill } from '/@/providers/DELETE'
import { ToastProvider } from '/@/providers/ToastProvider'
// === BORRAR =====

interface AppContextType {
   agentsList: AgentList
   render: () => void
}
const AppContext = createContext<AppContextType | null>(null)
export function useAppContext() {
   return useContext(AppContext) as AppContextType
}

function useInitAppContext() {
   const render = useRender()
   const agentsList = useRef<AgentList>(new AgentList())

   if (!agentsList?.current) {
      agentsList.current = new AgentList()
   }

   return {
      render,
      agentsList: agentsList.current,
   }
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const context = useInitAppContext()
   const { agentsList, render } = context

   // ==== BORRAR =====
   const renderRef = useRef(false)

   useEffect(() => {
      if (!renderRef.current) {
         fill(agentsList, render)
         renderRef.current = true
      }
   }, [])

   return (
      <HashRouter>
         <AppContext.Provider value={context}>
            <ToastProvider>{children}</ToastProvider>
         </AppContext.Provider>
      </HashRouter>
   )
}
