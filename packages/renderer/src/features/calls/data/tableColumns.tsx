import { TableColumn } from '/@/components/Table'
import { UpdateCall } from '/@/features/calls/components/UpdateCall'
import { useToast } from '/@/hooks/useToast'
import { useAppContext } from '/@/providers/app'
import { Call } from '../../../types/call/Call'
import { CallList } from '/@/types/call'
import { CallNode } from '../../../types/call/CallNode';

interface CallListActionsProps {
   call: Call
   callList: CallList
}

function CallListActions({ call, callList }: CallListActionsProps) {
   const toast = useToast()
   const { render } = useAppContext()

   function removeCall() {
      try {
         const nodeToDelete = callList.findData(call) as CallNode
         callList.remove(nodeToDelete)
         toast({
            title: 'Call deleted successfully',
            status: 'success',
         })

         render()
      } catch (err) {
         if (err instanceof Error) {
            toast({
               title: err.name,
               description: err.message,
               status: 'error',
            })
         }
      }
   }

   return (
      <div className='d-flex gap-2 justify-content-center'>
         <UpdateCall call={call} callList={callList}/>

         <div>
            <button
               className='btn btn-danger'
               onClick={() => removeCall()}
            >
               <i className='fa fa-trash' />
            </button>
         </div>
      </div>
   )
}

export function getColumns(callList: CallList): Array<TableColumn<Call>> {
   return [
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
            return `${call.getStartTime()} - ${call.getEndTime()}`
         },
      },

      {
         id: 'description',
         Header: 'Description',
         accessor: 'getDescription',
      },

      {
         id: 'action',
         Cell: (call) => (
            <CallListActions
               call={call}
               callList={callList}
            />
         ),
      },
   ]
}
