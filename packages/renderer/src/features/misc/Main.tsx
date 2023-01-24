import { useEffect, useState } from 'react'
import { AgentsList } from '/@/features/agents/components/AgentsList'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'

function AgentForm({ onSubmit }: { onSubmit: (p: Agent) => void }) {
   const [name, setName] = useState('')

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      const newAgent = new Agent({
         id: crypto.randomUUID(),
         name,
         age: 30,
         specialty: 'servidores',
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

   useEffect(() => {
      handleAddAgent(
         new Agent({
            id: crypto.randomUUID(),
            age: 22,
            name: 'Ronaldo Nazario',
            specialty: 'impresoras',
         })
      )

      handleAddAgent(
         new Agent({
            id: crypto.randomUUID(),
            age: 23,
            name: 'Franklin Rousevelt',
            specialty: 'servidores',
         })
      )
   }, [])

   return (
      <div className='container text-center p-5'>
         <AgentsList />
      </div>
   )
}
