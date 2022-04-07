import 'fontsource-roboto'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/HeaderBar'
import Details from './pages/Details'
function App () {
  return (
            <Router>
                <div className='App'>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/details" element={<Details/>}></Route>
                    </Routes>
                </div>
            </Router>
  )
}

export default App
