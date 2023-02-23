import { createContext, useContext, useState } from 'react'
import styled from 'styled-components'

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

const Container = styled.div`
   display: grid;
   grid-template-rows: min-content 1fr;
`

export const Tabs = ({ children, className, style }: TabsProps) => {
   const v = useInitTabsContext()

   return (
      <TabsContext.Provider value={v}>
         <Container
            className={`${className}`}
            style={style}
         >
            {children}
         </Container>
      </TabsContext.Provider>
   )
}
