import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export { AppRoutes }
export default AppRoutes
