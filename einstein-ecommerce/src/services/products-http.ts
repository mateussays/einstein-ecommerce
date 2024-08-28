import { Product } from "../types/product"

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products')
  if (!response.ok) {
    throw new Error('Error searching for products')
  }
  const data: Product[] = await response.json()
  return data
}

const getCategories = async (): Promise<string[]> => {
  const response = await fetch('https://fakestoreapi.com/products/categories')
  if (!response.ok) {
    throw new Error('Error searching for categories')
  }
  const data: string[] = await response.json()
  return data
}

export { getProducts, getCategories }
