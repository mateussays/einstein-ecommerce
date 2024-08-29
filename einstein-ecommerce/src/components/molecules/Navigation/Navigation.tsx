import { NavLink } from 'react-router-dom'
import navigationOptions from './navigationOptions'

const Navigation = () => (
  <nav>
    <ul className="flex gap-8 bg-white p-2">
      {navigationOptions.map(({ title, href }) => (
        <li key={title} className="text-tertiary-dark font-medium text-sm">
          <NavLink
            to={href}
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'text-primary-dark' : ''}`
            }
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export { Navigation }
export default Navigation
