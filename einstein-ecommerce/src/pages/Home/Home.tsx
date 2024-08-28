import Breadcrumb from '../../components/atoms/Breadcrumb'
import Pagination from '../../components/atoms/Pagination'
import CategoriesFilter from '../../components/molecules/CategoriesFilter'
import ProductList from '../../components/organisms/ProductList'
import useProducts from '../../hooks/useProducts'
import { useState, useEffect } from 'react'

const Home = () => {
  const {
    products,
    categories,
    loading,
    currentPage,
    totalPages,
    handlePageChange,
    fetchProductsByCategory
  } = useProducts()

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    fetchProductsByCategory(selectedCategory)
  }, [selectedCategory])

  if (loading) return <div>Loading...</div>

  return (
    <>
      <Breadcrumb currentPage="Home" />
      <div className="flex justify-between px-[126px] gap-7 mt-[39px]">
        <div className="min-w-[248px]">
          <CategoriesFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="flex flex-col min-w-[824px] gap-[38px] mb-[42px]">
          <ProductList products={products} />
          <div className="w-[344px] self-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }
export default Home
