import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import navigationOptions from './navigationOptions'
import useResponsive from '../../../hooks/useResponsive'
import MenuMobileIcon from '../../atoms/Icons/MenuMobileIcon'

const Navigation = () => {
  const isMobile = useResponsive('sm')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  const renderMobileMenu = () => (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 text-tertiary-dark"
        aria-label="Toggle menu"
      >
        <MenuMobileIcon />
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md z-50 transform transition-transform duration-300 w-1/2 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 mt-2">
          {navigationOptions.map(({ title, href }) => (
            <li key={title} className="text-tertiary-dark font-medium text-sm">
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `block p-2 ${isActive ? 'text-primary-dark' : ''}`
                }
                onClick={toggleMenu}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )

  const renderDesktopMenu = () => (
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
  )

  return <nav>{isMobile ? renderMobileMenu() : renderDesktopMenu()}</nav>
}

export { Navigation }
export default Navigation
