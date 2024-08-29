import { Product } from '../../../types/product'
import ProductCard from '../../molecules/ProductCard'

type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
)

export default ProductList
export { ProductList }
