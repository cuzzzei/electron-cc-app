import { Routes, Route } from 'react-router-dom'
import { Main } from '/@/features/misc'
import { Agent } from '/@/features/agents/routes/Agent'
import { NewAgent } from '/@/features/agents/routes/NewAgent'
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
         >
            <Route
               path='new'
               element={<NewAgent />}
            />

            <Route
               path='view/:id'
               element={<Agent />}
            />
         </Route>
      </Routes>
   )
}
