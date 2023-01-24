import { Main } from '/@/features/misc'
import { AppProvider } from '/@/providers/app'
import './index.css'

const App = () => {
   return (
      <AppProvider>
         <Main />
      </AppProvider>
   )
}

export default App
