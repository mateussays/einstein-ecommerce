import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar'
import Breadcrumb from './components/atoms/Breadcrumb'
import CartItem from './components/molecules/CartItem'

const App = () => {
  return (
    <>
      <Router>
        <div className="mb-5">
          <NotificationBar message="Ganhe 25% OFF no seu primeiro pedido." />
          <Header />
          <Breadcrumb currentPage="Home" />
        </div>

        <div className="flex items-center justify-center w-[700px] ml-8">
          <CartItem
            imageSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            productName="Classic Monochrome Tees"
            price={20}
            initialQuantity={1}
            onDelete={() => {}}
          />
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
