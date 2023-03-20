import { Agent } from '/@/features/agents'
import { AgentList } from '/@/features/agents/components/AgentList'
import { AgentsSettings } from '../components/AgentsSettings'
import { CreateAgent } from '/@/features/agents/components/CreateAgent'
import { NameFilter, SpecialtyFilter } from '../components/AgentsFilters'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'
import { useState } from 'react'

export type Filter = null | ((agent: Agent) => boolean)

export const Agents = () => {
   const { agentList } = useAppContext()
   const [filters, setFilters] = useState<Record<string, Filter>>({
      name: null,
      specialty: null,
   })

   function handleChangeFilter(key: string, value: Filter) {
      setFilters((f) => ({ ...f, [key]: value }))
   }

   let matches = agentList
   const filtersToAply = Object.values(filters).filter(Boolean)

   for (const filter of filtersToAply) {
      matches = matches.filter(filter!)
   }

   return (
      <div className='d-flex h-100'>
         <div
            className='py-4 md:py-5'
            style={{ width: '20%', minWidth: '400px', overflowY: 'auto' }}
         >
            <div className='px-4 md:px-5'>
               <div className='w-100 d-flex justify-content-between'>
                  <h3 className='fw-bold'>Agents ({matches.getLength()})</h3>

                  <AgentsSettings />
               </div>

               <hr />

               <div className='mb-2 d-flex align-items-center gap-2'>
                  <NameFilter handleChange={handleChangeFilter} />
                  <SpecialtyFilter handleChange={handleChangeFilter} />
               </div>
               <CreateAgent />
            </div>

            {matches.isEmpty() ? (
               <div className='d-flex w-100 justify-content-center mt-5'>
                  <h6 className='m-auto'>Agents not found</h6>
               </div>
            ) : (
               <AgentList agentList={matches} />
            )}
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
