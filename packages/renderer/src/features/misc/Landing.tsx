import { useNavigate } from 'react-router-dom'

export const Landing = () => {
   const navigate = useNavigate()

   return (
      <div className='w-full vh-100 d-flex flex-column justify-content-center align-items-center'>
         <h3>Welcome</h3>

         <button
            className='btn btn-dark'
            onClick={() => navigate('/agents')}
         >
            Login
         </button>
      </div>
   )
}
