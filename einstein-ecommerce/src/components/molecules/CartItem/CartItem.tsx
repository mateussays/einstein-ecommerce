import QuantityInput from '../../atoms/QuantityInput'

type CartItemProps = {
  imageSrc: string
  productName: string
  price: number
  initialQuantity: number
  onDelete: () => void
}

const CartItem = (props: CartItemProps) => {
  const { imageSrc, productName, price, initialQuantity, onDelete } = props

  return (
    <div className="flex items-center justify-between py-4 w-full gap-[100px]">
      <div className="flex items-center gap-[34px]">
        <div className="bg-secondary-dark w-[80px] h-[80px] flex items-center justify-center rounded">
          <img
            src={imageSrc}
            alt={productName}
            className="w-[44px] h-[62px] object-contain mix-blend-multiply"
          />
        </div>
        <span className="text-sm text-primary-dark font-medium self-start">{productName}</span>
      </div>
      <div className="flex items-center gap-7">
        <span className="text-sm text-primary-dark font-medium">{`R$${price.toFixed(2)}`}</span>
        <QuantityInput initialQuantity={initialQuantity} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default CartItem
export { CartItem }
