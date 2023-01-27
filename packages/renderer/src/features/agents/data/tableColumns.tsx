import { TableColumn } from '/@/components/Table'
import { useAppContext } from '/@/providers/app'
import { Agent } from '/@/types/Agent'
import { Name } from '/@/types/Name'

export const columns: Array<TableColumn<Agent>> = [
   {
      id: 'extension',
      Header: 'Extensión',
      accessor: 'getExtension',
   },
   {
      id: 'name',
      Header: 'Nombre',
      Cell: (agent) => {
         return agent.getName().toString()
      },
   },
   {
      id: 'age',
      Header: 'Edad',
      accessor: 'getAge',
   },
   {
      id: 'hour',
      Header: 'Horario',
      Cell: (agent) => {
         return `${agent.getStart()} - ${agent.getFinish()}`
      },
   },
   {
      id: 'overtime',
      Header: 'Horas extra',
      accessor: 'getOvertime',
   },
   {
      id: 'specialty',
      Header: 'Especialidad',
      accessor: 'getSpecialty',
   },
   {
      id: 'calls',
      Header: 'Llamadas',
      Cell: (agent) => {
         return `${agent.getCallsHistory().length}`
      },
   },
   {
      id: 'actions',
      Cell: (agent) => {
         return (
            <div className='d-flex gap-1'>
               <div>
                  <button className='btn btn-dark'>
                     <i className='fa fa-phone' />
                  </button>
               </div>

               <div>
                  <button className='btn btn-primary'>
                     <i className='fa fa-pencil' />
                  </button>
               </div>

               <div>
                  <button className='btn btn-danger'>
                     <i className='fa fa-trash' />
                  </button>
               </div>
            </div>
         )
      },
   },
]
