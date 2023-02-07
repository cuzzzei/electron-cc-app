import { CallList as CallListClass } from '/@/types/CallList'
import { getColumns } from '../data/tableColumns'
import { CreateCall } from '../components/CreateCall'
import { Table } from '/@/components/Table'
import { DeleteAll } from '/@/features/calls/components/DeleteAll'

interface CallListProps {
   callList: CallListClass
}

export const CallList = ({ callList }: CallListProps) => {
   return (
      <div className='p-5'>
         <div>
            <div className='d-flex gap-3 align-items-start'>
               <h3 className='mb-4 fw-bold'>Calls</h3>

               <CreateCall callList={callList} />
               <DeleteAll callList={callList} />
            </div>

            <Table
               columns={getColumns(callList)}
               data={callList.map((call) => call)}
               style={{
                  maxHeight: '54vh',
                  overflowY: 'auto',
               }}
               emptyMessage='No calls received'
            />
         </div>
      </div>
   )
}
