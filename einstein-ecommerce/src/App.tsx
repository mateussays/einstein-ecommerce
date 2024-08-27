import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/organisms/Header'
import NotificationBar from './components/molecules/NotificationBar/NotificationBar'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <NotificationBar message="Ganhe 25% OFF no seu primeiro pedido." />
          <Header />
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
