import { useState } from 'react'

export const useRender = () => {
   const [c, setC] = useState(0)

   function render() {
      setC(c + 1)
   }

   return render
}
