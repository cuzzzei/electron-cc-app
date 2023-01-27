import { useNavigate } from 'react-router-dom'

export const Main = () => {
   const navigate = useNavigate()

   return (
      <div>
         Bienvenido
         
         <button
            className='btn btn-dark'
            onClick={() => navigate('/agents')}
         >
            Ir a los agentes
         </button>
      </div>
   )
}
