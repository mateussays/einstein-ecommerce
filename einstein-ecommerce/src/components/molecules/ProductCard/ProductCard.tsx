import formatCurrency from '../../../utils/formatCurrency'
import Tag from '../../atoms/Tag'
import ProductImageCard from '../ProductImageCard'

type ProductCardProps = {
  title: string
  price: number
  image: string
}

const ProductCard = (props: ProductCardProps) => {
  const { title, price, image } = props

  return (
    <div className="flex flex-col gap-6">
      <ProductImageCard image={image} />
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
