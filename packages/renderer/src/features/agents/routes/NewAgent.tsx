import { Link, useNavigate } from 'react-router-dom'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'
import { Name } from '/@/types/Name'
import { AgentList } from '/@/types/AgentList'
import { Time } from '/@/types/Time'

export const NewAgent = () => {
   const navigate = useNavigate()
   const { agentsList } = useAppContext()

   function addNewAgent(data: AgentFormData) {
      const [startHour, startMinute] = data.startTime
         .split(':')
         .map((s) => Number(s))
      const [finishHour, finishMinute] = data.finishTime
         .split(':')
         .map((s) => Number(s))

      const newAgent = new Agent({
         id: crypto.randomUUID(),
         age: data.age,
         name: new Name(data.firstName, data.lastName),
         extension: data.extension,
         callsHistory: new AgentList(),
         startTime: new Time(startHour, startMinute),
         finishTime: new Time(finishHour, finishMinute),
         overtime: data.overtime,
         specialty: data.specialty,
      })

      agentsList.insertAgent(newAgent)
      navigate('/agents')
   }

   return (
      <div>
         <h4>Create new agent</h4>

         <AgentForm
            onSubmit={addNewAgent}
            actions={
               <div className='row g-4'>
                  <Link
                     to='/agents'
                     className='col-6'
                  >
                     <button className='btn btn-light w-100'>Cancel</button>
                  </Link>

                  <button
                     className='btn btn-dark col-6'
                     type='submit'
                  >
                     Create agent
                  </button>
               </div>
            }
         />
      </div>
   )
}
