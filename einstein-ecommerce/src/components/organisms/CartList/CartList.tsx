import CartItem from '../../molecules/CartItem'

const CartList = () => {
  const cartItems = [
    {
      id: 1,
      imageSrc: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      productName: 'Classic Monochrome Tees',
      price: 20,
      initialQuantity: 1
    },
    {
      id: 2,
      imageSrc:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      productName: 'Lightweight Pullover Hoodie',
      price: 35,
      initialQuantity: 1
    }
  ]

  return (
    <div>
      <div className=" border-b border-[#E9E9EB] mb-12 w-full">
        <h1 className="text-base font-semibold text-primary-dark mb-[18px]">
          Seu carrinho
        </h1>
      </div>
      <div className="flex flex-col gap-[40px]">
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} onDelete={() => {}} />
        ))}
      </div>
    </div>
  )
}

export default CartList
export { CartList }
