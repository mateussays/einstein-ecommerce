import Breadcrumb from '../../components/atoms/Breadcrumb'
import CartList from '../../components/organisms/CartList'
import OrderSummary from '../../components/organisms/OrderSummary'

const Cart = () => {
  return (
    <div>
      <Breadcrumb currentPage="Carrinho" showPageTitle />
      <div className='flex justify-between gap-[122px] pl-[145px] pr-[115px] pt-[70px] pb-[40px]'>
        <CartList />
        <OrderSummary />
      </div>
    </div>
  )
}

export { Cart }
export default Cart
