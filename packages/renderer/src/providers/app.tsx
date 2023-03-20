import { Agent, AgentList } from '/@/features/agents'
import { CallList } from '/@/features/calls'
import { faker } from '@faker-js/faker'
import { HashRouter } from 'react-router-dom'
import { Name } from '/@/types/Name'
import { specialties } from '../features/agents/types/Specialty'
import { Time } from '/@/types/Time'
import { ToastProvider } from '/@/providers/ToastProvider'
import { useRender } from '/@/hooks'
import { v4 as uuid } from 'uuid'
import React, { createContext, useContext, useRef } from 'react'

interface AppContextType {
   agentList: AgentList
   render: () => void
}
const AppContext = createContext<AppContextType | null>(null)
export function useAppContext() {
   return useContext(AppContext) as AppContextType
}

export function useInitAppContext(initialValue?: AgentList) {
   const render = useRender()
   const agentList = useRef<AgentList>(initialValue ?? new AgentList())

   if (!agentList?.current) {
      agentList.current = new AgentList()
   }

   return {
      render,
      agentList: agentList.current,
   }
}

export const AppProvider = ({
   children,
   initialValues,
}: {
   children: React.ReactNode
   initialValues?: {
      agentList: AgentList
   }
}) => {
   const context = useInitAppContext(initialValues?.agentList)

   createRandomAgent()

   return (
      <HashRouter>
         <AppContext.Provider value={context}>
            <ToastProvider>{children}</ToastProvider>
         </AppContext.Provider>
      </HashRouter>
   )
}

function randomNumber(min: number, max: number): number {
   return faker.datatype.number({
      min,
      max,
   })
}

function randomTime(): [Time, Time] {
   const startHour = randomNumber(7, 12)
   const startMinute = faker.helpers.arrayElement([0, 15, 30, 45])

   const startTime = new Time(startHour, startMinute)
   const endTime = new Time(startHour + 7, startMinute)

   return [startTime, endTime]
}

function createRandomAgent(): Agent {
   const agent = new Agent()
   agent.setId(uuid())
   agent.setExtension(randomNumber(1111, 9999).toString())
   agent.setName(new Name(faker.name.firstName(), faker.name.lastName()))
   agent.setAge(randomNumber(18, 40))
   agent.setCallHistory(new CallList())
   agent.setOvertime(randomNumber(0, 3))
   agent.setSpecialty(faker.helpers.arrayElement(specialties))

   const [start, end] = randomTime()

   agent.setStartTime(start)
   agent.setEndTime(end)

   console.log(agent.toJSON())
   return agent
}
