import { useState } from 'react'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'
import { Call } from '/@/types/Call'
import './styles.css'

function AgentForm({ onSubmit }: { onSubmit: (p: Agent) => void }) {
   const [name, setName] = useState('')

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      const newAgent = new Agent({
         id: crypto.randomUUID(),
         name,
         age: 30,
      })

      onSubmit(newAgent)
      setName('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
         />

         <button type='submit'>Add agent</button>
      </form>
   )
}

export const Main = () => {
   const ctx = useAppContext()

   function handleAddAgent(p: Agent) {
      ctx.agentsList.add(p)
      ctx.render()
   }

   function handleAddCall(agentId: string) {
      const newCall: Call = {
         id: crypto.randomUUID(),
         clientName: 'Nuevo cliente',
         description: 'Lorem Ipsum',
         start: '07:00',
         finish: '09:00',
      }

      const foundAgent = ctx.agentsList.findById(agentId)
      if (!foundAgent) return

      foundAgent.value.callsHistory.add(newCall)
      ctx.render()
   }

   return (
      <div className='_main'>
         <h2>Bienvenido al sistema de registro CALL CENTER </h2>
         <AgentForm onSubmit={handleAddAgent} />

         {ctx.agentsList.map((agent) => (
            <div
               key={agent.id}
               className='agent-item'
            >
               <p>Nombre: {agent.name}</p>
               <p>Edad {agent.age}</p>
               <button onClick={() => handleAddCall(agent.id)}>
                  Agregar llamada
               </button>

               <hr />
               <p>Total de llamadas: {agent.callsHistory.length}</p>
               {agent.callsHistory?.map((call) => (
                  <div key={call.id}>
                     <p>
                        {call.id} {call.start} -- {call.finish}{' '}
                     </p>
                     <p>Cliente: {call.clientName}</p>
                     <p>Descripción: {call.description} </p>
                  </div>
               ))}
            </div>
         ))}
      </div>
   )
}
