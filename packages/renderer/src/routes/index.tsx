import { Routes, Route } from 'react-router-dom'
import { Landing } from '/@/features/misc'
import { Agent } from '/@/features/agents/routes/Agent'
import { Agents } from '/@/features/agents/routes/Agents'
import { MainLayout } from '/@/components/Layout'

const Main = () => (
   <MainLayout>
      <Agents />
   </MainLayout>
)

export const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path='/'
            element={<Landing />}
         />

         <Route
            path='/agents'
            element={<Main />}
         >
            <Route
               path='view/:id'
               element={<Agent />}
            />
         </Route>
      </Routes>
   )
}
