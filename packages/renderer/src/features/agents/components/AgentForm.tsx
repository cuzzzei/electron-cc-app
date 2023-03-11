import * as yup from 'yup'
import { Form } from '/@/components/Form'
import { Input } from '/@/components/Input'
import { Select } from '/@/components/Select'
import { specialties, Specialty } from '/@/types/Specialty'

export interface AgentFormData {
   extension: string
   firstName: string
   lastName: string
   age: number
   overtime: number
   specialty: Specialty
   startTime: string
   endTime: string
}

interface AgentFormProps {
   id?: string
   onSubmit: (data: AgentFormData) => void
   defaultValues?: AgentFormData
}

const schema = yup
   .object({
      extension: yup.string().length(4).required(),
      firstName: yup.string().min(3).required(),
      lastName: yup.string().min(3).required(),
      age: yup.number().required(),
      overtime: yup.number().required(),
      specialty: yup.string().required(),
      startTime: yup.string().required(),
      endTime: yup.string().required(),
   })
   .required()

export const AgentForm = ({ id, onSubmit, defaultValues }: AgentFormProps) => {
   return (
      <Form<AgentFormData, typeof schema>
         id={id}
         defaultValues={{ specialty: specialties[0], ...defaultValues }}
         onSubmit={onSubmit}
         schema={schema}
      >
         {({ register, formState }) => (
            <>
               <div className='row g-4'>
                  <Input
                     label='Extension'
                     className='col-sm-6'
                     error={formState.errors['extension']}
                     registration={register('extension')}
                     required
                     size={4}
                  />

                  <Select
                     label='Specialty'
                     error={formState.errors['specialty']}
                     registration={register('specialty')}
                     className='col-sm-6'
                  >
                     {specialties.map((specialty) => (
                        <option
                           key={specialty}
                           value={specialty}
                        >
                           {specialty}
                        </option>
                     ))}
                  </Select>
               </div>

               <div className='row g-4'>
                  <Input
                     label='First name'
                     error={formState.errors['firstName']}
                     registration={register('firstName')}
                     className='col-sm-6'
                     required
                  />

                  <Input
                     label='Last name'
                     error={formState.errors['lastName']}
                     registration={register('lastName')}
                     className='col-sm-6'
                     required
                  />
               </div>

               <div className='row g-4'>
                  <Input
                     label='Age'
                     type='number'
                     error={formState.errors['age']}
                     registration={register('age')}
                     className='col-sm-3'
                     required
                  />

                  <Input
                     label='Overtime (hours)'
                     type='number'
                     error={formState.errors['overtime']}
                     registration={register('overtime')}
                     className='col-sm-9'
                     required
                  />
               </div>

               <div className='row g-4'>
                  <Input
                     label='Start time'
                     type='time'
                     error={formState.errors['startTime']}
                     registration={register('startTime')}
                     className='col-sm-6'
                     required
                  />

                  <Input
                     label='End time'
                     type='time'
                     error={formState.errors['endTime']}
                     registration={register('endTime')}
                     className='col-sm-6'
                     required
                  />
               </div>
            </>
         )}
      </Form>
   )
}
