import { AgentList } from '/@/types/agent'
import { HashRouter } from 'react-router-dom'
import { ToastProvider } from '/@/providers/ToastProvider'
import { useRender } from '/@/hooks'
import React, { createContext, useContext, useRef } from 'react'

interface AppContextType {
   agentList: AgentList
   render: () => void
}
const AppContext = createContext<AppContextType | null>(null)
export function useAppContext() {
   return useContext(AppContext) as AppContextType
}

export function useInitAppContext(initialValue?: AgentList) {
   const render = useRender()
   const agentList = useRef<AgentList>(initialValue ?? new AgentList())

   if (!agentList?.current) {
      agentList.current = new AgentList()
   }

   return {
      render,
      agentList: agentList.current,
   }
}

export const AppProvider = ({
   children,
   initialValues,
}: {
   children: React.ReactNode
   initialValues?: {
      agentList: AgentList
   }
}) => {
   const context = useInitAppContext(initialValues?.agentList)

   return (
      <HashRouter>
         <AppContext.Provider value={context}>
            <ToastProvider>{children}</ToastProvider>
         </AppContext.Provider>
      </HashRouter>
   )
}
