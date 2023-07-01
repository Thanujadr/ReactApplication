import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dogdetails from './components/Dogdetails';
import Login from './components/Login';

function App() {
  return (
    
    <div className="App">
 <BrowserRouter>     
    
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/dogdetails/:breed" element={<Dogdetails/>}/>

<Route path="/" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
