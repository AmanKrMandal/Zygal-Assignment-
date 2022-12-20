import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';


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
