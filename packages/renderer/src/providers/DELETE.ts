import { Agent } from '/@/types/Agent'
import { AgentList } from '/@/types/AgentList'
import { Call } from '/@/types/Call'
import { CallList } from '/@/types/CallList'
import { Name } from '/@/types/Name'
import { Time } from '/@/types/Time'

export function fill(list: AgentList, render: () => void) {
   const agent1 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Ronaldo', 'Nazario'),
      age: 22,
      callsHistory: new CallList(),
      extension: '3333',
      startTime: new Time(7, 0),
      finishTime: new Time(8, 50),
      overtime: 10,
      specialty: 'Desktop',
   })

   const agent2 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Marco "El Chino"', 'Maidana'),
      age: 25,
      callsHistory: new CallList(),
      extension: '4444',
      startTime: new Time(7, 0),
      finishTime: new Time(9, 40),
      overtime: 11,
      specialty: 'Laptops',
   })

   const agent3 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Manuel', 'Martinez'),
      age: 33,
      callsHistory: new CallList(),
      extension: '5555',
      startTime: new Time(7, 0),
      finishTime: new Time(15, 0),
      overtime: 13,
      specialty: 'Network',
   })

   const agent4 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Maria', 'Morales'),
      age: 24,
      callsHistory: new CallList(),
      extension: '6666',
      startTime: new Time(7, 0),
      finishTime: new Time(15, 0),
      overtime: 13,
      specialty: 'Laptops',
   })

   const agent5 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Daniela', 'Juarez'),
      age: 44,
      callsHistory: new CallList(),
      extension: '7777',
      startTime: new Time(7, 0),
      finishTime: new Time(16, 0),
      overtime: 10,
      specialty: 'Linux',
   })

   const agent6 = new Agent({
      id: crypto.randomUUID(),
      name: new Name('Maria', 'Salazar'),
      age: 44,
      callsHistory: new CallList(),
      extension: '8888',
      startTime: new Time(7, 0),
      finishTime: new Time(16, 0),
      overtime: 10,
      specialty: 'Printers',
   })
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '1'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(7, 55),
         finish: new Time(8, 0),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '2'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(7, 55),
         finish: new Time(8, 10),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )
   agent6.getCallsHistory().insertCall(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Client', '3'),
         description: 'Lorem Ipsum is simply dummy text',
         start: new Time(8, 15),
         finish: new Time(8, 20),
      })
   )

   list.insertAgent(agent1)
   list.insertAgent(agent2)
   list.insertAgent(agent3)
   list.insertAgent(agent4)
   list.insertAgent(agent5)
   list.insertAgent(agent6)

   render()
}
