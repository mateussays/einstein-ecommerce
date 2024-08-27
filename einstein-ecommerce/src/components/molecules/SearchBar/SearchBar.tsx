import Icon from '../../atoms/Icon/Icon'
import Input from '../../atoms/Input/'

const SearchBar = () => {
  return (
    <div>
      <Input
        placeholder="Procure um produto"
        value=""
        onChange={() => {}}
        icon={<Icon name="search" />}
      />
    </div>
  )
}

export { SearchBar }
export default SearchBar
