import { Routes, Route } from 'react-router-dom'
import { Main } from '/@/features/misc'
import { UpdateAgent } from '../features/agents/routes/UpdateAgent'
import { Agents } from '/@/features/agents/routes/Agents'
import { NewAgent } from '/@/features/agents/routes/NewAgent'

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
            path='/agents/new'
            element={<NewAgent />}
         />

         <Route
            path='/agents/:id'
            element={<UpdateAgent />}
         />
      </Routes>
   )
}
