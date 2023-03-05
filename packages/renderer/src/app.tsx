import { AppProvider } from '/@/providers/app'
import { AppRoutes } from '/@/routes'
import 'animate.css'
import './index.css'

const App = () => {
   return (
      <AppProvider>
         <AppRoutes />
      </AppProvider>
   )
}

export default App
