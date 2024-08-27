import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar'
import Breadcrumb from './components/atoms/Breadcrumb'
import QuantityInput from './components/atoms/QuantityInput'



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
          <QuantityInput initialQuantity={1} onDelete={() => console.log('Deleted')} />
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
