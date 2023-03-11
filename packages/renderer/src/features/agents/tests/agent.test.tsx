import { Agent } from '/@/types/agent'
import { AgentList } from '/@/types/agent'
import { AgentProfile } from '/@/features/agents/components/AgentProfile'
import { AppProvider } from '/@/providers/app'
import { CallList } from '/@/types/call'
import { describe, expect, it } from 'vitest'
import { Name } from '/@/types/Name'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Time } from '/@/types/Time'
import { useAppContext } from '/@/providers/app'

const agent = new Agent({
   id: '1',
   extension: '1234',
   name: new Name('Marco', 'Docker'),
   overtime: 1,
   specialty: 'Servers',
   age: 33,
   callHistory: new CallList(),
   startTime: new Time(7, 30),
   endTime: new Time(13, 30),
})

function App() {
   const { agentList } = useAppContext()
   const agent = agentList.getFirstPosition()!.getValue()

   return (
      <>
         <AgentProfile agent={agent} />
      </>
   )
}

describe('Agent profile', () => {
   const agentList = new AgentList()
   agentList.insertAtEnd(agent)
   render(
      <AppProvider
         initialValues={{
            agentList,
         }}
      >
         <App />
      </AppProvider>
   )

   it('Should show the agent name', () => {
      const nameLabels = screen.getAllByText(agent.getName().toString())
      expect(nameLabels.length).toBeGreaterThanOrEqual(2)
   })

   it('Should show the agent specialty', () => {
      const specialtyLabels = screen.getAllByText(agent.getSpecialty())
      expect(specialtyLabels.length).toBeGreaterThanOrEqual(1)
   })

   it('Should show the agent overtime', () => {
      const overtimeLabels = screen.getAllByText(
         `${agent.getOvertime()} extra hours`
      )
      expect(overtimeLabels.length).toBeGreaterThanOrEqual(1)
   })

   it('Should show the edit agent modal', () => {
      const triggerButton = screen.getByRole('button', {
         name: 'Edit agent profile',
      })
      fireEvent.click(triggerButton)
      expect(screen.getAllByText('Agent profile')).toBeDefined()
   })

   const newLastname = 'Gonzalez'
   const newExtension = '8888'
   const newAge = '22'
   const newOvertime = '2'

   it('Should change the agent form values', async () => {
      const fields = [
         ['Extension', newExtension],
         ['Last name', newLastname],
         ['Age', newAge],
         ['Overtime (hours)', newOvertime],
      ]

      for (let i = 0; i < fields.length; i++) {
         const [label, newValue] = fields[i]
         const input = screen.getByLabelText(label)
         fireEvent.change(input, { target: { value: newValue } })

         // @ts-ignore
         expect(input.value).toEqual(newValue)
      }
   })

   it('Should save the agent new values', async () => {
      const input = screen.getByText('Extension')
      await waitFor(() => fireEvent.submit(input))
      // Should close the modal
      expect(screen.queryByRole('button', { name: 'Save' })).toBeNull()

      // and show the new values
      const newName = `${agent.getName().getFirst()} ${newLastname}`
      const nameLabel = screen.getAllByText(newName)
      expect(nameLabel).toBeDefined()

      const extLabel = screen.queryByText(`ext. ${newExtension}`)
      expect(extLabel).toBeDefined()

      const ageLabel = screen.getByText(`${newAge} years old`)
      expect(ageLabel).toBeDefined()

      const ovLabel = screen.getByText(`${newOvertime} extra hours`)
      expect(ovLabel).toBeDefined()
   })
})
