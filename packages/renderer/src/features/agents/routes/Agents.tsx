import { Outlet, useNavigate } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'

export const Agents = () => {
   const navigate = useNavigate()
   const { agentsList } = useAppContext()

   return (
      <div className='d-flex'>
         <div
            className='bg-light vh-100 p-5'
            style={{ width: '20%', overflowY: 'scroll' }}
         >
            <div>
               <h3 className='fw-bold'>Agents</h3>
            </div>

            <hr />
            <button className='btn btn-dark w-100'>Add new</button>

            <ul className='list-unstyled'>
               {agentsList.myMAP((agent) => (
                  <li
                     key={agent.getId()}
                     className='py-4 d-flex gap-4 align-items-center'
                     role='button'
                     onClick={() => navigate('/agents/view/' + agent.getId())}
                  >
                     <img
                        src={`https://api.dicebear.com/5.x/thumbs/svg?seed=${agent
                           .getName()
                           .toString()}`}
                        alt='avatar'
                        className='rounded-circle'
                        style={{ width: '5rem' }}
                     />

                     <div className='d-flex flex-column'>
                        <p className='fw-bold fs-5 mb-1'>
                           {agent.getName().toString()}
                        </p>
                        <p className='mb-0'>{agent.getSpecialty()}</p>
                        <p className='text-muted mb-0'>
                           #{agent.getExtension()}
                        </p>
                     </div>
                  </li>
               ))}
            </ul>
         </div>

         <div
            className='p-5'
            style={{ width: '80%' }}
         >
            <Outlet />
         </div>
      </div>
   )
}