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
   showSelectors?: boolean
   onRowClick?: (row: T) => void
   style?: React.CSSProperties
   className?: string
}

export const Table = <T,>({
   columns,
   data,
   emptyMessage = 'Entries not found',
   showSelectors = false,
   onRowClick,
   style = {},
   className = '',
}: TableProps<T>) => {
   if (data.length === 0) {
      return (
         <div className='card text-center p-5'>
            <div className='card-body'>
               <p>{emptyMessage}</p>
            </div>
         </div>
      )
   }

   return (
      <div
         className={`card ${className}`}
         style={{
            overflowY: 'auto',
            borderColor: 'var(--accents-2)',
            ...style,
         }}
      >
         <div className='card-body'>
            <div className='table-responsive'>
               <table className='table table-responsive table-borderless table-hover align-middle text-start'>
                  <thead
                     className='rounded-2'
                     style={{
                        backgroundColor: 'var(--accents-1)',
                     }}
                  >
                     <tr>
                        {showSelectors && (
                           <th scope='col'>
                              <input
                                 className='form-check-input'
                                 type='checkbox'
                              />
                           </th>
                        )}

                        {columns.map((column) => (
                           <th
                              scope='col'
                              key={column.id}
                              className='text-uppercase py-3'
                           >
                              <span
                                 style={{
                                    color: 'var(--accents-5)',
                                 }}
                                 className='fw-normal '
                              >
                                 {column.Header ?? ''}
                              </span>
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
                           showSelector={showSelectors}
                           onClick={onRowClick}
                        />
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
