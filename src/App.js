import './App.css'
import 'fontsource-roboto'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Component } from 'react'

import Home from './pages/Home'
import Header from './components/HeaderBar'
import Details from './pages/Details'

class App extends Component {
  render () {
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
}

export default App
