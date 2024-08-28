import CartBadge from '../../atoms/CartBadge/CartBadge'
import Logo from '../../atoms/Logo'
import UserIconButton from '../../atoms/UserIconButton'
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
        <UserIconButton />
      </div>
    </header>
  )
}

export { Header }
export default Header
