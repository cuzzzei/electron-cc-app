import { ToastContext } from '/@/providers/ToastProvider'
import { useContext } from 'react'

export function useToast() {
   return useContext(ToastContext)
}
