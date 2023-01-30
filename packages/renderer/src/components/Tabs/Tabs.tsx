import { createContext, useContext, useEffect, useState } from 'react'
import { Tab } from '/@/components/Tabs/Tab'

interface TabsProps {
   children: Array<React.ReactElement>
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

export const Tabs = ({ children }: TabsProps) => {
   const v = useInitTabsContext()

   return <TabsContext.Provider value={v}>{children}</TabsContext.Provider>
}
