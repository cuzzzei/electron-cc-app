import { createContext, useEffect, useState } from 'react'
import { Toast, Status } from '/@/components/Toast'

interface ToastProviderProps {
   children: React.ReactNode
}

type ToastContextType = (toast: ToastConfig) => void

export const ToastContext = createContext<ToastContextType>(
   {} as ToastContextType
)

interface ToastConfig {
   title: string
   description?: string
   status?: Status
   duration?: number
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
   const [list, setList] = useState<Array<ToastConfig & { id: string }>>([])

   function addToast(toast: ToastConfig) {
      const id = crypto.randomUUID()

      setList((prev) => [
         ...prev,
         {
            id,
            ...toast,
         },
      ])
   }

   useEffect(() => {
      // TODO: bug with multiple toast, too much timer
      const timer = setTimeout(() => {
         setList((prev) => {
            const newList = [...prev]
            newList.shift()
            return newList
         })
      }, 3000)

      return () => {
         clearTimeout(timer)
      }
   }, [list])

   return (
      <ToastContext.Provider value={addToast}>
         <div>
            {list.map((toast, i) => (
               <Toast
                  {...toast}
                  key={toast.id}
                  index={i}
               />
            ))}
         </div>
         {children}
      </ToastContext.Provider>
   )
}
