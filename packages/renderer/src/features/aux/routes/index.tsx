import { Agent, AgentJSON } from '/@/features/agents'
import { Button } from '/@/components/Button'
import { Form } from '/@/components/Form'
import { Input } from '/@/components/Input'
import { MainLayout } from '/@/components/Layout'
import { useAppContext } from '/@/providers/app'
import { useToast } from '/@/hooks/useToast'
import * as yup from 'yup'

interface Values {
   jsonInput: string
}

const schema = yup.object().shape({
   jsonInput: yup.string().required('JSON input required'),
})

export function AuxiliarFunctions() {
   const { agentList, render } = useAppContext()
   const toast = useToast()

   function fillStore(agents: Array<AgentJSON>) {
      agents.forEach((agent) => {
         try {
            const newAgent = Agent.fromJSON(agent)
            agentList.insertAtEnd(newAgent)
         } catch (err) {
            if (err instanceof Error) {
               toast({
                  title: err.message,
                  status: 'error',
               })
            }
         }
      })

      render()
      toast({
         title: 'Data inserted successfully',
         status: 'success',
      })
   }

   function onSubmit(data: Values) {
      try {
         const json = JSON.parse(data.jsonInput)

         if (!json.agents) {
            throw new Error()
         }

         const agents: Array<AgentJSON> = json.agents
         fillStore(agents)
      } catch (err) {
         toast({
            title: 'Error parsing JSON',
            status: 'error',
         })
      }
   }

   return (
      <MainLayout>
         <div className='p-5'>
            <h3>Fill Data with JSON</h3>

            <Form<Values, typeof schema>
               onSubmit={onSubmit}
               schema={schema}
            >
               {({ formState, register }) => (
                  <>
                     <Input
                        textArea
                        label='Fill Data with JSON'
                        className='col-3'
                        error={formState.errors['jsonInput']}
                        registration={register('jsonInput')}
                        helperText='Data will be added at end of the list'
                     />

                     <Button
                        className='col-3'
                        type='submit'
                     >
                        Save
                     </Button>
                  </>
               )}
            </Form>
         </div>
      </MainLayout>
   )
}
