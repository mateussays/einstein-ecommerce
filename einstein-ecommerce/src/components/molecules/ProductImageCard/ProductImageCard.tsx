import { useState, useEffect } from 'react'
import Button from '../../atoms/Button'
import { AddToCartIcon, HeartIcon } from '../../atoms/Icons'

type ProductImageCardProps = {
  image: string
  id: number
  handleCart: () => void
}

const ProductImageCard = ({ image, handleCart, id }: ProductImageCardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    const checkFavorite = () => {
      const favorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      ) as number[]
      setIsFavorite(favorites.includes(id))
    }
    checkFavorite()
  }, [id])

  const toggleFavorite = (itemId: number) => {
    const favorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    ) as number[]
    const isCurrentlyFavorite = favorites.includes(itemId)

    if (isCurrentlyFavorite) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter(id => id !== itemId))
      )
      setIsFavorite(false)
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, itemId]))
      setIsFavorite(true)
    }
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
        onClick={() => toggleFavorite(id)}
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
