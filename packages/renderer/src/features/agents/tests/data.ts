import { AgentList, Agent } from '/@/types/agent'
import { CallList } from '/@/types/call'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export function createAgentList(): AgentList {
   const list = new AgentList()
   let id = 0

   const agent1 = new Agent({
      id: (id++).toString(),
      name: new Name('Ronaldo', 'Nazario'),
      age: 22,
      callHistory: new CallList(),
      extension: '3333',
      startTime: new Time(7, 0),
      endTime: new Time(8, 50),
      overtime: 10,
      specialty: 'Desktop',
   })

   const agent2 = new Agent({
      id: (id++).toString(),
      name: new Name('Marco', 'Maidana'),
      age: 25,
      callHistory: new CallList(),
      extension: '4444',
      startTime: new Time(7, 0),
      endTime: new Time(9, 40),
      overtime: 11,
      specialty: 'Laptops',
   })

   const agent3 = new Agent({
      id: (id++).toString(),
      name: new Name('Manuel', 'Martinez'),
      age: 33,
      callHistory: new CallList(),
      extension: '5555',
      startTime: new Time(7, 0),
      endTime: new Time(15, 0),
      overtime: 13,
      specialty: 'Network',
   })

   const agent4 = new Agent({
      id: (id++).toString(),
      name: new Name('Maria', 'Morales'),
      age: 24,
      callHistory: new CallList(),
      extension: '6666',
      startTime: new Time(7, 0),
      endTime: new Time(15, 0),
      overtime: 13,
      specialty: 'Laptops',
   })

   const agent5 = new Agent({
      id: (id++).toString(),
      name: new Name('Daniela', 'Juarez'),
      age: 44,
      callHistory: new CallList(),
      extension: '7777',
      startTime: new Time(7, 0),
      endTime: new Time(16, 0),
      overtime: 10,
      specialty: 'Linux',
   })

   const agent6 = new Agent({
      id: (id++).toString(),
      name: new Name('Maria', 'Salazar'),
      age: 44,
      callHistory: new CallList(),
      extension: '8888',
      startTime: new Time(7, 0),
      endTime: new Time(16, 0),
      overtime: 10,
      specialty: 'Printers',
   })

   list.insertAtStart(agent1)
   list.insertAtStart(agent2)
   list.insertAtStart(agent3)
   list.insertAtStart(agent4)
   list.insertAtStart(agent5)
   list.insertAtStart(agent6)

   return list
}
