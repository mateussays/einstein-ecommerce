import useResponsive from '../../../hooks/useResponsive'
import CartBadge from '../../atoms/CartBadge/CartBadge'
import Logo from '../../atoms/Logo'
import UserIconButton from '../../atoms/UserIconButton'
import Navigation from '../../molecules/Navigation'
import SearchBar from '../../molecules/SearchBar/SearchBar'

const Header = () => {
  const isMobile = useResponsive('sm')

  const renderDesktopLayout = () => (
    <>
      <Logo />
      <Navigation />
      <SearchBar />
      <div className="flex items-center gap-8">
        <CartBadge />
        <UserIconButton />
      </div>
    </>
  )

  const renderMobileLayout = () => (
    <div className="flex flex-col justify-between gap-4 w-full">
      <div className="flex items-center px-4 justify-between w-full">
        <div className="flex items-center gap-2">
          <Navigation />
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          <CartBadge />
          <UserIconButton />
        </div>
      </div>
      <div className="self-center">
        <SearchBar />
      </div>
    </div>
  )

  return (
    <header className="flex items-center w-full md:justify-between py-5 md:pl-[42px] md:pr-[153px]">
      {isMobile ? renderMobileLayout() : renderDesktopLayout()}
    </header>
  )
}

export { Header }
export default Header
