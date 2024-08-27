import ProductCard from '../../molecules/ProductCard'

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductList
export { ProductList }
