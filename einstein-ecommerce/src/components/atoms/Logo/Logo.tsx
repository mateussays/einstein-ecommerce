import { Link } from 'react-router-dom'
import { LogoIcon } from '../Icons'

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" to={'/'}>
      <LogoIcon />
      <span className="font-manrope text-xl font-extrabold">Ecommerce</span>
    </Link>
  )
}

export { Logo }
export default Logo
