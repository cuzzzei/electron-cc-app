import { useNavigate } from 'react-router-dom'

export const Main = () => {
   const navigate = useNavigate()

   return (
      <div>
         <h3>Welcome</h3>

         <button
            className='btn btn-dark'
            onClick={() => navigate('/agents')}
         >
            Ir a los agentes
         </button>
      </div>
   )
}
