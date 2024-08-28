import { NavLink } from 'react-router-dom'
import navigationOptions from './navigationOptions'

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-8 bg-white p-2">
        {navigationOptions.map(option => (
          <li
            key={option.title}
            className="text-tertiary-dark font-medium text-sm"
          >
            <NavLink to={option.href} className="block p-2">
              {option.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navigation }
export default Navigation
