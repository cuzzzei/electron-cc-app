import { Call, CallList as CallListClass } from '/@/types/call'
import { CreateCall } from '../components/CreateCall'
import { DeleteAll } from '/@/features/calls/components/DeleteAll'
import { getColumns } from '../data/tableColumns'
import { Table } from '/@/components/Table'
import { UpdateCall } from '/@/features/calls/components/UpdateCall'
import { useState } from 'react'
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
   const [selectedCallId, setSelectedCallId] = useState('')
   const [openEdit, setOpenEdit] = useState(false)

   function handleOpenEdit(row: Call) {
      setSelectedCallId(row.getId())
      setOpenEdit(true)
   }

   const call = callList.findById(selectedCallId)

   return (
      <>
         {call && (
            <UpdateCall
               call={call}
               callList={callList}
               isOpen={openEdit}
               setIsOpen={setOpenEdit}
            />
         )}

         <Container className='p-4 p-lg-5'>
            <div className='d-flex gap-2'>
               <h3 className='fw-bold'>Calls</h3>

               <CreateCall callList={callList} />
               <DeleteAll callList={callList} />
            </div>

            <Table
               columns={getColumns(callList)}
               data={callList.toArray().map((call) => call)}
               emptyMessage='No calls received'
               onRowClick={handleOpenEdit}
            />
         </Container>
      </>
   )
}
