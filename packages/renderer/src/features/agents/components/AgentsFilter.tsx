import { specialities } from '/@/types/Specialty'

interface AgentsFilterProps {
   name: string
   setName: (value: string) => void
   specialty: string
   setSpecialty: (value: string) => void
}

export const AgentsFilter = ({
   name,
   setName,
   specialty,
   setSpecialty,
}: AgentsFilterProps) => {
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
