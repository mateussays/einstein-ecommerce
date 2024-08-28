import { Link } from "react-router-dom"

import { CartIcon } from "../Icons"

type TCartBadgeProps = {
  count: number
}

const CartBadge = (props: TCartBadgeProps) => {
  const { count } = props
  return (
    <Link to="/cart" className="relative inline-block">
      {count > 0 && (
        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {count}
        </span>
      )}
      <CartIcon />
    </Link>
  )
}

export { CartBadge }
export default CartBadge
