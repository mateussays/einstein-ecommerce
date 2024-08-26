type TNavigationOption = {
  title: string
  href: string
}

const navigationOptions: TNavigationOption[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Categorias',
    href: '/#'
  },
  {
    title: 'Sobre',
    href: '/#'
  },
  {
    title: 'Contato',
    href: '/#'
  }
]

export { navigationOptions } 
export default navigationOptions
