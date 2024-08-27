import CartBadge from '../../atoms/CartBadge/CartBadge'
import IconButton from '../../atoms/IconButton/IconButton'
import Logo from '../../atoms/Logo'
import Navigation from '../../molecules/Navigation'
import SearchBar from '../../molecules/SearchBar/SearchBar'

const Header = () => {
  return (
    <header className="flex items-center w-full justify-between py-5 pl-[42px] pr-[153px]">
      <Logo />
      <Navigation />
      <SearchBar />
      <div className="flex items center gap-8">
        <CartBadge count={3} />
        <IconButton onClick={() => {}} />
      </div>
    </header>
  )
}

export { Header }
export default Header
