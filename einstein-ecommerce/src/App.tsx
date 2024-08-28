import { CartProvider } from './contexts/CartContext'
import Routes from './routes'

const App = () => {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  )
}
export { App }
export default App
