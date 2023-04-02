import { AgentList } from '/@/features/agents'
import { createAgentList } from '../features/agents/utils/index'
import { HashRouter } from 'react-router-dom'
import { ToastProvider } from '/@/providers/ToastProvider'
import { useRender } from '/@/hooks'
import React, { createContext, useContext, useRef } from 'react'
import { useEffect } from 'react'

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
   const agentList = useRef<AgentList | null>(new AgentList())

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

   if (context.agentList === null) {
      return null
   }

   return (
      <HashRouter>
         <AppContext.Provider
            value={{
               agentList: context.agentList,
               render: context.render,
            }}
         >
            <ToastProvider>{children}</ToastProvider>
         </AppContext.Provider>
      </HashRouter>
   )
}
