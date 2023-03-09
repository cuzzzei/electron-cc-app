import { TableColumn } from '/@/components/Table/Table'

interface TableRowProps<T> {
   item: T
   columns: Array<TableColumn<T>>
   showSelector: boolean
   onClick?: (row: T) => void
}

export const TableRow = <T extends unknown>({
   item,
   columns,
   showSelector,
   onClick,
}: TableRowProps<T>) => {
   function handleClick(
      e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
   ) {
      onClick && onClick(item)
   }

   // TODO: Background color on hover
   return (
      <tr>
         {showSelector && (
            <th scope='row'>
               <input
                  className='form-check-input'
                  type='checkbox'
               />
            </th>
         )}

         {columns.map((column) => {
            if (column.Cell)
               return (
                  <td
                     key={column.id}
                     onClick={handleClick}
                     role={onClick && 'button'}
                  >
                     {column.Cell(item)}
                  </td>
               )

            return (
               <td
                  key={column.id}
                  onClick={handleClick}
                  role={onClick && 'button'}
               >
                  {(item as any)[column.accessor]() as string}
               </td>
            )
         })}
      </tr>
   )
}
