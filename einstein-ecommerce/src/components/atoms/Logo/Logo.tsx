import Icon from '../Icon/Icon'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Icon name="logo" />
      <span className="font-manrope text-xl font-extrabold">Ecommerce</span>
    </div>
  )
}

export { Logo }
export default Logo
