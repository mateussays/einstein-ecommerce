import { useCart } from '../../../contexts/CartContext'
import CartItem from '../../molecules/CartItem'

const CartList = () => {
  const { cartItems } = useCart()

  return (
    <div>
      <div className="border-b border-[#E9E9EB] mb-12 w-full">
        <h1 className="text-base font-semibold text-primary-dark mb-[18px]">
          Seu carrinho
        </h1>
      </div>
      <div className="flex flex-col gap-[40px]">
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default CartList
export { CartList }
