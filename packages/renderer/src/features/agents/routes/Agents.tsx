import { AgentList } from '/@/features/agents/components/AgentList'
import { AgentsSettings } from '../components/AgentsSettings'
import { CreateAgent } from '/@/features/agents/components/CreateAgent'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'
import { AgentsFilter } from '../components/AgentsFilter'
import { useState } from 'react'
import { Agent } from '/@/types/agent'

export const Agents = () => {
   const { agentList } = useAppContext()
   const [name, setName] = useState('')
   const [specialty, setSpecialty] = useState('All')

   function filterAgent(agent: Agent) {
      const nameCondition = agent.getName().toString().toLowerCase().includes(name.toLocaleLowerCase())

      if (specialty === 'All')
         return nameCondition

      return nameCondition && agent.getSpecialty() === specialty
   }

   // TODO: bug, filter agents reverse list
   const filteredAgentList = agentList.filter(filterAgent)

   return (
      <div className='d-flex h-100'>
         <div
            className='bg-light p-4 md:p-5'
            style={{ width: '20%', overflowY: 'auto' }}
         >
            <div className='w-100 d-flex justify-content-between'>
               <h3 className='fw-bold'>Agents</h3>

               <AgentsSettings />
            </div>

            <hr />
            <AgentsFilter
               specialty={specialty}
               setSpecialty={setSpecialty}
               name={name}
               setName={setName}
            />
            <CreateAgent />

            {
               filteredAgentList.length === 0 ?
                  <h6>Not found</h6>
                  : <AgentList agentList={filteredAgentList} />
            }

         </div>

         <div
            className='p-4 md:p-5'
            style={{ width: '80%' }}
         >
            <Outlet />
         </div>
      </div>
   )
}
