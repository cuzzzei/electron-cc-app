import { useEffect, useRef } from 'react'
import { AgentsList } from '/@/features/agents/components/AgentsList'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'
import { Call } from '/@/types/Call'
import { List } from '/@/types/List'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export const Main = () => {
   const { render, agentsList } = useAppContext()
   const renderRef = useRef(false)

   function handleAddAgent(p: Agent) {
      agentsList.add(p)
      render()
   }

   useEffect(() => {
      if (!renderRef.current) {
         const agent1 = new Agent({
            id: crypto.randomUUID(),
            name: new Name('Ronaldo', 'Nazario'),
            age: 22,
            callsHistory: new List<Call>(),
            extension: '333',
            start: new Time(7, 0),
            finish: new Time(8, 50),
            overtime: 10,
            specialty: 'de escritorio',
         })

         const agent2 = new Agent({
            id: crypto.randomUUID(),
            name: new Name('Marco "El Chino"', 'Maidana'),
            age: 25,
            callsHistory: new List<Call>(),
            extension: '444',
            start: new Time(7, 0),
            finish: new Time(9, 40),
            overtime: 11,
            specialty: 'portátiles',
         })

         handleAddAgent(agent1)
         handleAddAgent(agent2)
         renderRef.current = true
      }
   }, [])

   return (
      <div className='container text-center p-5'>
         <AgentsList />
      </div>
   )
}
