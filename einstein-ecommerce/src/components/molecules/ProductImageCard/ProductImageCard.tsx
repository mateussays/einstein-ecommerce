import Button from '../../atoms/Button'
import { AddToCartIcon, HeartIcon } from '../../atoms/Icons'

type ProductImageCardProps = {
  image: string
}

const ProductImageCard = (props: ProductImageCardProps) => {
  const { image } = props

  return (
    <div className="relative w-[240px] h-[312px] group flex flex-col rounded items-center justify-center bg-secondary-dark">
      <div className="w-36 mt-4">
        <img
          src={image}
          alt="Produto"
          className=" w-full h-full object-fit group-hover:opacity-70 transition-opacity duration-300 mix-blend-multiply"
        />
      </div>

      <div className="w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0">
        <Button
          label="Add to cart"
          onClick={() => {}}
          className="w-full rounded-b"
          icon={AddToCartIcon}
        />
      </div>

      <button className="absolute top-4 right-4 text-tertiary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <HeartIcon />
      </button>
    </div>
  )
}

export default ProductImageCard
export { ProductImageCard }
