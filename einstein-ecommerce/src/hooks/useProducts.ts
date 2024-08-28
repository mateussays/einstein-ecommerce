import { useState, useEffect } from 'react'
import {
  getProducts,
  getCategories,
  type Product
} from '../services/products-http'

export type ProductSummary = Pick<Product, 'id' | 'image' | 'price' | 'title'>

const useProducts = () => {
  const [products, setProducts] = useState<ProductSummary[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()

      const formattedData = data.map((product: Product) => ({
        id: product.id,
        image: product.image,
        price: product.price,
        title: product.title
      }))

      setProducts(formattedData)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories()

      setCategories(data)
    }

    fetchCategories()
  }, [])

  return { products, categories, loading }
}

export default useProducts
