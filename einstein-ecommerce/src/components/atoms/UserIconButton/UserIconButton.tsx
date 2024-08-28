import { Link } from 'react-router-dom'
import { UserIcon } from '../Icons'

const UserIconButton = () => {
  return (
    <Link to="/" className="focus:outline-none">
      <UserIcon />
    </Link>
  )
}

export { UserIconButton }
export default UserIconButton
