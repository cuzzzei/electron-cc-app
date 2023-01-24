import { specialities } from '/@/types/Specialty'

interface FilterProps {
   name: string
   setName: (value: string) => void
   specialty: string
   setSpecialty: (value: string) => void
}

export const Filter = ({
   name,
   setName,
   specialty,
   setSpecialty,
}: FilterProps) => {
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

         <div>
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
         </div>
      </div>
   )
}
