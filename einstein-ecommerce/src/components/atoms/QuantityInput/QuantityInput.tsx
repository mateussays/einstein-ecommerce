import { AddIcon, ExcludeIcon, MinusIcon } from '../Icons'
import { useCart } from '../../../contexts/CartContext'
import { Product } from '../../../types/product'

const QuantityInput = ({
  quantity,
  id,
  price,
  title,
  image,
  category,
  totalPrice
}: Product) => {
  const { addItemToCart, removeAllItems } = useCart()

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
      <div className="flex items-center border rounded border-tertiary-lightest py-1 px-2 gap-3">
        <button
          className="text-tertiary-dark hover:text-gray-900"
          onClick={decreaseQuantity}
        >
          <MinusIcon />
        </button>
        <span>{quantity}</span>
        <button
          className="text-tertiary-dark hover:text-gray-900"
          onClick={increaseQuantity}
        >
          <AddIcon />
        </button>
      </div>
      <button
        className="px-2 py-1 text-tertiary-dark bg-secondary-dark rounded hover:bg-gray-200"
        onClick={() => removeAllItems(id)}
      >
        <ExcludeIcon />
      </button>
    </div>
  )
}

export default QuantityInput
