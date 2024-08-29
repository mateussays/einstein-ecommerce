import Breadcrumb from '../../components/atoms/Breadcrumb'
import CartList from '../../components/organisms/CartList'
import OrderSummary from '../../components/organisms/OrderSummary'

const Cart = () => {
  return (
    <div>
      <Breadcrumb currentPage="Carrinho" showPageTitle />
      <div className='flex flex-col md:flex-row justify-between gap-[122px] px-5 md:pl-[145px] md:pr-[115px] pt-[70px] pb-[40px]'>
        <CartList />
        <OrderSummary />
      </div>
    </div>
  )
}

export { Cart }
export default Cart
