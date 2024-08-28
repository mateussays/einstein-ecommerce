import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '../../atoms/Icons'
import Input from '../../atoms/Input/'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`?search=${query}`)
    setQuery('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div>
      <Input
        placeholder="Procure um produto"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        icon={<SearchIcon />}
      />
    </div>
  )
}

export { SearchBar }
export default SearchBar
