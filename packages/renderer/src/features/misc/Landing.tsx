import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './styles.css'
import { Button } from '/@/components/Button'

export const Landing = () => {
   const navigate = useNavigate()

   return (
      <div className='w-full h-100 d-flex'>
         <div className='h-100 w-100 d-flex flex-column gap-5 justify-content-center align-items-center'>
            <h1 className='fw-bold title'>Call Center App</h1>

            <img
               src={reactLogo}
               className='logo react'
               alt='React logo'
            />

            <Button
               onClick={() => navigate('/agents')}
               style={{
                  width: '300px',
               }}
            >
               Start
            </Button>
         </div>
      </div>
   )
}
