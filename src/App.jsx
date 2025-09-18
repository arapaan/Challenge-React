import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const name = 'Arapaan';

function Title() {
  return <div className='text-white pt-16'>
    <h2 className='font-bold'>HELLO THERE</h2>
    <h3 className='font-semibold'>To access this website, please log in first.</h3>
  </div>;
}

function Modal() {
  return <div className='bg-white rounded-xl border-red-50 ml-60 mr-60 h-96'>
    <h1>p</h1>
  </div>;
}

function App() {  
  return (
    <div className='bg-black bg-cover min-h-screen w-full items-center justify-center'>
      <Title />
      <Modal />
    </div>
  );
}

export default App
