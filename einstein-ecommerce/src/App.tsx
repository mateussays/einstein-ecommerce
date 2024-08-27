import { BrowserRouter as Router } from 'react-router-dom'

import SearchBar from './components/molecules/SearchBar/SearchBar'

const App = () => {
  return (
    <>
      <Router>
        <SearchBar />
      </Router>
    </>
  )
}
export { App }
export default App
