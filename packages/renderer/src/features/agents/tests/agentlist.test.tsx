import { AgentList } from '/@/features/agents/components/AgentList'
import { AppProvider, useAppContext } from '/@/providers/app'
import { CreateAgent } from '/@/features/agents/components/CreateAgent'
import { createAgentList } from './data'
import { describe, expect, test } from 'vitest'
import { fillInput } from '/@/testUtils'
import { render, fireEvent } from '@testing-library/react'
import { screen, waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
const user = userEvent.setup()

function App() {
   const { agentList } = useAppContext()

   return (
      <>
         <CreateAgent />
         <AgentList agentList={agentList} />
      </>
   )
}

describe('Agent List', () => {
   const initialList = createAgentList()

   render(
      <AppProvider initialValues={{ agentList: initialList }}>
         <App />
      </AppProvider>
   )

   test('Should render initial agents', () => {
      initialList.toArray().forEach((agent) => {
         const name = agent.getName().toString()
         expect(screen.getByText(name)).toBeDefined()
      })
   })

   test('Should fill agent form fields', async () => {
      const triggerButton = screen.getByText('Add new')
      fireEvent.click(triggerButton)

      const inputs = [
         ['Extension', '1234'],
         ['First name', 'John'],
         ['Last name', 'Doe'],
         ['Age', '33'],
         ['Overtime (hours)', '1'],
         ['Start time', '07:30'],
         ['End time', '13:30'],
      ]

      for (let i = 0; i < inputs.length; i++) {
         const [label, value] = inputs[i]
         const filledInput = await fillInput(label, value, user)

         // @ts-ignore
         expect(filledInput.value).toBe(value)
      }
   })

   test('Should create new agent', async () => {
      const input = screen.getByText('Extension')
      fireEvent.submit(input)

      const newAgent = await waitFor(() => screen.getByText('John Doe'))
      expect(newAgent).toBeDefined()
   })

   test('Should delete agent', async () => {
      const name = 'John Doe'

      const modalButton = screen.getByRole('button', {
         name: `Delete agent ${name}`,
      })
      fireEvent.click(modalButton)

      const confirmButton = screen.getByRole('button', {
         name: 'Yes, delete agent',
      })
      fireEvent.click(confirmButton)

      expect(screen.queryByText('John Doe')).toBeNull()
   })
})
