import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar'
import Breadcrumb from './components/atoms/Breadcrumb'
import Button from './components/atoms/Button'


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
          <Button label="Adicionar ao carrinho" onClick={() => console.log('Adicionado ao carrinho')} className='rounded-b' />
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
