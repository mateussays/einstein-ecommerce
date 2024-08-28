import { useState, useEffect } from 'react'
import Button from '../../atoms/Button'
import { AddToCartIcon, HeartIcon } from '../../atoms/Icons'

type ProductImageCardProps = {
  image: string
  id: number
  handleCart: () => void
}

const ProductImageCard = (props: ProductImageCardProps) => {
  const { image, handleCart, id } = props

  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    const checkFavorite = () => {
      const favoritesString = localStorage.getItem('favorites')
      const favorites: number[] = favoritesString
        ? JSON.parse(favoritesString)
        : []
      setIsFavorite(favorites.includes(id))
    }

    checkFavorite()
  }, [id])

  const handleFavoriteItem = (itemId: number) => {
    const favoritesString = localStorage.getItem('favorites')
    const favorites: number[] = favoritesString
      ? JSON.parse(favoritesString)
      : []

    const isCurrentlyFavorite = favorites.includes(itemId)

    if (isCurrentlyFavorite) {
      const updatedFavorites = favorites.filter(id => id !== itemId)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setIsFavorite(false)
      return
    }

    favorites.push(itemId)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    setIsFavorite(true)
  }

  return (
    <div className="relative w-[240px] h-[312px] group flex flex-col rounded items-center justify-center bg-secondary-dark">
      <div className="w-36 mt-4">
        <img
          src={image}
          alt="Produto"
          className="w-full h-full object-fit group-hover:opacity-70 transition-opacity duration-300 mix-blend-multiply"
        />
      </div>

      <div className="w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0">
        <Button
          label="Add to cart"
          onClick={handleCart}
          className="w-full rounded-b"
          icon={AddToCartIcon}
        />
      </div>

      <button
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => handleFavoriteItem(id)}
      >
        <HeartIcon
          fillColor={isFavorite ? '#b36e6e' : 'transparent'}
          strokeColor={isFavorite ? '#b36e6e' : '#5C5F6A'}
        />
      </button>
    </div>
  )
}

export default ProductImageCard
export { ProductImageCard }
