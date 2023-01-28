import { TableRow } from '/@/components/Table/TableRow'
import { BaseEntity } from '/@/types/BaseEntity'

export interface TableColumn<T> {
   id: string
   Header?: string
   accessor?: keyof T
   Cell?: (item: T) => React.ReactNode
}

interface TableProps<T> {
   columns: Array<TableColumn<T>>
   data: Array<T & BaseEntity>
   emptyMessage?: string
}

export const Table = <T,>({
   columns,
   data,
   emptyMessage = 'Entries not found',
}: TableProps<T>) => {
   if (data.length === 0) {
      return (
         <div className='card'>
            <div className='card-body'>
               <p>{emptyMessage}</p>
            </div>
         </div>
      )
   }

   return (
      <div className='card'>
         <div className='card-body'>
            <div className='table-responsive'>
               <table className='table table-responsive table-borderless table-hover align-middle text-start'>
                  <thead>
                     <tr className='bg-light'>
                        <th scope='col'>
                           <input
                              className='form-check-input'
                              type='checkbox'
                           />
                        </th>

                        {columns.map((column) => (
                           <th
                              scope='col'
                              key={column.id}
                           >
                              {column.Header ?? ''}
                           </th>
                        ))}
                     </tr>
                  </thead>

                  <tbody>
                     {data.map((item) => (
                        <TableRow<T>
                           key={item.getId()}
                           item={item}
                           columns={columns}
                        />
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
