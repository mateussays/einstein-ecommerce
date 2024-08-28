import { type ProductSummary } from '../../../hooks/useProducts'
import ProductCard from '../../molecules/ProductCard'

type ProductListProps = {
  products: ProductSummary[]
}

const ProductList = (props: ProductListProps) => {
  const { products } = props


  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default ProductList
export { ProductList }
