import { Agent, AgentList, specialties } from '/@/features/agents'
import { Call, CallList } from '/@/features/calls'
import { faker } from '@faker-js/faker'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'
import { v4 as uuid } from 'uuid'

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

function createRandomCall(start: Time, end: Time): Call {
   const call = new Call()
   call.setId(uuid())
   call.setClientName(new Name(faker.name.firstName(), faker.name.lastName()))

   call.setStartTime(
      new Time(
         randomNumber(start.getHour(), end.getHour() - 1),
         randomNumber(0, 50)
      )
   )
   call.setDuration(new Time(0, randomNumber(1, 25)))

   return call
}

export function createRandomAgent(): Agent {
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

   for (let i = 0; i < 10; i++) {
      agent
         .getCallHistory()
         .insertOrdered(
            createRandomCall(agent.getStartTime(), agent.getEndTime()),
            Call.compareByStartTime
         )
   }

   return agent
}

export function createAgentList() {
   const list = new AgentList()
   const NUM_AGENTS = 400

   for (let i = 0; i < NUM_AGENTS; i++) {
      const newagent = createRandomAgent()
      list.insertAtEnd(newagent)
   }


   return list
}
