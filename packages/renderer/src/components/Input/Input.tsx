import {
   FieldError,
   FieldErrorsImpl,
   Merge,
   UseFormRegisterReturn,
} from 'react-hook-form'

type InputProps = {
   className?: string
   error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
   helperText?: string
   type?: React.HTMLInputTypeAttribute
   placeholder?: string
   label: string
   registration: Partial<UseFormRegisterReturn>
   required?: boolean
   size?: number
   textArea?: boolean
   disabled?: boolean
}

export const Input = ({
   className = '',
   error,
   helperText,
   label,
   required = false,
   placeholder = '',
   registration,
   type = 'text',
   size,
   textArea = false,
   disabled = false,
   ...rest
}: InputProps) => {
   const Component = textArea ? 'textarea' : 'input'

   return (
      <div className={`form-group text-start  ${className}`}>
         <label htmlFor={label}>
            {label}

            {required && <span className='text-danger'>*</span>}
         </label>

         <Component
            id={label}
            type={type}
            placeholder={placeholder}
            className={`form-control mt-2 ${error?.message && 'is-invalid'}`}
            size={size}
            maxLength={size}
            disabled={disabled}
            aria-label={label}
            {...registration}
            {...rest}
         />

         {helperText && (
            <small className='form-text text-muted'>{helperText}</small>
         )}

         {Boolean(error?.message) && (
            <div className='invalid-feedback'>{error?.message as string}</div>
         )}
      </div>
   )
}
