import { ClientsAdminPanel } from './pages/Admin/UserSection/ClientsAdminPanel'
import { AppRoutes } from './routes/AppRoutes'

const App = () => {
   return (
      <>
         <AppRoutes />
         <ClientsAdminPanel />
      </>
   )
}

export default App
