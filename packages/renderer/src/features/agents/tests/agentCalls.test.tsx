import { Agent, AgentList } from '/@/features/agents'
import { AgentProfile } from '/@/features/agents/components/AgentProfile'
import { AppProvider } from '/@/providers/app'
import { CallList } from '/@/features/calls'
import { describe, expect, it } from 'vitest'
import { Name } from '/@/types/Name'
import { render, screen, fireEvent } from '@testing-library/react'
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
   const agent = agentList.getLastPosition()!.getValue()

   return (
      <>
         <AgentProfile agent={agent} />
      </>
   )
}

describe('Agent call history', () => {
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

   it('Should show the initial agent call history empty', () => {
      const tabButton = screen.getByText('Call history (0)')
      fireEvent.click(tabButton)

      const emptyLabel = screen.getByText('No calls received')
      expect(emptyLabel).toBeDefined()
   })
})
