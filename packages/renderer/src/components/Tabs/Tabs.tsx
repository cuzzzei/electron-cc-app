import { createContext, useContext, useState } from 'react'

interface TabsProps {
   children: Array<React.ReactElement>
   className?: string
   style?: React.CSSProperties
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

export const Tabs = ({ children, className, style }: TabsProps) => {
   const v = useInitTabsContext()

   return (
      <TabsContext.Provider value={v}>
         <div
            className={`${className}`}
            style={{
               display: 'grid',
               gridTemplateRows: 'min-content 1fr',
               ...style,
            }}
         >
            {children}
         </div>
      </TabsContext.Provider>
   )
}
