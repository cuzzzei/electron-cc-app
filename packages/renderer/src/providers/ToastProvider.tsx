import { createContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
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

const HIDE_TIMER = 2500

const Container = styled.div`
   padding: 15px;
   position: absolute;
   top: 0;
   right: 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
   z-index: 999;
`

export const ToastProvider = ({ children }: ToastProviderProps) => {
   const timer = useRef<any>(null)
   const [list, setList] = useState<Array<ToastConfig & { id: string }>>([])

   function addToast(toast: ToastConfig) {
      const id = crypto.randomUUID()

      setList((prev) => {
         if(prev.length > 5) {
            return prev
         }
         
         return [
            ...prev,
            {
               id,
               ...toast,
            },
         ]
      })
   }

   function cleanAll() {
      setList([])
   }

   useEffect(() => {
      if (timer.current) {
         clearTimeout(timer.current)
         timer.current = setTimeout(() => cleanAll(), HIDE_TIMER)
      } else {
         timer.current = setTimeout(() => cleanAll(), HIDE_TIMER)
      }

      return () => {
         clearTimeout(timer.current)
      }
   }, [list])

   return (
      <ToastContext.Provider value={addToast}>
         <Container
         >
            {list.map((toast, i) => (
               <Toast
                  {...toast}
                  key={toast.id}
                  index={i}
               />
            ))}
         </Container>
         {children}
      </ToastContext.Provider>
   )
}
