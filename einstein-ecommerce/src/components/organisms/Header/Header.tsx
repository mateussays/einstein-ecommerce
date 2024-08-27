import CartBadge from '../../atoms/CartBadge/CartBadge'
import IconButton from '../../atoms/IconButton/IconButton'
import Logo from '../../atoms/Logo'
import Navigation from '../../molecules/Navigation'
import SearchBar from '../../molecules/SearchBar/SearchBar'

const Header = () => {
  return (
    <header className="flex items-center w-full justify-around py-5">
      <Logo />
      <Navigation />
      <SearchBar />
      <div className="flex items center gap-8">
        <CartBadge count={3} />
        <IconButton name="user" onClick={() => {}} />
      </div>
    </header>
  )
}

export { Header }
export default Header
