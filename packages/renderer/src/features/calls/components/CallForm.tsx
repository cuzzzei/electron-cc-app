import * as yup from 'yup'
import { Form } from '/@/components/Form'
import { Input } from '/@/components/Input'

export interface CallFormData {
   clientFirstName: string
   clientLastName: string
   startTime: string
   finishTime: string
   description: string
}

interface CallFormProps {
   id?: string
   onSubmit: (data: CallFormData) => void
   defaultValues?: CallFormData
}

const schema = yup
   .object({
      clientFirstName: yup.string().min(4).required(),
      clientLastName: yup.string().min(4).required(),
   })
   .required()

export const CallForm = ({ id, onSubmit, defaultValues }: CallFormProps) => {
   return (
      <Form<CallFormData, typeof schema>
         id={id}
         defaultValues={{ ...defaultValues }}
         onSubmit={onSubmit}
         schema={schema}
      >
         {({ register, formState }) => {
            console.log(formState.errors)

            return (
               <>
                  <div className='row g-4'>
                     <h6>Client</h6>
                     <Input
                        label='First name'
                        className='col-sm-6'
                        error={formState.errors['clientFirstName']}
                        registration={register('clientFirstName')}
                        required
                     />

                     <Input
                        label='Last name'
                        className='col-sm-6'
                        error={formState.errors['clientLastName']}
                        registration={register('clientLastName')}
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
                        label='Finish time'
                        type='time'
                        error={formState.errors['finishTime']}
                        registration={register('finishTime')}
                        className='col-sm-6'
                        required
                     />
                  </div>

                  <Input
                     label='Description'
                     error={formState.errors['description']}
                     registration={register('description')}
                     textArea
                  />
               </>
            )
         }}
      </Form>
   )
}
