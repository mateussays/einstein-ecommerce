import { useCart } from '../../../contexts/CartContext'
import { Product } from '../../../types/product'
import formatCurrency from '../../../utils/formatCurrency'
import QuantityInput from '../../atoms/QuantityInput'

const CartItem = ({ image, title, id, price, quantity, category }: Product) => {
  const { cartItems } = useCart()
  const item = cartItems.find(item => item.id === id)
  const totalPrice = item ? item.totalPrice : 0

  return (
    <div className="flex  flex-col md:flex-row items-center md:justify-between w-full md:gap-24 gap-6">
      <div className="md:flex md:items-center gap-8 grid grid-cols-2 w-full">
        <div className="bg-secondary-dark w-20 h-20 flex items-center justify-center rounded">
          <img
            src={image}
            alt={title}
            className="w-24 h-16 object-contain mix-blend-multiply md:max-w-none"
          />
        </div>
        <span className="text-sm text-primary-dark font-medium py-4">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-7">
        <span className="text-sm text-primary-dark font-medium whitespace-nowrap">
          {formatCurrency(totalPrice)}
        </span>
        <QuantityInput
          {...{ image, title, id, totalPrice, price, quantity, category }}
        />
      </div>
    </div>
  )
}

export default CartItem
export { CartItem }
