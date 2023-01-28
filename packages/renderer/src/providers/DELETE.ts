import { Agent } from '/@/types/Agent'
import { AgentList } from '/@/types/AgentList'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export function fill(list: AgentList, render: () => void) {
   const agent1 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Ronaldo', 'Nazario'),
      age: 22,
      callsHistory: new AgentList(),
      extension: '333',
      start: new Time(7, 0),
      finish: new Time(8, 50),
      overtime: 10,
      specialty: 'de escritorio',
   })

   const agent2 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Marco "El Chino"', 'Maidana'),
      age: 25,
      callsHistory: new AgentList(),
      extension: '444',
      start: new Time(7, 0),
      finish: new Time(9, 40),
      overtime: 11,
      specialty: 'portátiles',
   })

   const agent3 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Manuel', 'Martinez'),
      age: 33,
      callsHistory: new AgentList(),
      extension: '555',
      start: new Time(7, 0),
      finish: new Time(15, 0),
      overtime: 13,
      specialty: 'redes',
   })

   const agent4 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Maria', 'Morales'),
      age: 24,
      callsHistory: new AgentList(),
      extension: '666',
      start: new Time(7, 0),
      finish: new Time(15, 0),
      overtime: 13,
      specialty: 'portátiles',
   })

   const agent5 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Daniela', 'Juarez'),
      age: 44,
      callsHistory: new AgentList(),
      extension: '555',
      start: new Time(7, 0),
      finish: new Time(16, 0),
      overtime: 10,
      specialty: 'linux',
   })

   const agent6 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Maria', 'Salazar'),
      age: 44,
      callsHistory: new AgentList(),
      extension: '777',
      start: new Time(7, 0),
      finish: new Time(16, 0),
      overtime: 10,
      specialty: 'impresoras',
   })

   list.insertAgent(agent1)
   list.insertAgent(agent2)
   list.insertAgent(agent3)
   list.insertAgent(agent4)
   list.insertAgent(agent5)
   list.insertAgent(agent6)

   render()
}
