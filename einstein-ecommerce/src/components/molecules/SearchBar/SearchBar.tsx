import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchIcon } from '../../atoms/Icons'
import Input from '../../atoms/Input/'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = () => {
    const isHome = location.pathname === '/'
    const searchPath = `?search=${query}`

    if (isHome) {
      navigate(searchPath)
    } else {
      navigate(`/` + searchPath)
    }

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
