import { specialties } from '/@/types/Specialty'
import { useState } from 'react'
import { Filter } from '/@/features/agents/routes/Agents'

interface AgentsFilterProps {
   handleChange: (key: string, filter: Filter) => void
}

export const NameFilter = ({ handleChange }: AgentsFilterProps) => {
   const [name, setName] = useState('')

   function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      const newValue = e.target.value
      setName(newValue)

      if (newValue !== '') {
         handleChange('name', (agent) =>
            agent
               .getName()
               .toString()
               .toLowerCase()
               .includes(newValue.toLowerCase())
         )
      } else {
         handleChange('name', null)
      }
   }

   return (
      <div className='position-relative w-100'>
         <input
            className='form-control w-100'
            placeholder='Search by name...'
            value={name}
            onChange={onChange}
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
   )
}

export const SpecialtyFilter = ({ handleChange }: AgentsFilterProps) => {
   const [specialty, setSpecialty] = useState('All')

   function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
      const newValue = e.target.value
      setSpecialty(newValue)

      if (newValue !== 'All') {
         handleChange('specialty', (agent) => agent.getSpecialty() === newValue)
      } else {
         handleChange('specialty', null)
      }
   }

   return (
      <div className='d-flex gap-2'>
         <select
            className='form-select'
            aria-label='Default select example'
            value={specialty}
            onChange={onChange}
         >
            {['All', ...specialties].map((speciality) => (
               <option
                  key={speciality}
                  value={speciality}
               >
                  {speciality}
               </option>
            ))}
         </select>
      </div>
   )
}
