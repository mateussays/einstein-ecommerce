import { Products } from '../../../hooks/useProducts'
import ProductCard from '../../molecules/ProductCard'

type ProductListProps = {
  products: Products
}

const ProductList = (props: ProductListProps) => {
  const { products } = props

  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
export { ProductList }
