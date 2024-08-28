import { useCart } from '../../../contexts/CartContext'
import { Product } from '../../../types/product'
import QuantityInput from '../../atoms/QuantityInput'


const CartItem = (props: Product) => {
  const { image, title, quantity, id } = props
  const { cartItems } = useCart()
  const { totalPrice } = cartItems.find(item => item.id === id) ?? { totalPrice: 0 }
  
  return (
    <div className="flex items-center justify-between w-full gap-[100px]">
      <div className="flex items-center gap-[34px]">
        <div className="bg-secondary-dark w-[80px] h-[80px] flex items-center justify-center rounded">
          <img
            src={image}
            alt={title}
            className="w-[44px] h-[62px] object-contain mix-blend-multiply"
          />
        </div>
        <span className="text-sm text-primary-dark font-medium self-start py-4">{title}</span>
      </div>
      <div className="flex items-center gap-7">
        <span className="text-sm text-primary-dark font-medium">{`R$${totalPrice.toFixed(2)}`}</span>
        <QuantityInput initialQuantity={quantity} id={id} />
      </div>
    </div>
  )
}

export default CartItem
export { CartItem }
