import { CallList as CallListClass } from '/@/types/call'
import { getColumns } from '../data/tableColumns'
import { CreateCall } from '../components/CreateCall'
import { Table } from '/@/components/Table'
import { DeleteAll } from '/@/features/calls/components/DeleteAll'
import styled from 'styled-components'

interface CallListProps {
   callList: CallListClass
}

const Container = styled.div`
   display: grid;
   row-gap: 20px;
   grid-template-rows: min-content;
   overflow-y: hidden;
`

export const CallList = ({ callList }: CallListProps) => {
   return (
      <Container className='p-4 p-lg-5'>
         <div className='d-flex gap-3'>
            <h3 className='fw-bold'>Calls</h3>

            <CreateCall callList={callList} />
            <DeleteAll callList={callList} />
         </div>

         <Table
            columns={getColumns(callList)}
            data={callList.map((call) => call)}
            emptyMessage='No calls received'
         />
      </Container>
   )
}
