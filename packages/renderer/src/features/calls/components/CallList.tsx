import { CallList as CallListClass } from '/@/types/call'
import { getColumns } from '../data/tableColumns'
import { CreateCall } from '../components/CreateCall'
import { Table } from '/@/components/Table'
import { DeleteAll } from '/@/features/calls/components/DeleteAll'

interface CallListProps {
   callList: CallListClass
}

export const CallList = ({ callList }: CallListProps) => {
   return (
      <div className='p-4 md:p-5'
         style={{
            display: 'grid',
            gridTemplateRows: '50px auto',
            rowGap: '12px',
            height: '100%'
         }}
      >
         <div className='d-flex gap-3 align-items-start'>
            <h3 className='fw-bold'>Calls</h3>

            <CreateCall callList={callList} />
            <DeleteAll callList={callList} />
         </div>

         <Table
            columns={getColumns(callList)}
            data={callList.map((call) => call)}
            style={{
               overflowY: 'auto',
               height: '350px'
            }}
            emptyMessage='No calls received'
         />
      </div>
   )
}
