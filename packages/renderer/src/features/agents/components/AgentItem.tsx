import { Agent } from '/@/types/Agent'

interface AgentItemProps {
   agent: Agent
}

export const AgentItem = ({ agent }: AgentItemProps) => {
   return (
      <tr key={agent.id}>
         <th scope='row'>
            <input
               className='form-check-input'
               type='checkbox'
            />
         </th>

         <td>{agent.extension}</td>
         <td>{agent.name}</td>
         <td>
            {agent.start} - {agent.finish}
         </td>
         <td>{agent.overtime}</td>
         <td>{agent.specialty}</td>
         <td>{agent.callsHistory.length}</td>
         <td>
            <div className='d-flex gap-1'>
               <div>
                  <button className='btn btn-dark'>
                     <i className='fa fa-phone' />
                  </button>
               </div>

               <div>
                  <button className='btn btn-primary'>
                     <i className='fa fa-pencil' />
                  </button>
               </div>

               <div>
                  <button className='btn btn-danger'>
                     <i className='fa fa-trash' />
                  </button>
               </div>
            </div>
         </td>
      </tr>
   )
}
