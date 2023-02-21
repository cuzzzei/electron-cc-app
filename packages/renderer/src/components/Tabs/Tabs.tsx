import { createContext, useContext, useState } from 'react'

interface TabsProps {
   children: Array<React.ReactElement>
   className?: string
}

interface TabsContextType {
   tabIndex: number
   setTabIndex: (index: number) => void
}
const TabsContext = createContext<TabsContextType | null>(null)

export function useTabsContext() {
   return useContext(TabsContext) as TabsContextType
}

function useInitTabsContext() {
   const [tabIndex, setTabIndex] = useState(0)

   return {
      tabIndex,
      setTabIndex: (index: number) => setTabIndex(index),
   }
}

export const Tabs = ({ children, className = '' }: TabsProps) => {
   const v = useInitTabsContext()

   return (
      <TabsContext.Provider value={v}>
         <div className={className}>{children}</div>
      </TabsContext.Provider>
   )
}
