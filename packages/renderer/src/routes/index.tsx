import { Routes, Route } from 'react-router-dom'
import { Main } from '/@/features/misc'
import { Agent } from '/@/features/agents/routes/Agent'
import { Agents } from '/@/features/agents/routes/Agents'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path='/'
            element={<Main />}
         />

         <Route
            path='/agents'
            element={<Agents />}
         />

         <Route
            path='/agents/:id'
            element={<Agent />}
         />
      </Routes>
   )
}
