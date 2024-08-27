import { SearchIcon } from '../../atoms/Icons'
import Input from '../../atoms/Input/'

const SearchBar = () => {
  return (
    <div>
      <Input
        placeholder="Procure um produto"
        value=""
        onChange={() => {}}
        icon={<SearchIcon />}
      />
    </div>
  )
}

export { SearchBar }
export default SearchBar
