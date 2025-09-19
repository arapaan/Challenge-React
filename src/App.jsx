import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Dashboard from "./Dashboard";

// const name = 'Arapaan';

// function Title() {
//   return <div className='absolute top-5 left-5 text-white font-semibold'>
//     Home page
//   </div>;
// }

// function Modal() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [Error, setError] = useState("");
//   
// }

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
