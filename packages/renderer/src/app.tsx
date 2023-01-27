import { AppProvider } from '/@/providers/app'
import { AppRoutes } from '/@/routes'
import './index.css'

const App = () => {
   return (
      <AppProvider>
         <AppRoutes />
      </AppProvider>
   )
}

export default App
