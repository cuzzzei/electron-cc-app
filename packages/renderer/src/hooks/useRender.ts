import { useCallback, useState } from 'react'

export const useRender = () => {
   const [_, setC] = useState(0)

   const render = useCallback(() => {
      setC((prev) => prev + 1)
   }, [])

   return render
}
