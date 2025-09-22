import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register"

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />        
        <Route path='/register' element={<Register />} />       
        <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to="/"/>} />                
      </Routes>
    </BrowserRouter>
  );
}

export default App
