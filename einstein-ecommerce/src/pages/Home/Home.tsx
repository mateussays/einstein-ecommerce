import Breadcrumb from '../../components/atoms/Breadcrumb'
import Pagination from '../../components/atoms/Pagination'
import CategoriesFilter from '../../components/molecules/CategoriesFilter'
import ProductList from '../../components/organisms/ProductList'
import useProducts from '../../hooks/useProducts'

const Home = () => {
  const { products, categories } = useProducts()
  return (
    <>
      <Breadcrumb currentPage="Home" />
      <div className="flex justify-between px-[126px] gap-7 mt-[39px]">
        <div className="min-w-[248px]">
          <CategoriesFilter categories={categories} />
        </div>
        <div className="flex flex-col min-w-[824px] gap-[38px] mb-[42px]">
          <ProductList products={products} />
          <div className="w-[344px] self-center">
            <Pagination
              currentPage={1}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }
export default Home
