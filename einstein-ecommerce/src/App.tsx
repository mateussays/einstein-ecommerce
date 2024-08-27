import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar'
import Breadcrumb from './components/atoms/Breadcrumb'
import Checkbox from './components/atoms/Checkbox'

const App = () => {
  return (
    <>
      <Router>
        <div className='mb-5'>
          <NotificationBar message="Ganhe 25% OFF no seu primeiro pedido." />
          <Header />
          <Breadcrumb currentPage="Home" />
        </div>

        <Checkbox label="Checkbox" checked={true} onChange={() => {}} value='checkbox' />
      </Router>
    </>
  )
}
export { App }
export default App
