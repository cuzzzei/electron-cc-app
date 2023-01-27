import { useState } from 'react'
import { useAppContext } from '/@/providers/app'
import { Table } from '/@/components/Table'
import { columns } from '../data/tableColumns'
import { AgentsFilter } from '/@/features/agents/components/AgentsFilter'
import { Agent } from '/@/types/Agent'

export const AgentsList = () => {
   const { agentsList } = useAppContext()
   const [name, setName] = useState('')
   const [specialty, setSpecialty] = useState('Todas')

   function filterAgent(agent: Agent): boolean {
      const nameValidation = agent
         .getName()
         .toString()
         .toLowerCase()
         .includes(name.toLowerCase())

      if (specialty === 'Todas') {
         return nameValidation
      }

      return nameValidation && agent.getSpecialty() === specialty
   }

   const filteredData = agentsList
      .filter((agent) => filterAgent(agent))
      .map((agent) => agent)

   return (
      <div className='d-flex flex-column mt-5 gap-5'>
         <h3>Agentes registrados</h3>

         <div className='container mt-5 px-2'>
            <AgentsFilter
               name={name}
               setName={(value) => setName(value)}
               specialty={specialty}
               setSpecialty={(value) => setSpecialty(value)}
            />

            <Table
               columns={columns}
               data={filteredData}
            />
         </div>
      </div>
   )
}
