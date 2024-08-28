import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export { Routes }
export default Routes
