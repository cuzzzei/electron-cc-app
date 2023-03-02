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
         clientName: new Name('Claire', 'Robinson'),
         description: 'Printer is unresponsive',
         start: new Time(10, 20),
         duration: new Time(0, 3),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Zachariah', 'Leonard'),
         description: 'Printer won’t print',
         start: new Time(7, 56),
         duration: new Time(0, 10),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Laura', 'Henderson'),
         description: 'Bad print quality',
         start: new Time(8, 48),
         duration: new Time(0, 20),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Yahya', 'Silva'),
         description: 'Uncertain about printer security',
         start: new Time(8, 1),
         duration: new Time(0, 5),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Wendy', 'Reese'),
         description: 'My printer won’t scan',
         start: new Time(11, 10),
         duration: new Time(0, 5),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Isaac', 'Hodge'),
         description: 'Too many paper jams',
         start: new Time(12, 3),
         duration: new Time(0, 4),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Davina', 'Munoz'),
         description: 'Prints too slowly',
         start: new Time(12, 10),
         duration: new Time(0, 2),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Alannah', 'Wilcox'),
         description: 'Printing is too expensive',
         start: new Time(13, 3),
         duration: new Time(0, 3),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Jasper', 'Hayes'),
         description: 'I can’t print from my mobile device',
         start: new Time(13, 20),
         duration: new Time(0, 9),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Theodore', 'Beck'),
         description: 'Wi-Fi printing takes too long',
         start: new Time(14, 5),
         duration: new Time(0, 12),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Fletcher', 'Dixon'),
         description: 'Nothing is Printing',
         start: new Time(14, 40),
         duration: new Time(0, 20),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Damian', 'Gray'),
         description: 'Cartridge or Toner Issue',
         start: new Time(15, 15),
         duration: new Time(0, 5),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Anna', 'Parker'),
         description: 'Creased Prints',
         start: new Time(15, 30),
         duration: new Time(0, 5),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Danyal', 'Farley'),
         description: 'Uneven Print Quality',
         start: new Time(15, 36),
         duration: new Time(0, 2),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Aiden', 'Lang'),
         description: 'The ink was crazy-expensive',
         start: new Time(7, 15),
         duration: new Time(0, 6),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Eden', 'Kelly'),
         description: 'The wireless networking rarely connected without a fuss',
         start: new Time(7, 20),
         duration: new Time(0, 2),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Sulayman', 'Franco'),
         description: 'No local stores sell “the right” ink cartridges anymore',
         start: new Time(7, 25),
         duration: new Time(0, 6),
      }),
      Call.compareByStartTime
   )
   agent6.getCallHistory().insertOrdered(
      new Call({
         id: crypto.randomUUID(),
         clientName: new Name('Gareth', 'Estrada'),
         description: 'Doesn not know hot to turn on the printer',
         start: new Time(8, 14),
         duration: new Time(0, 5),
      }),
      Call.compareByStartTime
   )

   list.insert(agent1)
   list.insert(agent2)
   list.insert(agent3)
   list.insert(agent4)
   list.insert(agent5)
   list.insert(agent6)

   render()
}
