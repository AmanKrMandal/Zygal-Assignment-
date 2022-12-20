import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
