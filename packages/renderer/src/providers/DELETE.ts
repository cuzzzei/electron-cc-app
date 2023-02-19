import { Agent } from '../types/agent/Agent'
import { AgentList } from '/@/types/agent'
import { CallList, Call } from '/@/types/call'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export function fill(list: AgentList, render: () => void) {
   const agent1 = new Agent({
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
      name: new Name('Marco "El Chino"', 'Maidana'),
      age: 25,
      callHistory: new CallList(),
      extension: '4444',
      startTime: new Time(7, 0),
      endTime: new Time(9, 40),
      overtime: 11,
      specialty: 'Laptops',
   })

   const agent3 = new Agent({
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
      name: new Name('Maria', 'Salazar'),
      age: 44,
      callHistory: new CallList(),
      extension: '8888',
      startTime: new Time(7, 0),
      endTime: new Time(16, 0),
      overtime: 10,
      specialty: 'Printers',
   })
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '1'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(10, 20),
         end: new Time(10, 23),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '2'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(7, 56),
         end: new Time(8, 10),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(7, 58),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '4'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 1),
         end: new Time(8, 10),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '5'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 2),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '6'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 3),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '7'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '8'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 3),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '9'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '10'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '11'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(9, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '12'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '13'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '14'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '15'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '16'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '17'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         end: new Time(8, 20),
      })
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '18'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 14),
         end: new Time(8, 20),
      })
   )

   list.insert(agent1)
   list.insert(agent2)
   list.insert(agent3)
   list.insert(agent4)
   list.insert(agent5)
   list.insert(agent6)

   const abc = list.map((agent) => {
      return {
         ...agent,
         callHistory: agent.getCallHistory().map((call) => call),
      }
   })

   render()
}
