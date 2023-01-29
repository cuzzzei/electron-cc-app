import { ReactElement } from 'react'
import { useTabsContext } from '/@/components/Tabs/Tabs'

interface TabPanelsProps {
   children: Array<ReactElement>
}

export const TabPanels = ({ children }: TabPanelsProps) => {
   const { tabIndex } = useTabsContext()

   return (
      <>
         {children.map((child, i) => {
            if (tabIndex === i) return child

            return null
         })}
      </>
   )
}
