import { Link } from 'react-router-dom'
import Button from '../../atoms/Button'

const OrderSummary = () => {
  return (
    <div className="flex flex-col border rounded border-tertiary-lightest pt-8 px-6 pb-10 w-full">
      <h1 className="text-base font-semibold text-primary-dark">
        Order Summary
      </h1>

      <div className="flex flex-col gap-3 mt-10 border-b pb-6 border-tertiary-lightest">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-tertiary-dark">Subtotal</p>
          <p className="text-sm text-primary-dark font-medium">R$ 100.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-tertiary-dark">Frete</p>
          <p className="text-sm  text-primary-dark font-medium">Grátis</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-tertiary-dark">Tax:</p>
          <p className="text-sm  text-primary-dark font-medium">R$ 25.00</p>
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-9">
        <p className="text-sm font-semibold text-primary-dark">Total</p>
        <p className="text-sm font-semibold text-primary-dark">R$ 125.00</p>
      </div>

      <Button label="Checkout" onClick={() => {}} className="rounded" />

      <Link
        to="/"
        className="text-xs text-primary-dark mt-8 font-medium underline self-center"
      >
        Continue na loja
      </Link>
    </div>
  )
}

export { OrderSummary }
export default OrderSummary
