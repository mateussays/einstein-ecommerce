import { useCart } from '../../../contexts/CartContext'
import { Product } from '../../../types/product'
import formatCurrency from '../../../utils/formatCurrency'
import Tag from '../../atoms/Tag'
import ProductImageCard from '../ProductImageCard'

const ProductCard = (props: Product) => {
  const { title, price, image, id, category, totalPrice } = props
  const { addItemToCart } = useCart()

  const handleAddToCart = () => {
    const product = { 
      id,
      title,
      price,
      image,
      category,
      totalPrice,
      quantity: 1
    }

    addItemToCart(product)
  }



  return (
    <div className="flex flex-col gap-6 max-w-[256px]">
      <ProductImageCard handleCart={handleAddToCart} {...props} />
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-primary-dark overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </span>
        <div className="flex items-center gap-4">
          <Tag name="IN STOCK" />
          <span className="text-[#474B57] text-sm font-normal">{formatCurrency(price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
export { ProductCard }
