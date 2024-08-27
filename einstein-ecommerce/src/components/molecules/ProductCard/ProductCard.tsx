import Tag from '../../atoms/Tag'
import ProductImageCard from '../ProductImageCard'

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProductImageCard />
      <div className='flex flex-col gap-3'>
        <span className="text-sm font-medium text-primary-dark">
          Classic Monochrome Tees
        </span>
        <div className='flex items-center gap-4'>
          <Tag name="IN STOCK" />
          <span className='text-[##474B57] text-sm font-normal'>
            R$ 35.00
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
export { ProductCard }
