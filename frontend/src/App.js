import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './screens/Projects';
import Contact from './screens/Contact';
import Notfound from './screens/Notfound';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
