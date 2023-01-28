import { Link, useNavigate, useParams } from 'react-router-dom'
import {
   AgentForm,
   AgentFormData,
} from '/@/features/agents/components/AgentForm'
import { useAppContext } from '/@/providers/app'
import { Agent as AgentType } from '/@/types/Agent'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export const UpdateAgent = () => {
   const navigate = useNavigate()
   const { agentsList } = useAppContext()
   const { id } = useParams()
   const agent: AgentType | undefined = agentsList
      .findById(id ?? '')
      ?.getValue()

   function updateAgent(data: AgentFormData) {
      if (!agent) return

      const [startHour, startMinute] = data.startTime
         .split(':')
         .map((s) => Number(s))
      const [finishHour, finishMinute] = data.finishTime
         .split(':')
         .map((s) => Number(s))

      agent.setAge(data.age)
      agent.setName(new Name(data.firstName, data.lastName))
      agent.setExtension(data.extension)
      //agent.setCallsHistory(data.callsHistory)
      agent.setStartTime(new Time(startHour, startMinute))
      agent.setFinishTime(new Time(finishHour, finishMinute))
      agent.setOvertime(data.overtime)
      agent.setSpecialty(data.specialty)

      navigate('/agents/')
   }

   if (!agent) return null

   const defaultValues = {
      age: agent.getAge(),
      extension: agent.getExtension(),
      finishTime: agent.getFinishTime().toString(),
      startTime: agent.getStartTime().toString(),
      firstName: agent.getName().getFirst(),
      lastName: agent.getName().getLast(),
      overtime: agent.getOvertime(),
      specialty: agent.getSpecialty(),
   }

   return (
      <div>
         <h4>Edit agent {agent.getName().toString()}</h4>

         <AgentForm
            onSubmit={updateAgent}
            defaultValues={defaultValues}
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
                     Save
                  </button>
               </div>
            }
         />
      </div>
   )
}
