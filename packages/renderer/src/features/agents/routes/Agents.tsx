import { CreateAgent } from '/@/features/agents/components/CreateAgent'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'
import { AgentList } from '/@/features/agents/components/AgentList'

export const Agents = () => {
   const { agentsList } = useAppContext()

   return (
      <div className='d-flex'>
         <div
            className='bg-light vh-100 p-5'
            style={{ width: '20%', overflowY: 'auto' }}
         >
            <div>
               <h3 className='fw-bold'>Agents</h3>
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
