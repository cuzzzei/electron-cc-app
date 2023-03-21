/* eslint-disable */
import * as Yup from 'yup'
import {
   DeepPartial,
   FieldValues,
   SubmitHandler,
   useForm,
   UseFormReturn,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type FormProps<TFormData extends FieldValues, Schema> = {
   id?: string
   children: (data: UseFormReturn<TFormData>) => React.ReactNode
   className?: string
   defaultValues?: DeepPartial<TFormData> | undefined
   onSubmit: SubmitHandler<TFormData>
   schema: Schema
   style?: React.CSSProperties
}

export const Form = <
   TFormData extends FieldValues,
   Schema extends Yup.AnyObjectSchema
>({
   id,
   children,
   className = '',
   defaultValues,
   onSubmit,
   schema,
   style,
}: FormProps<TFormData, Schema>) => {
   let methods = useForm<TFormData>({
      resolver: yupResolver(schema),
      defaultValues,
   })

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      const submitHandler = methods.handleSubmit((data) => {
         onSubmit(data)
         methods.reset()
      })

      submitHandler(e)
   }

   return (
      <form
         id={id}
         noValidate
         className={`d-flex flex-column gap-4 needs-validation ${className}`}
         onSubmit={handleSubmit}
         style={style}
      >
         {children(methods)}
      </form>
   )
}
