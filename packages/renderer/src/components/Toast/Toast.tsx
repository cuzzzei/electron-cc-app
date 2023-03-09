import {
   CheckCircleIcon,
   ExclamationCircleIcon,
   ExclamationTriangleIcon,
} from '@heroicons/react/24/solid'
import styled from 'styled-components'
export type Status = 'success' | 'error' | 'warning'

interface ToastProps {
   title: string
   description?: string
   status?: Status
   index: number
}

const Icon = styled.div`
   width: 20px;
`

function SuccessIcon() {
   return (
      <Icon>
         <CheckCircleIcon />
      </Icon>
   )
}

function ErrorIcon() {
   return (
      <Icon>
         <ExclamationCircleIcon />
      </Icon>
   )
}

function WarningIcon() {
   return (
      <Icon>
         <ExclamationTriangleIcon />
      </Icon>
   )
}

export const Toast = ({ status, title, description, index }: ToastProps) => {
   const backgroundColor = {
      success: '#38A169',
      error: '#E52E3E',
      warning: '#DD6B20',
   }[status ?? 'success']

   const Icon = {
      success: SuccessIcon,
      error: ErrorIcon,
      warning: WarningIcon,
   }[status ?? 'success']

   return (
      <div
         role='alert'
         className='text-white rounded-2'
         style={{
            backgroundColor,
            padding: '0.5rem 2rem 0.5rem 1rem',
         }}
      >
         <div className='d-flex gap-2 align-items-start'>
            <Icon />

            <div className='d-flex flex-column gap-1'>
               <p className='fw-bold mb-0'>{title}</p>
               <p className='mb-0'>{description ?? ''}</p>
            </div>
         </div>
      </div>
   )
}
