import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import navigationOptions from './navigationOptions'

import Icon from '../../atoms/Icon/'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative">
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>
      <ul
        className={`lg:flex lg:gap-8 ${
          isOpen ? 'block' : 'hidden'
        } lg:block absolute lg:static bg-white lg:bg-transparent p-2 lg:p-0 lg:space-y-0 space-y-2`}
      >
        {navigationOptions.map(option => (
          <li
            key={option.title}
            className="border-b lg:border-none text-tertiary-dark font-medium text-sm"
          >
            <NavLink
              to={option.href}
              className="block p-2 lg:p-0"
              onClick={() => setIsOpen(false)}
            >
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
