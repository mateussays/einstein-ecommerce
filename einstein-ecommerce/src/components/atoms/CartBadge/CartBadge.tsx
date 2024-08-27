import Icon from '../Icon'

type TCartBadgeProps = {
  count: number
}

const CartBadge = (props: TCartBadgeProps) => {
  const { count } = props
  return (
    <div className="relative inline-block">
      {count > 0 && (
        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {count}
        </span>
      )}
      {/* Icon */}
      <Icon name="cart" />
    </div>
  )
}

export { CartBadge }
export default CartBadge
