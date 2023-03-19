import { Agent } from '/@/features/agents/routes/Agent'
import { Agents } from '/@/features/agents/routes/Agents'
import { AuxiliarFunctions } from '/@/features/aux/routes'
import { Landing } from '/@/features/misc'
import { MainLayout } from '/@/components/Layout'
import { Routes, Route } from 'react-router-dom'

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
            path='/aux'
            element={<AuxiliarFunctions />}
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
