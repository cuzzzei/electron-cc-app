import { CallList as CallListClass } from '/@/types/CallList'
import { columns } from '../data/tableColumns'
import { Table } from '/@/components/Table'

interface CallListProps {
   callList: CallListClass
}

export const CallList = ({ callList }: CallListProps) => {
   return (
      <div className='p-5'>
         <div>
            <h3 className='mb-4 fw-bold'>Calls</h3>

            <Table
               columns={columns}
               data={callList.map((call) => call)}
               onRowClick={(call) => {
                  console.log(call)
               }}
               style={{
                  maxHeight: '54vh',
                  overflowY: 'auto',
               }}
            />
         </div>
      </div>
   )
}
