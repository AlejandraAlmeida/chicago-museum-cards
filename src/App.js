import './App.css';
import 'fontsource-roboto';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Component } from 'react';

import  Home  from './pages/Home';
import  Navigation  from './components/Navigation';
import  Details  from './pages/Details';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route> 
                        <Route path="/details" element={<Details/>}></Route> 
                    </Routes>
                </div>
            </Router>
        )
    }

}

export default App;
