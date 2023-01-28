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
   registration: Partial<UseFormRegisterReturn>
   children: React.ReactNode
}

export const Select = ({
   className = '',
   error,
   helperText,
   label,
   required = false,
   registration,
   children,
}: SelectProps) => {
   return (
      <div className={`form-group text-start  ${className}`}>
         <label htmlFor={label}>
            {label}

            {required && <span className='text-danger'>*</span>}
         </label>

         <select
            id={label}
            className={`form-select mt-2 ${error?.message && 'is-invalid'}`}
            {...registration}
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
