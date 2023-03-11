import { Agent } from '/@/types/agent'
import { AgentDetails } from '../components/AgentDetails'
import { Avatar } from '/@/components/Avatar'
import { CallList } from '/@/features/calls/components/CallList'
import { Tabs, Tab, TabList, TabPanels } from '/@/components/Tabs'
import { UpdateAgent } from '/@/features/agents/components/UpdateAgent'

interface AgentProfileProps {
   agent: Agent
}

export function AgentProfile({ agent }: AgentProfileProps) {
   return (
      <div className='w-full h-100 d-flex flex-column gap-5'>
         <div className='d-flex gap-5 w-full h-25'>
            <Avatar
               seed={agent.getName().toString()}
               style={{ width: '15rem' }}
            />

            <div className='w-100 '>
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

         <Tabs
            style={{
               height: '70%',
            }}
         >
            <TabList>
               <Tab>Agent details</Tab>
               <Tab>{`Call history (${agent
                  .getCallHistory()
                  .getLength()})`}</Tab>
            </TabList>

            <TabPanels>
               <AgentDetails agent={agent} />
               <CallList callList={agent.getCallHistory()} />
            </TabPanels>
         </Tabs>
      </div>
   )
}
