import { NavLink } from 'react-router-dom'
import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/solid'

interface MainLayoutProps {
   children: React.ReactNode
}

const navigation = [
   {
      path: '/',
      icon: <HomeIcon style={{ width: '25px' }} />,
   },
   {
      path: '/agents',
      icon: <UserCircleIcon style={{ width: '25px' }} />,
   },
]

export const MainLayout = ({ children }: MainLayoutProps) => {
   return (
      <div className='w-100 vh-100 d-flex overflow-hidden'>
         <nav className='bg-dark d-flex flex-column align-items-center p-4 gap-4 pt-5'>
            {navigation.map((nav) => (
               <NavLink
                  key={nav.path}
                  to={nav.path}
                  className={({ isActive }) =>
                     isActive ? 'text-white' : 'text-muted'
                  }
               >
                  {nav.icon}
               </NavLink>
            ))}
         </nav>

         <main className='w-100'>{children}</main>
      </div>
   )
}
