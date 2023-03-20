import { Button } from '/@/components/Button'
import { CallList, CallNode, Call } from '/@/features/calls'
import { TableColumn } from '/@/components/Table'
import { useAppContext } from '/@/providers/app'
import { useToast } from '/@/hooks/useToast'

interface CallListActionsProps {
   call: Call
   callList: CallList
}

function CallListActions({ call, callList }: CallListActionsProps) {
   const toast = useToast()
   const { render } = useAppContext()

   function removeCall() {
      try {
         const nodeToDelete = callList.find(call) as CallNode
         callList.delete(nodeToDelete)
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
         <div>
            <Button onClick={() => removeCall()}>
               <i className='fa fa-trash' />
            </Button>
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
         id: 'start-time',
         Header: 'Start Time',
         Cell: (call) => {
            return call.getStartTime().toString()
         },
      },
      {
         id: 'duration',
         Header: 'Duration (hh:mm)',
         Cell: (call) => {
            return call.getDuration().toString()
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
