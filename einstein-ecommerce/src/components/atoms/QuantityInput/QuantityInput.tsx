import { useState } from 'react'
import { AddIcon, ExcludeIcon, MinusIcon } from '../Icons'

type QuantityInputProps = {
  initialQuantity: number
  onDelete: () => void
}

const QuantityInput = (props: QuantityInputProps) => {
  const { initialQuantity, onDelete } = props

  const [quantity, setQuantity] = useState(initialQuantity)

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    } else {
      onDelete()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    
    if (isNaN(value)) {
      setQuantity(1)
    } else if (value < 1) {
      onDelete()
    } else {
      setQuantity(value)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="h-[40px] flex items-center border rounded-[4px] border-tertiary-lightest py-3 px-4">
        <button
          className="text-tertiary-dark hover:text-gray-900"
          onClick={decreaseQuantity}
        >
          <MinusIcon  />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          className="w-12 text-center border-none focus:ring-0 appearance-none"
        />
        <button
          className=" text-tertiary-dark hover:text-gray-900"
          onClick={increaseQuantity}
        >
          <AddIcon />
        </button>
      </div>
      <button
        className="px-[9px] py-[4px] text-tertiary-dark bg-secondary-dark rounded-[4px] hover:bg-gray-200"
        onClick={onDelete}
      >
        <ExcludeIcon />
      </button>
    </div>
  )
}

export default QuantityInput
export { QuantityInput }
