type Product = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

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
export type { Product }
