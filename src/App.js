import clsx from 'clsx'
import { Link, Routes, Route } from 'react-router-dom'
import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles'
import Home from './Pages/Home.js'
import Contact from './Pages/Contact'
import News from './Pages/News'
function App() {
  return (
    <GlobalStyles>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to='contact'>Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </GlobalStyles>
  )
}

export default App