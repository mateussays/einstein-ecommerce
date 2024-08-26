import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/molecules/Navigation'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
      </Router>
    </>
  )
}
export { App }
export default App
