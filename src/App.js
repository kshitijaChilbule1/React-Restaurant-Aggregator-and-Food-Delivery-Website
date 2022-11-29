import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
