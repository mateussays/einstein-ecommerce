import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchIcon } from '../../atoms/Icons'
import Input from '../../atoms/Input'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = () => {
    const searchPath = `?search=${query}`
    const basePath = location.pathname === '/' ? '' : '/'
    navigate(`${basePath}${searchPath}`)
    setQuery('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <Input
        placeholder="Procure um produto"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onClick={handleSearch}
        icon={<SearchIcon />}
      />
    </>
  )
}

export { SearchBar }
export default SearchBar
