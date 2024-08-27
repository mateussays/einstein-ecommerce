import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar'
import Breadcrumb from './components/atoms/Breadcrumb'



const App = () => {

  return (
    <>
      <Router>
        <div className="mb-5">
          <NotificationBar message="Ganhe 25% OFF no seu primeiro pedido." />
          <Header />
          <Breadcrumb currentPage="Home" />
        </div>

        <div className="flex items-center justify-center">
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
