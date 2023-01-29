import { useTabsContext } from '/@/components/Tabs/Tabs'

export interface TabProps {
   index?: number
   children: string
}

export const Tab = ({ index, children }: TabProps) => {
   const { tabIndex, setTabIndex } = useTabsContext()

   return (
      <li
         className='nav-item'
         role='button'
         onClick={() => setTabIndex(index ?? 0)}
      >
         <p
            className={`nav-link ${
               index === tabIndex ? 'active' : 'text-muted'
            }`}
            aria-current='page'
         >
            {children}
         </p>
      </li>
   )
}
