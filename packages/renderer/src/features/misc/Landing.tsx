import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './styles.css'

export const Landing = () => {
   const navigate = useNavigate()

   return (
      <div className='w-full h-100 d-flex'>
         <div className='h-100 w-100 d-flex flex-column gap-5 justify-content-center align-items-center'>
            <h1
               className='fw-bold'
               style={{
                  fontSize: '5rem',
               }}
            >
               Call Center App
            </h1>

            <img
               src={reactLogo}
               className='logo react'
               alt='React logo'
            />

            <button
               className='btn btn-dark btn-lg'
               onClick={() => navigate('/agents')}
            >
               Start
            </button>
         </div>
      </div>
   )
}
