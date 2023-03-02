import { ReactElement } from 'react'
import { TabProps, Tab } from './Tab'

interface TabListProps {
   children: Array<ReactElement<TabProps>>
   className?: string
}

export const TabList = ({ children: Tabs, className = '' }: TabListProps) => {
   return (
      <ul className={`nav nav-tabs ${className}`}>
         {Tabs.map((tab, i) => (
            <Tab
               key={i}
               index={i}
               {...tab.props}
            />
         ))}
      </ul>
   )
}
