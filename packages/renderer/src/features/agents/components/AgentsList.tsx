import { useAppContext } from '/@/providers/app'
import { AgentItem } from './AgentItem'
import { specialities } from '/@/types/Specialty'
import { useState } from 'react'
import { Agent } from '/@/types/Agent'

interface FilterProps {
   name: string
   setName: (value: string) => void
   specialty: string
   setSpecialty: (value: string) => void
}

const Filter = ({ name, setName, specialty, setSpecialty }: FilterProps) => {
   return (
      <div className='mb-2 d-flex justify-content-between align-items-center'>
         <div className='position-relative'>
            <input
               className='form-control w-100'
               placeholder='Search by name...'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <span
               className='position-absolute search'
               style={{
                  top: '6px',
                  right: '15px',
               }}
            >
               <i className='fa fa-search'></i>
            </span>
         </div>

         <div className='d-flex gap-2'>
            <select
               className='form-select'
               aria-label='Default select example'
               value={specialty}
               onChange={(e) => setSpecialty(e.target.value)}
            >
               {['Todas', ...specialities].map((speciality) => (
                  <option
                     key={speciality}
                     value={speciality}
                  >
                     {speciality}
                  </option>
               ))}
            </select>

            <div>
               <button className='btn btn-success'>
                  <i className='fa fa-user-plus' />
               </button>
            </div>

            <div>
               <button className='btn btn-danger'>
                  <i className='fa fa-trash' />
               </button>
            </div>
         </div>
      </div>
   )
}

export const AgentsList = () => {
   const ctx = useAppContext()
   const [name, setName] = useState('')
   const [specialty, setSpecialty] = useState('Todas')

   function filterAgent(agent: Agent): boolean {
      const nameValidation = agent.name
         .toLowerCase()
         .includes(name.toLowerCase())

      if (specialty === 'Todas') {
         return nameValidation
      }

      return nameValidation && agent.specialty === specialty
   }

   return (
      <div className='d-flex flex-column mt-5 gap-5'>
         <h3>Agentes registrados</h3>

         <div className='container mt-5 px-2'>
            <Filter
               name={name}
               setName={(value) => setName(value)}
               specialty={specialty}
               setSpecialty={(value) => setSpecialty(value)}
            />

            <div className='card'>
               <div className='card-body'>
                  <div className='table-responsive'>
                     <table className='table table-responsive table-borderless table-hover align-middle'>
                        <thead>
                           <tr className='bg-light'>
                              <th scope='col'>
                                 <input
                                    className='form-check-input'
                                    type='checkbox'
                                 />
                              </th>

                              <th scope='col'>Extensión</th>
                              <th scope='col'>Nombre</th>
                              <th scope='col'>Horario</th>
                              <th scope='col'>Horas extras trabajadas</th>
                              <th scope='col'>Especialidad</th>
                              <th scope='col'>Llamadas</th>
                              <th scope='col'></th>
                           </tr>
                        </thead>

                        <tbody>
                           {ctx.agentsList
                              .filter((agent) => filterAgent(agent))
                              .map((agent) => (
                                 <AgentItem
                                    agent={agent}
                                    key={agent.id}
                                 />
                              ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
