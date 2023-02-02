import { AgentList } from '/@/features/agents/components/AgentList'
import { AgentsSettings } from '../components/AgentsSettings'
import { CreateAgent } from '/@/features/agents/components/CreateAgent'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'

export const Agents = () => {
   const { agentsList } = useAppContext()

   return (
      <div className='d-flex'>
         <div
            className='bg-light vh-100 p-5'
            style={{ width: '20%', overflowY: 'auto' }}
         >
            <div className='w-100 d-flex justify-content-between'>
               <h3 className='fw-bold'>Agents</h3>

               <AgentsSettings />
            </div>

            <hr />
            <CreateAgent />

            <AgentList agentList={agentsList} />
         </div>

         <div
            className='p-5'
            style={{ width: '80%' }}
         >
            <Outlet />
         </div>
      </div>
   )
}
