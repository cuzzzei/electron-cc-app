import { TableColumn } from '/@/components/Table'
import { Call } from '/@/types/Call'

export const columns: Array<TableColumn<Call>> = [
   {
      id: 'clientName',
      Header: 'Client Name',
      accessor: 'getClientName',
      Cell: (call) => {
         return call.getClientName().toString()
      },
   },

   {
      id: 'duration',
      Header: 'Duration',
      Cell: (call) => {
         return `${call.getStart()} - ${call.getFinish()}`
      },
   },

   {
      id: 'description',
      Header: 'Description',
      accessor: 'getDescription',
   },

   {
      id: 'action',
      Cell: (call) => {
         return (
            <div className='d-flex gap-2 justify-content-center'>
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
