import { useState, useEffect } from 'react'

import useProducts from '../../hooks/useProducts'
import Loading from '../../components/atoms/Loading'
import Breadcrumb from '../../components/atoms/Breadcrumb'
import CategoriesFilter from '../../components/molecules/CategoriesFilter'
import ProductList from '../../components/organisms/ProductList'
import Pagination from '../../components/atoms/Pagination'

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

  if (loading) return <Loading />

  return (
    <>
      <Breadcrumb currentPage="Home" />
      <div className="flex px-[126px] gap-7 mt-[39px]">
        <div className="min-w-[248px]">
          <CategoriesFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="flex flex-col gap-[38px] mb-[42px]">
          {!products.length && (
            <div className="self-center text-primary-dark text-base">
              Nenhum produto encontrado :(
            </div>
          )}

          {!!products.length && (
            <>
              <ProductList products={products} />
              <div className="w-[344px] self-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export { Home }
export default Home
