import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar'
import Breadcrumb from './components/atoms/Breadcrumb'
import ProductList from './components/organisms/ProductList'


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
          <ProductList />
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
