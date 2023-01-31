import { Agent as AgentType } from '/@/types/Agent'
import { AgentDetails } from '../components/AgentDetails'
import { Avatar } from '/@/components/Avatar'
import { Tabs, Tab, TabList, TabPanels } from '/@/components/Tabs'
import { useAppContext } from '/@/providers/app'
import { useParams } from 'react-router-dom'
import { CallList } from '/@/features/calls/components/CallList'
import { UpdateAgent } from '/@/features/agents/components/UpdateAgent'

export const Agent = () => {
   const { agentsList } = useAppContext()
   const { id } = useParams()
   const agent: AgentType | undefined = agentsList
      .findById(id ?? '')
      ?.getValue()

   if (!agent) return null

   return (
      <div
         key={id}
         className='w-full animate__animated animate__fadeIn'
      >
         <div className='d-flex gap-5 w-full'>
            <Avatar
               seed={agent.getName().toString()}
               style={{ width: '20rem' }}
            />

            <div className='w-100'>
               <div className='d-flex justify-content-between'>
                  <h1
                     className='mt-5 fw-bold'
                     style={{ fontSize: '3.5rem' }}
                  >
                     {agent.getName().toString()}
                  </h1>

                  <UpdateAgent agent={agent} />
               </div>

               <p className='fs-5 mb-0'>{agent.getSpecialty()}</p>

               <p className='text-muted'>
                  (801)-345-6789 ext. {agent.getExtension()}
               </p>
            </div>
         </div>

         <Tabs>
            <TabList>
               <Tab>Agent details</Tab>
               <Tab>Call history</Tab>
            </TabList>

            <TabPanels>
               <AgentDetails agent={agent} />
               <CallList callList={agent.getCallsHistory()} />
            </TabPanels>
         </Tabs>
      </div>
   )
}
