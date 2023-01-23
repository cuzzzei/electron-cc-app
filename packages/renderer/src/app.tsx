import { Main } from '/@/features/misc'
import { AppProvider } from '/@/providers/app'

const App = () => {
   return (
      <AppProvider>
         <Main />
      </AppProvider>
   )
}

export default App
