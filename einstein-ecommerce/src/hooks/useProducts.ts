import { useState, useEffect, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { getProducts, getCategories } from '../services/products-http'
import { Product } from '../types/product'

const ITEMS_PER_PAGE = 9

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get('search')
    setSearchQuery(query || null)
    setCurrentPage(1)
  }, [location.search])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        let data = await getProducts()

        if (searchQuery) {
          data = data.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        }

        if (selectedCategory) {
          data = data.filter(product => product.category === selectedCategory)
        }

        setProducts(
          data.map(product => ({
            ...product,
            totalPrice: product.price,
            quantity: 1
          }))
        )
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchQuery, selectedCategory])

  const totalPages = useMemo(
    () => Math.ceil(products.length / ITEMS_PER_PAGE),
    [products.length]
  )

  const paginatedProducts = useMemo(
    () =>
      products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [products, currentPage]
  )

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page)
      }
    },
    [totalPages]
  )

  const fetchProductsByCategory = useCallback((category: string | null) => {
    setSelectedCategory(category)
  }, [])

  return {
    products: paginatedProducts,
    categories,
    loading,
    currentPage,
    totalPages,
    handlePageChange,
    fetchProductsByCategory
  }
}

export default useProducts
