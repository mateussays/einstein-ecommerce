import { BrowserRouter as Router } from 'react-router-dom'
import CartBadge from './components/atoms/CartBadge'

const App = () => {
  return (
    <>
      <Router>
        <div className="flex justify-center items-center h-screen">
          <CartBadge count={3} />
        </div>
      </Router>
    </>
  )
}
export { App }
export default App
