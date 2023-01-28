import { TableColumn } from '/@/components/Table'
import { AgentActions } from '/@/features/agents/components/AgentActions'
import { Agent } from '/@/types/Agent'

export const columns: Array<TableColumn<Agent>> = [
   {
      id: 'extension',
      Header: 'Extension',
      accessor: 'getExtension',
   },
   {
      id: 'name',
      Header: 'Name',
      Cell: (agent) => {
         return agent.getName().toString()
      },
   },
   {
      id: 'age',
      Header: 'Age',
      accessor: 'getAge',
   },
   {
      id: 'hour',
      Header: 'Hour',
      Cell: (agent) => {
         return `${agent.getStartTime()} - ${agent.getFinishTime()}`
      },
   },
   {
      id: 'overtime',
      Header: 'Overtime',
      accessor: 'getOvertime',
   },
   {
      id: 'specialty',
      Header: 'Specialty',
      accessor: 'getSpecialty',
   },
   {
      id: 'calls',
      Header: 'Calls',
      Cell: (agent) => {
         return `${agent.getCallsHistory().length}`
      },
   },
   {
      id: 'actions',
      Cell: (agent) => {
         return <AgentActions agent={agent} />
      },
   },
]
