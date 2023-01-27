import { TableColumn } from '/@/components/Table/Table'

interface TableRowProps<T> {
   item: T
   columns: Array<TableColumn<T>>
}

export const TableRow = <T extends unknown>({
   item,
   columns,
}: TableRowProps<T>) => {
   return (
      <tr>
         <th scope='row'>
            <input
               className='form-check-input'
               type='checkbox'
            />
         </th>

         {columns.map((column) => {
            if (column.Cell) return <td key={column.id}>{column.Cell(item)}</td>

            return (
               <td key={column.id}>
                  {(item as any)[column.accessor]() as string}
               </td>
            )
         })}
      </tr>
   )
}
