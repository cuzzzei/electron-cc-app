import { AgentList, Agent } from '/@/features/agents'
import { CallList } from '/@/features/calls'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export function createAgentList(): AgentList {
   const list = new AgentList()
   let id = 0

   const agent1 = new Agent({
      id: (id++).toString(),
      name: new Name('Gary', 'Andersen'),
      age: 22,
      callHistory: new CallList(),
      extension: '8329',
      startTime: new Time(7, 0),
      endTime: new Time(8, 50),
      overtime: 10,
      specialty: 'Desktop',
   })

   const agent2 = new Agent({
      id: (id++).toString(),
      name: new Name('Ricky', 'Berg'),
      age: 25,
      callHistory: new CallList(),
      extension: '2345',
      startTime: new Time(7, 0),
      endTime: new Time(9, 40),
      overtime: 11,
      specialty: 'Laptops',
   })

   const agent3 = new Agent({
      id: (id++).toString(),
      name: new Name('Preston', 'Gates'),
      age: 33,
      callHistory: new CallList(),
      extension: '5463',
      startTime: new Time(7, 0),
      endTime: new Time(15, 0),
      overtime: 13,
      specialty: 'Network',
   })

   const agent4 = new Agent({
      id: (id++).toString(),
      name: new Name('Salma', 'Howe'),
      age: 24,
      callHistory: new CallList(),
      extension: '9831',
      startTime: new Time(7, 0),
      endTime: new Time(15, 0),
      overtime: 13,
      specialty: 'Laptops',
   })

   const agent5 = new Agent({
      id: (id++).toString(),
      name: new Name('Georgiana', 'Carter'),
      age: 44,
      callHistory: new CallList(),
      extension: '2391',
      startTime: new Time(7, 0),
      endTime: new Time(16, 0),
      overtime: 10,
      specialty: 'Linux',
   })

   list.insertAtStart(agent1)
   list.insertAtStart(agent2)
   list.insertAtStart(agent3)
   list.insertAtStart(agent4)
   list.insertAtStart(agent5)

   return list
}
