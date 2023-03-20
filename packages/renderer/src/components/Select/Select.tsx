import {
   FieldError,
   FieldErrorsImpl,
   Merge,
   UseFormRegisterReturn,
} from 'react-hook-form'

type SelectProps = {
   className?: string
   error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
   helperText?: string
   label: string
   required?: boolean
   registration: Partial<UseFormRegisterReturn> | ({ value: any, onChange: ((e: React.ChangeEvent<HTMLSelectElement>) => void)})
   children: React.ReactNode
   style?: React.CSSProperties
   fullWidth?: boolean
}

export const Select = ({
   className = '',
   error,
   helperText,
   label,
   required = false,
   registration,
   children,
   style,
   fullWidth = false,
}: SelectProps) => {
   return (
      <div
         className={`form-group text-start ${className}`}
         style={{
            ...style,
            width: fullWidth ? '100%' : undefined,
         }}
      >
         <label htmlFor={label}>
            {label}

            {required && <span className='text-danger'>*</span>}
         </label>

         <select
            id={label}
            className={`form-select mt-2 ${
               error?.message && 'is-invalid'
            } ${className}`}
            {...registration}
            style={{
               width: fullWidth ? '100%' : undefined,
            }}
         >
            {children}
         </select>

         {helperText && (
            <small className='form-text text-muted'>{helperText}</small>
         )}

         {Boolean(error?.message) && (
            <div className='invalid-feedback'>{error?.message as string}</div>
         )}
      </div>
   )
}
