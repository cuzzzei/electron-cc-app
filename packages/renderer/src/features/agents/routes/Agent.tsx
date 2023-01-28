import { Agent as AgentType } from '/@/types/Agent'
import { AgentDetails } from '../components/AgentDetails'
import { useAppContext } from '/@/providers/app'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const Agent = () => {
   const [tabIndex, setTabIndex] = useState(1)
   const { agentsList } = useAppContext()
   const { id } = useParams()
   const agent: AgentType | undefined = agentsList
      .findById(id ?? '')
      ?.getValue()

   if (!agent) return null

   return (
      <div className='w-full'>
         <div className='d-flex gap-5'>
            <img
               src={`https://api.dicebear.com/5.x/thumbs/svg?seed=${agent
                  .getName()
                  .toString()}`}
               alt='avatar'
               style={{ width: '20rem' }}
            />

            <div>
               <h1
                  className='mt-5 fw-bold'
                  style={{ fontSize: '3.5rem' }}
               >
                  {agent.getName().toString()}
               </h1>

               <p className='fs-5 mb-0'>{agent.getSpecialty()}</p>

               <p className='text-muted'>
                  (801)-345-6789 ext. {agent.getExtension()}
               </p>
            </div>
         </div>

         <ul className='nav nav-tabs mt-5'>
            <li
               className='nav-item'
               role='button'
               onClick={() => setTabIndex(1)}
            >
               <p
                  className={`nav-link ${
                     tabIndex === 1 ? 'active' : 'text-muted'
                  }`}
                  aria-current='page'
               >
                  Agent details
               </p>
            </li>

            <li
               className='nav-item'
               role='button'
               onClick={() => setTabIndex(2)}
            >
               <p
                  className={`nav-link ${
                     tabIndex === 2 ? 'active' : 'text-muted'
                  }`}
               >
                  Call history
               </p>
            </li>
         </ul>

         {tabIndex === 1 && <AgentDetails agent={agent} />}
         {/*{tabIndex === 2 && <CallHistory />}*/}
      </div>
   )
}
