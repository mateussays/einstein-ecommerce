import { Outlet } from 'react-router-dom'
import NotificationBar from '../components/molecules/NotificationBar'
import Header from '../components/organisms/Header'

const DefaultLayout = () => {
  return (
    <>
      <NotificationBar message="Ganhe 25% OFF no seu primeiro pedido." />
      <Header />
      <Outlet />
    </>
  )
}

export { DefaultLayout }
export default DefaultLayout
