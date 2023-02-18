import React, { createContext, useContext, useEffect, useRef } from 'react'
import { HashRouter } from 'react-router-dom'
import { useRender } from '/@/hooks'

// === BORRAR =====
import { AgentList } from '/@/types/agent'
import { fill } from '/@/providers/DELETE'
import { ToastProvider } from '/@/providers/ToastProvider'
// === BORRAR =====

interface AppContextType {
   agentList: AgentList
   render: () => void
}
const AppContext = createContext<AppContextType | null>(null)
export function useAppContext() {
   return useContext(AppContext) as AppContextType
}

function useInitAppContext() {
   const render = useRender()
   const agentList = useRef<AgentList>(new AgentList())

   if (!agentList?.current) {
      agentList.current = new AgentList()
   }

   return {
      render,
      agentList: agentList.current,
   }
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const context = useInitAppContext()
   const { agentList, render } = context

   // ==== BORRAR =====
   const renderRef = useRef(false)

   useEffect(() => {
      if (!renderRef.current) {
         fill(agentList, render)
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
