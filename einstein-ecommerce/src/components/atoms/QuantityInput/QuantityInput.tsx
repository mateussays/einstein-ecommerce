import { AddIcon, ExcludeIcon, MinusIcon } from '../Icons'
import { useCart } from '../../../contexts/CartContext'
import { Product } from '../../../types/product'

const QuantityInput = (props: Product) => {
  const { addItemToCart, removeAllItems } = useCart()
  const { quantity, id, price, title, image, category, totalPrice } = props
  const updatedItem = {
    id,
    title,
    price,
    quantity,
    image,
    category,
    totalPrice
  }

  const increaseQuantity = () => {
    addItemToCart(updatedItem, 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      addItemToCart(updatedItem, -1)
    } else {
      removeAllItems(id)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="h-[40px] flex items-center border rounded-[4px] border-tertiary-lightest gap-3 py-3 px-4">
        <button
          className="text-tertiary-dark hover:text-gray-900"
          onClick={decreaseQuantity}
        >
          <MinusIcon />
        </button>
        {quantity}
        <button
          className="text-tertiary-dark hover:text-gray-900"
          onClick={increaseQuantity}
        >
          <AddIcon />
        </button>
      </div>
      <button
        className="px-[9px] py-[4px] text-tertiary-dark bg-secondary-dark rounded-[4px] hover:bg-gray-200"
        onClick={() => removeAllItems(id)}
      >
        <ExcludeIcon />
      </button>
    </div>
  )
}

export default QuantityInput
