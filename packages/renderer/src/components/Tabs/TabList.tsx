import { ReactElement } from 'react'
import { TabProps, Tab } from './Tab'

interface TabListProps {
   children: Array<ReactElement<TabProps>>
}

export const TabList = ({ children: Tabs }: TabListProps) => {
   return (
      <ul className='nav nav-tabs mt-5'>
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
