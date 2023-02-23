import { useNavigate } from 'react-router-dom'

export const Landing = () => {
   const navigate = useNavigate()

   return (
      <div className='w-full h-100 d-flex'>
         <div className='h-100 w-50 d-flex flex-column gap-5 justify-content-center align-items-center'>
            <h1
               className='fw-bold'
               style={{
                  fontSize: '5rem',
               }}
            >
               Call Center App
            </h1>

            <button
               className='btn btn-dark btn-lg'
               onClick={() => navigate('/agents')}
            >
               Login
            </button>
         </div>

         <div className='h-100 w-50 d-flex justify-content-center align-items-center'>
            <img
               //src={Img}
               className='img-fluid'
               alt='main'
            />
         </div>
      </div>
   )
}
